<template>
  <el-table :data="tableData" class="cx-attributes-table">
    <el-table-column v-for="(item,index) in tableHead" :key="index" :index="index" :label="item.label" :min-width="item.width">
      <template slot-scope="scope">
        <span v-html="scope.row[item.key]"></span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    name: 'cx-attributes-table',
    props: {
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
  .cx-attributes-table.el-table {
    color: #333;
    thead {
      color: #666;
      .cell {
        text-align: left;
        white-space: nowrap;
        font-weight: 400;
      }
    }
  }
</style>
