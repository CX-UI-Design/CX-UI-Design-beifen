<template>
  <div class="win autoForm-index">
    <cx-main-title>Checkbox 多选框</cx-main-title>
    <cx-describe-text>一组备选项中进行多选</cx-describe-text>
    <!--normal template-->
    <cx-sub-title>基础用法</cx-sub-title>
    <cx-describe-text>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.normal" skin="github-gist">
      <div slot="source">
        <cx-checkbox v-model="checkboxInfo1.checkboxModel" :items="checkboxInfo1.checkboxItem"></cx-checkbox>
      </div>
    </cx-demo-block>
    <!--disabled template-->
    <cx-sub-title>禁用状态</cx-sub-title>
    <cx-describe-text>多选框不可用状态。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.disabled" skin="github-gist">
      <div slot="source">
        <cx-checkbox v-model="checkboxInfo2.checkboxModel" :items="checkboxInfo2.checkboxItem"></cx-checkbox>
        <cx-checkbox v-model="checkboxInfo3.checkboxModel" :items="checkboxInfo3.checkboxItem" disabled style="margin-top: 30px"></cx-checkbox>
      </div>
      <div slot="description">
        全部禁用直接在标签增加 disabled 即可，如需个别禁用，则在item数组的对应条目设置 disabled 为 false。
      </div>
    </cx-demo-block>
    <!--indeterminate template-->
    <cx-sub-title>indeterminate 状态</cx-sub-title>
    <cx-describe-text>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.type" skin="github-gist">
      <div slot="source">
        <cx-checkbox v-model="checkboxInfo4.checkboxModel" :items="checkboxInfo4.checkboxItem" indeterminate></cx-checkbox>
      </div>
    </cx-demo-block>
    <!--type template-->
    <cx-sub-title>按钮样式</cx-sub-title>
    <cx-describe-text>按钮样式的多选组合。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.type" skin="github-gist">
      <div slot="source">
        <cx-checkbox v-model="checkboxInfo5.checkboxModel" :items="checkboxInfo5.checkboxItem" type="button"></cx-checkbox>
      </div>
      <div slot="description">
        Checkbox 样式类型两种：normal（常规） /  Button（按钮）
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
        checkboxInfo1: dataInfo.checkboxInfo1,
        checkboxInfo2: dataInfo.checkboxInfo2,
        checkboxInfo3: dataInfo.checkboxInfo3,
        checkboxInfo4: dataInfo.checkboxInfo4,
        checkboxInfo5: dataInfo.checkboxInfo5,
        attributesData: attributes,
        eventsData: events,
      }
    },
    created() {

    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
