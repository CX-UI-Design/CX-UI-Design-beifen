<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="(item,index) in tableHead" :key="index" :index="index" :label="item.label" :min-width="item.width">
      <template slot-scope="scope">
        <span>{{scope.row[item.key]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableHead: [
          {label: '日期', key: 'date', width: '180px'},
          {label: '姓名', key: 'name', width: '280px'},
          {label: '地址', key: 'address', width: '280px'}
        ]
      }
    }
  }
</script>
