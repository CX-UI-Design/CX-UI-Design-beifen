<template>
  <h4 class="cx-mini__title">
    <slot></slot>
  </h4>
</template>
<script>
  export default {
    name: 'cx-mini-title',
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .win h4.cx-mini__title {
    display: block;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 400;
    color: #1f2f3d;
  }
</style>
