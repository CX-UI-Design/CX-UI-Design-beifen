<template>
  <cx-auto-form autoFormID="dynamicFormTemplate"
                request-url="/mock/autoForm/template"
                :query="{}"
                :cover-data="coverData"
                cue-type="only-error"
  ></cx-auto-form>
</template>

<script>
  import pickerOptionsMap from '../../static-data/form/picker-options';//引入本地时间日期控件的修改配置

  export default {
    data() {
      return {
        coverData: {
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,
          },
        },
      }
    },
    created() {
      //注册渲染表单
      this.$CX.autoForm.formController.set(this, 'localFormTemplate', {
        show: true,
      });
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
