<template>
  <div class="win autoForm-index">
    <cx-main-title>Interactive behavior 表单行为交互</cx-main-title>
    <cx-describe-text>表单或表单控件的交互行为</cx-describe-text>
    <!--interacting template-->
    <cx-sub-title>表单控件的交互行为</cx-sub-title>
    <cx-describe-text>表单控件的交互行为可在 cover-data 属性配置中配置，或者在 提交/重置 等显性时间中体现。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.Interacting" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="changedForm-man"
                      request-url="/mock/autoForm/changed"
                      :query="{id: 'man'}"
                      :cover-data="coverData1"
                      cue-type="only-error"
                      @afterRequest="afterRequest1"
        >
          <div slot="operation">
            <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-man"></cx-auto-form-operation>
          </div>
        </cx-auto-form>
        <cx-auto-form autoFormID="changedForm-woman"
                      request-url="/mock/autoForm/changed"
                      :query="{id: 'woman'}"
                      :cover-data="coverData1"
                      cue-type="only-error"
                      @afterRequest="afterRequest2"
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

    <cx-sub-title>表单控件的事件绑定</cx-sub-title>
    <cx-describe-text>表单控件的事件有 change 、click、visible-change 等,你可以通过内置事件配置，外部事件配置输入，
      或者cover覆盖对应字段所对应的事件来进行交互行为的书写，具体详见简单的使用示例。
    </cx-describe-text>
    <cx-demo-block :codeCont="templeCode.event" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="formEventTemp"
                      request-url="/mock/autoForm/event"
                      :query="{}"
                      :cover-data="coverData2"
                      cue-type="only-error"
        >
        </cx-auto-form>
      </div>
      <div slot="description">
        <p> 1、本例中，标签绑定的 coverData2 对象中，给与属性赋予需要执行的函数，如采用es5的写法，需要注意this的指向，因绑定的函数实际作用在封装的组件内部，
          而非在本页面中，故而无法直接 this.xx 使用 data 中数据和 methods 中定义的方法，可以先前存储当前页面的实例对象，再在事件中调取使用。
        </p><br>
        <p> 2、内置事件可直接在配置中以：事件类型 + 事件名称 的形式书写，如：'chenge-eventTemp'。外置导入事件可在导入后，同样采用和内置事件一样的方式使用。</p>
      </div>
    </cx-demo-block>
    <cx-tip-block>
      <cx-code :codeCont="tip.event" skin="github-gist" transparent></cx-code>
    </cx-tip-block>
  </div>
</template>
<script>
  import pickerOptionsMap from '../../../../static-data/form/picker-options'
  import {code, tip} from './content-config'

  export default {
    name: 'interacting-view',
    components: {},
    data() {
      return {
        templeCode: code,
        tip: tip,
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
        coverData2: {
          //覆盖属性-绑定事件
          resourcefieldBindingfnList: {
            //这里不用es6 箭头函数做示例，稍微复杂一点
            cardType: function (params) {
              //当事件为 'change' ，且不为 'visibleChange' 时
              if (params.type === 'change' && params.type !== 'visibleChange') {
                //获取this指向
                const _this = params.vm
                //获取我们在 created 钩子函数中存储的当前页面的实例对象
                const formVm = _this.$CX.autoForm.formerVm.get(_this, 'interacting-view');
                //弹出提示
                formVm.formNotify(formVm, '证件类型改变了，你也可以自行在其中加入表单交互的相关逻辑')
              }
            }
          },
        },
        formSubmitData: [],
      }
    },
    created() {
      //存储当前页面的实例对象
      this.$CX.autoForm.formerVm.set(this, 'interacting-view', this);
      //注册表单 'changedForm-man'
      this.$CX.autoForm.formController.set(this, 'changedForm-man', {
        show: true,
      })
      //注册表单 'formEventTemp'
      this.$CX.autoForm.formController.set(this, 'formEventTemp', {
        show: true,
      })
    },
    mounted() {

    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest1(vm, data) {
        //..............................  逻辑代码书写
        data.modelData.sex = '0';//修改 origin 字段值为 '浙江-杭州'
      },
      //自动表单请求获取数据 之后 操作
      afterRequest2(vm, data) {
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
            this.formNotify(this, '可在提交前注入交互行为');
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
            this.formNotify(this, '可在重置前注入交互行为');
            this.$message({message: '重置成功', type: 'success', duration: 2000});
          }
        )
      },
      /**
       *  form notify
       * @param vm
       * @param msg
       */
      formNotify(vm, msg) {
        const h = vm.$createElement;
        vm.$notify({
          title: '注入交互行为',
          message: h('i', {style: 'color: teal'}, msg)
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
