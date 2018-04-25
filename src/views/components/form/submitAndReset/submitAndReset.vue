<template>
  <div class="win autoForm-index">
    <cx-main-title>表单的提交与重置</cx-main-title>
    <cx-describe-text>静态数据获取/动态数据获取 渲染表单</cx-describe-text>
    <!--local template-->
    <cx-sub-title>提交与重置示例</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.main" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="dynamicFormTemplate"
                      request-url="/mock/autoForm/dynamic"
                      :query="{id: 'dynamicFormTemplate'}"
                      :cover-data="coverData"
                      cue-type="only-error"
                      @afterRequest="afterRequest"
        ></cx-auto-form>
        <!--button handle-->
        <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="dynamicFormTemplate" style="text-align: center;margin-top: 30px"></cx-auto-form-operation>
        <!--Attributes table-->
        <cx-attributes-block type="submitResault" title="提交结果" :tableData="formSubmitData"></cx-attributes-block>

      </div>
      <div slot="description">
        使用组件表单操作模块组件：cx-auto-form-operation 来快速构建操作模块界面。其中，需要设置按钮信息 buttonInfo 属性，传入一个数组信息，
        且注意 autoFormID 属性值是否和表单 autoFormID 属性值一致
      </div>
    </cx-demo-block>
  </div>
</template>
<script>
  import {dynamicAndLocal} from '../../../../mock/Form/dynamicFormTemp'
  import pickerOptionsMap from '../../../../static-data/form/picker-options'

  import {code} from './content-config'

  export default {
    name: 'dynamicAndLocal-view',
    components: {},
    data() {
      return {
        templeCode: code,
        submitUrl: '/mock/autoForm/submit',
        //表单按钮信息
        buttonInfo: [
          {name: '确定', style: 'primary', event: this.autoFormSubmit},
          {name: '取消', style: '', event: this.autoFormCancel},
        ],
        coverData: {
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,
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
    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写
        console.log('afterRequest');
        console.log(data.modelData);

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
            this.$message({message: '重置成功', type: 'success', duration: 2000});
          }
        )
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
