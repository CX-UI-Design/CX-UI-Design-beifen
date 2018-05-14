<template>
  <div class="win">
    <cx-main-title>安装</cx-main-title>
    <!--npm install  template-->
    <cx-sub-title>npm 安装</cx-sub-title>
    <cx-describe-text>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</cx-describe-text>
    <cx-code :codeCont="npmicode" skin="github-gist"></cx-code>
    <!--CDN install template-->
    <cx-sub-title>CDN 安装</cx-sub-title>
    <cx-describe-text>目前CDN还在完善中，届时，只需要在页面上引入 js 和 css 文件即可开始使用</cx-describe-text>
    <cx-code :codeCont="cdnicode" skin="github-gist"></cx-code>
    <cx-tip-block>
      '我们建议使用 CDN 引入 cx-easy-form 的用户在链接地址上锁定版本，以免将来 cx-easy-form 升级时受到非兼容性更新的影响。'
    </cx-tip-block>
  </div>
</template>
<script>


  export default {
    name: 'language',
    components: {},
    data() {
      return {
        npmicode: 'npm i element-ui -S',
        cdnicode: '',
      }
    },
    created() {

    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
