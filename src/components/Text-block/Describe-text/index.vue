<template>
  <p class="cx-describe__text">
    <slot></slot>
  </p>
</template>
<script>
  export default {
    name: 'cx-describe-text',
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .win p.cx-describe__text {
    display: block;
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
</style>
