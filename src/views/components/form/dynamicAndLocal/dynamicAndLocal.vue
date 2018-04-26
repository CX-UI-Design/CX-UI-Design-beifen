<template>
  <div class="win autoForm-index">
    <cx-main-title>动/静态数据表单</cx-main-title>
    <cx-describe-text>静态数据获取/动态数据获取 渲染表单</cx-describe-text>
    <!--local template-->
    <cx-sub-title>静态数据获取渲染表单</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.local" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="localFormTemplate"
                      :isLocal="true"
                      :localData="loaclFormdata"
                      :cover-data="coverData"
                      cue-type="only-error"
        ></cx-auto-form>
      </div>
      <div slot="description">
        通过设置属性 isLocal 为true ，并且赋予 localData 属性本地的数据值，即可开启本地数据静态渲染表单。注意：只要开启了isLocall属性，则动态获取数据失效。
      </div>
    </cx-demo-block>
    <!--local template-->
    <cx-sub-title>动态数据获取渲染表单</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.dynamic" skin="github-gist">
      <div slot="source">
        <cx-auto-form autoFormID="dynamicFormTemplate"
                      request-url="/mock/autoForm/dynamic"
                      :query="{id: 'dynamicFormTemplate'}"
                      :cover-data="coverData"
                      cue-type="only-error"
        ></cx-auto-form>
      </div>
      <div slot="description">
        通过设置属性 request-url 获取请求地址，按照需求设置 query 属性设置请求参数，请求方式 method 默认为get，也可自行配置属性修改
      </div>
    </cx-demo-block>
    <cx-sub-title>静态/动态 表单渲染数据</cx-sub-title>
    <cx-describe-text>通过后台生成或者本地配置一个Json对象，用来渲染表单（可根据需求剔除冗余，配置强相关属性）</cx-describe-text>
    <cx-code :codeCont="templeCode.formDataJson" skin="github-gist"></cx-code>


  </div>
</template>
<script>
  import {dynamicFormTemplate} from '../../../../mock/Form/dynamicFormTemp'
  import pickerOptionsMap from '../../../../static-data/form/picker-options'
  import {code} from './content-config'

  export default {
    name: 'dynamicAndLocal-view',
    components: {},
    data() {
      return {
        templeCode: code,
        loaclFormdata: dynamicFormTemplate.resultData,
        coverData: {
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,
          },
        },
      }
    },
    created() {
      this.$CX.autoForm.formController.set(this, 'localFormTemplate', {
        show: true,
      });
      this.$CX.autoForm.formController.set(this, 'dynamicFormTemplate', {
        show: true,
      });
    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
