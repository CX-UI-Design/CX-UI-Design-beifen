<template>
  <div class="cx-attributes-block">
    <cx-sub-title v-if="title">{{title}}</cx-sub-title>
    <cx-attributes-table :type="type" :tableData="tableData" :tableHead="tableHead"></cx-attributes-table>
  </div>
</template>
<script>
  export default {
    name: 'cx-attributes-block',
    props: {
      title: {type: String, default: null},
      type: {type: String},
      tableHead: {type: Array},
      tableData: {type: Array},
    },
    data() {
      return {}
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-attributes-block {

  }

</style>
