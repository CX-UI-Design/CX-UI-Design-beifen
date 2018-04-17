<template>
  <div class="win" id="dashboard">
    <div class="dashboard-container wm">
      <!--<div class="large-tit">Elemment-UI封装示例展示</div>-->
      <!--<Cube :cubeStyle="cubeStyle1"></Cube>-->
      <!--<Cube :cubeStyle="cubeStyle2"></Cube>-->
      <!--<Cube :cubeStyle="cubeStyle3"></Cube>-->
      <!--<Cube :cubeStyle="cubeStyle4"></Cube>-->
    </div>
  </div>
</template>
<script>
  import cube from '../../components/Cube/index.vue'
  export default {
    name: 'dashboard',
    components: {
      cube,
    },
    data() {
      return {
        companyId: 1,
        cubeStyle1: {
          marginLeft: '50px',
          marginTop: '10px',
          width: '120px',
          height: '120px',
        },
        cubeStyle2: {
          marginLeft: '120px',
          marginTop: '30px',
          width: '80px',
          height: '80px',
        },
        cubeStyle3: {
          marginLeft: '240px',
          marginTop: '60px',
          width: '200px',
          height: '200px',
        },
        cubeStyle4: {
          marginLeft: '600px',
          marginTop: '-360px',
          width: '400px',
          height: '400px',
        }
      }
    },
    computed: {},
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #dashboard {
    overflow: hidden;
    /*background: rgb(225, 225, 225);*/
    .large-tit {
      color: rgba(32, 160, 255, .98);
    }
  }

</style>
