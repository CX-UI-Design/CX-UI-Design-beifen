<template>
  <div class="win autoForm-index">
    <cx-main-title>Icon 图标</cx-main-title>
    <cx-describe-text>提供了2种使用图标的方式：1、SVG使用，2、类名Class使用。这里还列举了一些常用的图标集合（参考基于el）</cx-describe-text>
    <!--svg template-->
    <cx-sub-title>SVG</cx-sub-title>
    <cx-describe-text>直接通过设置属性iconName，即可使用。例如</cx-describe-text>
    <cx-demo-block :codeCont="iconcode.iconSvg.html" skin="github-gist">
      <div slot="source">
        <cx-icon-svg icon-class="fangchan"></cx-icon-svg>
        <cx-icon-svg icon-class="baobiao" style="margin: 0 50px"></cx-icon-svg>
        <cx-icon-svg icon-class="jifei"></cx-icon-svg>
      </div>
      <div slot="description">
        这里需要注意:"icon-class"属性名需要省略 #icon- 前缀，如 #icon-fangchan => fangchan
      </div>
    </cx-demo-block>
    <!--class template-->
    <cx-sub-title>Class</cx-sub-title>
    <cx-describe-text>直接通过设置类名Class，即可使用。例如</cx-describe-text>
    <cx-demo-block :codeCont="iconcode.iconClass.html" skin="github-gist">
      <div slot="source">
        <cx-icon-class class="el-icon-bell" style="padding: 0 5px"></cx-icon-class>
        <cx-icon-class class="el-icon-time" style="margin: 0 50px;padding: 0 5px"></cx-icon-class>
        <cx-icon-class class="el-icon-location" style="padding: 0 5px"></cx-icon-class>
      </div>
    </cx-demo-block>
  </div>
</template>
<script>
  import iconCode from './icon-code'

  export default {
    name: 'icon-view',
    components: {},
    data() {
      return {
        iconcode: iconCode,
      }
    },
    created() {

    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
