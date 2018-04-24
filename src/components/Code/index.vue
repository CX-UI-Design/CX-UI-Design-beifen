<template>
  <div class="cx-code__block" v-highlight>
     <pre><code :class="['hljs language-html',{'transparent':transparent}]" v-text="codeCont">
     </code></pre>
  </div>
</template>
<script>
  export default {
    name: 'cx-code',
    props: {
      codeCont: {type: String},
      skin: {type: String},
      transparent: {type: Boolean, default: false},
    },
    data() {
      return {}
    },
    created() {
      this.loadingSkin(this.skin);
    },
    methods: {
      /**
       * loading skin
       * @param skin ( github, github-gist, googlecode ,xcode, vs, atelier-dune-dark, default, docco, atom-one-dark )
       */
      loadingSkin(skin) {
        require('highlight.js/styles/' + skin + '.css');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-code__block {
    overflow: hidden;
    height: auto;
    pre {
      code.hljs {
        line-height: 1.8;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        font-size: 12px;
        padding: 18px 24px;
        background-color: #fafafa;
        border: 1px solid #eaeefb;
        border-radius: 4px;
        &.transparent {
          background-color: transparent;
          border: none;
        }
      }
    }
  }
</style>
