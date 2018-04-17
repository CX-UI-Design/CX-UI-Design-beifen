<template>
  <h3 class="cx-sub__title">
    <slot></slot>
  </h3>
</template>
<script>
  export default {
    name: 'cx-sub-title',
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .win h3.cx-sub__title {
    display: block;
    margin: 55px 0 20px;
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
  }
</style>
