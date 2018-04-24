<template>
  <cx-auto-form autoFormID="dynamicFormTemplate"
                request-url="/mock/autoForm/template"
                :query="{}"
                :cover-data="coverData"
                cue-type="only-error"
                @afterRequest="afterRequest"
  ></cx-auto-form>
</template>

<script>
  import pickerOptionsMap from '../../static-data/form/picker-options';//引入本地时间日期控件的修改配置

  export default {
    data() {
      return {
        /* ===================== 覆盖/补充自动表单数据：=====================
          书写格式：{
             xxx（属性名称）：{
                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）
             }
          }
          只要这个属性名是可配置的，都可以修改，具体实现规则详见源码
       * =================================================================
       */
        coverData: {
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
      }
    },
    created() {
      //注册渲染表单
      this.$CX.autoForm.formController.set(this, 'dynamicFormTemplate', {
        show: true,
      });
    },
    methods: {
      //自动表单请求获取数据之后操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写 ①
        data.modelData.origin = '浙江-杭州';//修改 origin 字段值为 '浙江-杭州'
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
