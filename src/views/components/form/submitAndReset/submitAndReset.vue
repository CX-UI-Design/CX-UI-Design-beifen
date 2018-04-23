<template>
  <div class="win autoForm-index">
    <cx-main-title>Input 输入框</cx-main-title>
    <cx-describe-text>通过鼠标或键盘输入字符</cx-describe-text>
    <!--normal template-->
    <cx-sub-title>基础用法</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.normal" skin="github-gist">
      <div slot="source">
        <cx-input v-model="inputInfo1" placeholder="请输入内容" :width="200" height="32px"></cx-input>
      </div>
      <div slot="description">
        通过 width / height 属性指定宽高，注意宽高属性值可以为数字（32），也可以为字符串（32px）
      </div>
    </cx-demo-block>
    <!--disabled template-->
    <cx-sub-title>禁用状态</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.disabled" skin="github-gist">
      <div slot="source">
        <cx-input v-model="inputInfo2" placeholder="请输入内容" :width="200" :height="32" disabled></cx-input>
      </div>
      <div slot="description">
        通过 disabled 属性指定是否禁用 input 组件
      </div>
    </cx-demo-block>
    <!--disabled template-->
    <cx-sub-title>只读状态</cx-sub-title>
    <cx-demo-block :codeCont="templeCode.readonly" skin="github-gist">
      <div slot="source">
        <cx-input v-model="inputInfo3" placeholder="请输入内容" :width="200" readonly></cx-input>
      </div>
      <div slot="description">
        通过 readonly 属性决定 input 组件是否只读
      </div>
    </cx-demo-block>
    <!--indeterminate template-->
    <cx-sub-title>文本域</cx-sub-title>
    <cx-describe-text>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.type" skin="github-gist">
      <div slot="source">
        <cx-input v-model="inputInfo4" placeholder="请输入内容" type="textarea" :width="600" :height="64" style="margin-bottom: 30px"></cx-input>
        <cx-input v-model="inputInfo5" placeholder="请输入内容" type="textarea" :width="600" :rows="5" :minlength="10" :maxlength="20"></cx-input>
      </div>
      <div slot="description">
        通过设置 minlength 和 maxlength 属性来设置最大最小输入长度,可以通过设置 rows 或者 height 来控制 文本域的输入高度
      </div>
    </cx-demo-block>
    <!--type template-->
    <cx-sub-title>带 icon 的输入框</cx-sub-title>
    <cx-describe-text>带有图标标记输入类型。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.type" skin="github-gist">
      <div slot="source">
        <cx-input v-model="inputInfo6" placeholder="请输入内容" :width="200" customIcon="fangchan"></cx-input>
        <cx-input v-model="inputInfo7" placeholder="请输入内容" :width="200" customIcon="baobiao" @iconClick="iconClick(inputInfo7)"></cx-input>
      </div>
      <div slot="description">
        通过设置 iconClick 属性来设置输入框图标的点击事件
      </div>
    </cx-demo-block>
    <!--Attributes table-->
    <cx-attributes-block type="attributes" title="Checkbox Attributes" :tableData="attributesData"></cx-attributes-block>
    <!--Events table-->
    <cx-attributes-block type="events" title="Checkbox Events" :tableData="eventsData"></cx-attributes-block>

  </div>
</template>
<script>
  import {code, dataInfo, attributes, events} from './content-config'

  export default {
    name: 'checkbox-view',
    components: {},
    data() {
      return {
        templeCode: code,
        inputInfo1: dataInfo.inputModel1,
        inputInfo2: dataInfo.inputModel2,
        inputInfo3: dataInfo.inputModel3,
        inputInfo4: dataInfo.inputModel4,
        inputInfo5: dataInfo.inputModel5,
        inputInfo6: dataInfo.inputModel6,
        inputInfo7: dataInfo.inputModel7,
        attributesData: attributes,
        eventsData: events,
      }
    },
    created() {

    },
    methods: {
      iconClick(value) {
        alert('this is input icon click, value is :' + value)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-input {
    display: inline-block;
  }
</style>
