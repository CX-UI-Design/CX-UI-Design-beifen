<template>
  <div class="win autoForm-index">
    <cx-main-title>表单的修改和交互</cx-main-title>
    <cx-describe-text>表单渲染数据的修改以及表单控件的交互行为</cx-describe-text>
    <!--modification template-->
    <cx-sub-title>表单渲染数据的修改</cx-sub-title>
    <cx-describe-text>表单渲染的数据可在 afterRequest 钩子函数中或者 cover-data 属性配置中修改</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.modification" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="dynamicFormTemplate"
                      request-url="/mock/autoForm/dynamic"
                      :query="{id: 'dynamicFormTemplate'}"
                      :cover-data="coverData1"
                      cue-type="only-error"
                      @afterRequest="afterRequest1"
        ></cx-auto-form>
      </div>
      <div slot="description">
        afterRequest 钩子函数主要指获取到数据（静态获取/动态请求）后、表单内置 form-item 循环体渲染之前的操作，在此之中修改数据所需数据；
        cover-data 属性 是指 form-item 循环体渲染时获取数据通道的再次修改，即改变获取数据的方式，即可达到覆盖原有数据的功能
      </div>
    </cx-demo-block>
    <cx-tip-block>
      <cx-code :codeCont="tip.modification" skin="github-gist" transparent></cx-code>
    </cx-tip-block>
    <!--interacting template-->
    <cx-sub-title>表单控件的交互行为</cx-sub-title>
    <cx-describe-text>表单控件的交互行为可在 cover-data 属性配置中配置，或者在 提交/重置 等显性时间中体现。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.Interacting" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="changedForm-man"
                      request-url="/mock/autoForm/changed"
                      :query="{id: 'man'}"
                      :cover-data="coverData2"
                      cue-type="only-error"
                      @afterRequest="afterRequest2"
        >
          <div slot="operation">
            <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-man"></cx-auto-form-operation>
          </div>
        </cx-auto-form>
        <cx-auto-form autoFormID="changedForm-woman"
                      request-url="/mock/autoForm/changed"
                      :query="{id: 'woman'}"
                      :cover-data="coverData2"
                      cue-type="only-error"
                      @afterRequest="afterRequest3"
        >
          <div slot="operation">
            <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-woman"></cx-auto-form-operation>
          </div>
        </cx-auto-form>
        <!--Attributes table-->
        <cx-attributes-block type="submitResault" title="提交结果" :tableData="formSubmitData"></cx-attributes-block>
      </div>
      <div slot="description">
        afterRequest 钩子函数主要指获取到数据（静态获取/动态请求）后、表单内置 form-item 循环体渲染之前的操作，在此之中修改数据所需数据；
        cover-data 属性 是指 form-item 循环体渲染时获取数据通道的再次修改，即改变获取数据的方式，即可达到覆盖原有数据的功能
      </div>
    </cx-demo-block>
  </div>
</template>
<script>
  import {dynamicAndLocal} from '../../../../mock/Form/dynamicFormTemp'
  import pickerOptionsMap from '../../../../static-data/form/picker-options'

  import {code, tip} from './content-config'

  export default {
    name: 'dynamicAndLocal-view',
    components: {},
    data() {
      return {
        tip: tip,
        templeCode: code,
        //表单提交地址
        submitUrl: '/mock/autoForm/submit',
        //表单按钮信息
        buttonInfo: [
          {name: '确定', style: 'primary', event: this.autoFormSubmit},
          {name: '取消', style: '', event: this.autoFormCancel},
        ],
        /* ===================== 覆盖/补充自动表单数据：=====================
        书写格式：{
              xxx（属性名称）：{
                  formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）
              }
          }
          只要这个属性名是可配置的，都可以修改，具体实现规则详见源码
        * =================================================================
        */
        coverData1: {
          //覆盖属性-pickerOptions的属性值
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,//修改出生日期的组件 pickerOptions的属性值（修改为只能获取当前时间点之前的时间）
          },
          //覆盖属性-宽度
          fieldWidth: {
            origin: 700,//覆盖改变 - 籍贯字段的组件 宽度为700
            nation: 700,//覆盖改变 - 民族字段的组件 宽度为700
          },
          //覆盖属性-所占列数
          resourcefieldColspan: {
            origin: 2,   //覆盖改变 - 籍贯字段的组件 所占列数为2
            nation: 2,   //覆盖改变 - 民族字段的组件 所占列数为2
          },
          //覆盖属性-请求地址
          dynamicUrl: {
            cardType: 'system/dictionary/select', //修改证件类型组件的 请求地址
          },
          //覆盖属性-请求数据
          dynamicQuery: {
            cardType: 'cardType',//修改证件类型组件的 请求数据
          },
          //覆盖属性-可清空功能
          clearable: {
            cardType: true,//开启证件类型组件的 可清空功能
          }
        },
        coverData2: {
          //覆盖属性-绑定事件
          resourcefieldBindingfnList: {
            sex: (params) => {
              //当事件为 'change' ，且不为 'visibleChange' 时
              if (params.type === 'change' && params.type !== 'visibleChange') {
                const val = params.formData.modelData[params.modelKey];
                //选择男性时
                if (val === '0') {
                  //销毁表单 'changedForm-woman'
                  this.$CX.autoForm.formController.delete(this, 'changedForm-woman');
                  //注册表单 'changedForm-man'
                  this.$CX.autoForm.formController.set(this, 'changedForm-man', {
                    show: true,
                  });
                }
                //选择女性时
                if (val === '1') {
                  //销毁表单 'changedForm-man'
                  this.$CX.autoForm.formController.delete(this, 'changedForm-man');
                  //注册表单 'changedForm-woman'
                  this.$CX.autoForm.formController.set(this, 'changedForm-woman', {
                    show: true,
                  })
                }
              }
            }
          },
        },
        formSubmitData: [],
      }
    },
    created() {
      const a = this.$store.state.roleButton.roleButtonList;
      console.log(a);
      this.$CX.autoForm.formController.set(this, 'dynamicFormTemplate', {
        show: true,
      });
      this.$CX.autoForm.formController.set(this, 'changedForm-man', {
        show: true,
      })

    },
    mounted() {

    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest1(vm, data) {
        //..............................  逻辑代码书写
        data.modelData.origin = '浙江-杭州';//修改 origin 字段值为 '浙江-杭州'
      },
      //自动表单请求获取数据 之后 操作
      afterRequest2(vm, data) {
        //..............................  逻辑代码书写
        data.modelData.sex = '0';//修改 origin 字段值为 '浙江-杭州'
      },
      //自动表单请求获取数据 之后 操作
      afterRequest3(vm, data) {
        //..............................  逻辑代码书写
        data.modelData.sex = '1';//修改 origin 字段值为 '浙江-杭州'
      },

      /**
       * auto-form submit  ( 提交按钮事件操作 )
       * @param vm
       * @param formName       button-info
       */
      autoFormSubmit(vm, formName) {
        this.formSubmitData = [];
        this.$CX.autoForm.validate(vm, formName).then(
          params => {
            this.formNotify('可在提交前注入交互行为');
            //..............................  逻辑代码书写 ①
            const query = params.formData.modelData;
            //submit request
            this.$CX.autoForm.submit(this.submitUrl, query, () => {
              const model = query;
              for (let k in model) {
                this.formSubmitData.push({key: k, value: model[k].toString()})
              }
              //..............................  逻辑代码书写 ②
              this.$message({message: '保存成功', type: 'success', duration: 2000});
            })
          }
        ).catch(err => {
            //..............................  逻辑代码书写 ③
            console.log(err)
          }
        )
      },
      /**
       * auto-form Cancel  ( 取消按钮事件操作 )
       * @param vm
       * @param formName       button-info
       */
      autoFormCancel(vm, formName) {
        this.$CX.autoForm.resetForm(vm, formName).then(
          params => {
            this.formSubmitData = [];
            //..............................  逻辑代码书写 ①
            this.formNotify('可在重置前注入交互行为');
            this.$message({message: '重置成功', type: 'success', duration: 2000});
          }
        )
      },
      /**
       * form notify
       * @param msg
       */
      formNotify(msg) {
        const h = this.$createElement;
        this.$notify({
          title: '注入交互行为',
          message: h('i', {style: 'color: teal'}, msg)
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
