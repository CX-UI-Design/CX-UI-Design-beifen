<template>
  <div class="win autoForm-index">
    <cx-main-title>Radio 单选框</cx-main-title>
    <cx-describe-text>在一组备选项中进行单选</cx-describe-text>
    <!--normal template-->
    <cx-sub-title>基础用法</cx-sub-title>
    <cx-describe-text>直接通过设置属性iconName，即可使用。例如</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.normal" skin="github-gist">
      <div slot="source">
        <cx-radio v-model="radioInfo1.radioModel" :items="radioInfo1.radioItem"></cx-radio>
      </div>
    </cx-demo-block>
    <!--disabled template-->
    <cx-sub-title>禁用状态</cx-sub-title>
    <cx-describe-text>单选框全部不可用或单个不可用的状态。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.disabled" skin="github-gist">
      <div slot="source">
        <cx-radio v-model="radioInfo2.radioModel" :items="radioInfo2.radioItem"></cx-radio>
        <cx-radio v-model="radioInfo3.radioModel" :items="radioInfo3.radioItem" disabled></cx-radio>
      </div>
      <div slot="description">
        全部禁用直接在标签增加 disabled 即可，如需个别禁用，则在item数组的对应条目设置 disabled 为 false。
      </div>
    </cx-demo-block>
    <!--type template-->
    <cx-sub-title>按钮样式</cx-sub-title>
    <cx-describe-text>按钮样式的单选组合。</cx-describe-text>
    <cx-demo-block :codeCont="templeCode.type" skin="github-gist">
      <div slot="source">
        <cx-radio v-model="radioInfo4.radioModel" :items="radioInfo2.radioItem" type="button"></cx-radio>
      </div>
      <div slot="description">
        Radio 样式类型两种：normal（常规） /  Button（按钮）
      </div>
    </cx-demo-block>
    <!--Attributes table-->
    <cx-attributes-block type="attributes" title="Radio Attributes" :tableData="attributesData"></cx-attributes-block>
    <!--Events table-->
    <cx-attributes-block type="events" title="Radio Events" :tableData="eventsData"></cx-attributes-block>
  </div>
</template>
<script>
  import {code, dataInfo, attributes, events} from './content-config'

  export default {
    name: 'radio-view',
    components: {},
    data() {
      return {
        templeCode: code,
        radioInfo1: dataInfo.radioInfo1,
        radioInfo2: dataInfo.radioInfo2,
        radioInfo3: dataInfo.radioInfo3,
        radioInfo4: dataInfo.radioInfo4,
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
