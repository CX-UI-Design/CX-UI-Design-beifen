<template>
  <el-table :data="tableData" class="cx-attributes-table">
    <el-table-column v-for="(item,index) in tbhead" :key="index" :index="index" :label="item.label" :min-width="item.width">
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
      type: {type: String, default: 'attributes'},
      tableHead: {type: Array},
      tableData: {type: Array},
    },
    computed: {
      tbhead() {
        if (this.type === 'attributes') {
          return this.attributesHead;
        }
        else if (this.type === 'events') {
          return this.eventsHead;
        }
        else {
          return this.tableHead;
        }
      },
    },
    data() {
      return {
        attributesHead: [
          {label: '参数', key: 'attr', width: '120px'},
          {label: '说明', key: 'explain', width: '280px'},
          {label: '类型', key: 'type', width: '200px'},
          {label: '可选值', key: 'value', width: '180px'},
          {label: '默认值', key: 'default', width: '80px'},
        ],
        eventsHead: [
          {label: '事件名称', key: 'event', width: '160px'},
          {label: '说明', key: 'explain', width: '380px'},
          {label: '回调参数', key: 'callback', width: '320px'},
        ],
      }
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
