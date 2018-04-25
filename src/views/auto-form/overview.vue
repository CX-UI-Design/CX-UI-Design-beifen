<template>
  <div>
    <!-- 表单一 -->
    <cx-auto-form autoFormID="changedForm-man"
                  request-url="/mock/autoForm/changed"
                  :query="{id: 'man'}"
                  :cover-data="coverData2"
                  cue-type="only-error"
                  @afterRequest="afterRequest1"
    >
      <!--按钮插槽模块-->
      <div slot="operation">
        <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-man"></cx-auto-form-operation>
      </div>
    </cx-auto-form>
    <!-- 表单二 -->
    <cx-auto-form autoFormID="changedForm-woman"
                  request-url="/mock/autoForm/changed"
                  :query="{id: 'woman'}"
                  :cover-data="coverData2"
                  cue-type="only-error"
                  @afterRequest="afterRequest2"
    >
      <div slot="operation">
        <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-woman"></cx-auto-form-operation>
      </div>
    </cx-auto-form>
  </div>
</template>

<script>
  import pickerOptionsMap from '../../static-data/form/picker-options';//引入本地时间日期控件的修改配置

  export default {
    data() {
      return {
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
      }
    },
    created() {
      //注册渲染表单
      this.$CX.autoForm.formController.set(this, 'changedForm-man', {
        show: true,
      })
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
            this.formNotify('可在提交前注入交互行为');
            //..............................  逻辑代码书写 ①
            const query = params.formData.modelData;
            //submit request
            this.$CX.autoForm.submit(this.submitUrl, query, () => {
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
