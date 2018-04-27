<template>
  <div class="win">
    <cx-main-title>引入 cx-easy-form</cx-main-title>
    <cx-describe-text>你可以引入整个 cx-easy-form，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 cx-easy-form。</cx-describe-text>

    <!--rely on template-->
    <cx-sub-title>依赖</cx-sub-title>
    <cx-describe-text>在开始之前，我们需要引入所依赖的Element-UI</cx-describe-text>
    <cx-code :codeCont="code.relyOn" skin="github-gist" type="js"></cx-code>

    <!--complete loading template-->
    <cx-sub-title>完整引入</cx-sub-title>
    <cx-describe-text>例如：你可以在 main.js 中写入以下内容：</cx-describe-text>
    <cx-code :codeCont="code.loading" skin="github-gist" type="js"></cx-code>
    <cx-describe-text>以上代码便完成了 cx-easy-form 的引入。需要注意的是，样式文件需要单独引入。</cx-describe-text>
    <cx-code :codeCont="code.css" skin="github-gist" type="js"></cx-code>

    <!--Load on demand template-->
    <cx-sub-title>按需引入</cx-sub-title>
    <cx-describe-text>
      <p>借助 <a href="">babel-plugin-component</a> ，我们可以只引入需要的组件，以达到减小项目体积的目的。</p>
      <p>首先，安装 babel-plugin-component：</p>
    </cx-describe-text>
    <cx-code codeCont="npm install babel-plugin-component -D" skin="github-gist"></cx-code>
    <cx-describe-text>按需引入功能剩余正在开发中。</cx-describe-text>


    <!--global config template-->
    <cx-sub-title>全局配置</cx-sub-title>
    <cx-describe-text>在引入 Element 时，可以传入一个全局配置对象。相关说明如下</cx-describe-text>
    <!--options config table-->
    <cx-attributes-block type="attributes" :tableData="optionsConf"></cx-attributes-block>
    <br>
    <cx-describe-text>按照引入 Element 的方式，具体操作如下：</cx-describe-text>
    <cx-code :codeCont="code.globalConf" skin="github-gist" type="js"></cx-code>
    <cx-tip-block>根据实际需要进行配置，其中 formEvent 和 keyRefer 需要特别说明。相关示例如下：</cx-tip-block>
    <cx-describe-text>将相关外置方法书写在一个js文件中，导入挂载到 formEvent 属性上，请严格按照示例书写</cx-describe-text>
    <cx-code :codeCont="code.formEvent" skin="github-gist" type="js"></cx-code>
    <cx-describe-text>keyRefer 同理，请严格按照示例书写</cx-describe-text>
    <cx-code :codeCont="code.keyRefer" skin="github-gist" type="js"></cx-code>
    <!--start-->
    <cx-sub-title>开始使用</cx-sub-title>
    <cx-describe-text>至此，一个基于 Vue 和 cx-easy-form 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</cx-describe-text>
  </div>
</template>
<script>

  import {code, optionsConf} from './content-config'

  export default {
    name: 'icon-view',
    components: {},
    data() {
      return {
        code: code,
        optionsConf: optionsConf,
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
