<template>
  <h2 class="cx-main__title">
    <slot></slot>
  </h2>
</template>
<script>
  export default {
    name: 'cx-main-title',
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .win h2.cx-main__title {
    display: block;
    margin: 0;
    font-size: 28px;
    font-weight: 400;
    color: #1f2f3d;
  }
</style>
