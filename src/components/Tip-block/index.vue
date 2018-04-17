<template>
  <div class="cx-tip__block" :style="{'border-left-color': skin,'background-color':back}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'cx-tip-block',
    props: {
      skin: {type: String, default: '#50bfff'},
      back: {type: String, default: '#ecf8ff'},
    },
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-tip__block {
    padding: 8px 16px;
    border-radius: 4px;
    margin: 20px 0;
    border-left-width: 5px;
    border-left-style: solid;
  }
</style>
