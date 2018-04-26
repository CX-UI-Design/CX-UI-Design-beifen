<template>
  <div class="win autoForm-index">
    <cx-main-title>Data modify 表单数据修改</cx-main-title>
    <cx-describe-text>表单渲染数据的修改/二次修改/交互后的修改等</cx-describe-text>
    <!--modification template-->
    <cx-sub-title>表单渲染数据的修改</cx-sub-title>
    <cx-describe-text>表单渲染的数据可在 afterRequest 钩子函数中或者 cover-data 属性配置中修改</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.modification" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="dynamicFormTemplate"
                      request-url="/mock/autoForm/dynamic"
                      :query="{id: 'dynamicFormTemplate'}"
                      :cover-data="coverData"
                      cue-type="only-error"
                      @afterRequest="afterRequest"
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
  </div>
</template>
<script>
  import pickerOptionsMap from '../../../../static-data/form/picker-options'
  import {code, tip} from './content-config'

  export default {
    name: 'modify-view',
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
      this.$CX.autoForm.formController.set(this, 'dynamicFormTemplate', {
        show: true,
      });
    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写
        data.modelData.origin = '浙江-杭州';//修改 origin 字段值为 '浙江-杭州'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
