<template>
  <!--:background-color="sideStyle.back"  main-container -->
  <!--:text-color="sideStyle.text"-->
  <!--:active-text-color="sideStyle.active"-->
  <!--nav left-->
  <div class="cx-sidebar fl">
    <div class="logo">

    </div>
    <el-menu
      class="cx-sidebar__container"
      @open="handleOpen" @close="handleClose"
      :default-active="defaultActive"
      :unique-opened="true"
      :router="true"
      :collapse="!sidebar.opened"
    >
      <el-submenu :index="firstlist.firstIndex" v-for="(firstlist,index) in navList" :key="firstlist.firstIndex">
        <template slot="title">
          <cx-icon-svg :icon-class="firstlist.icon"></cx-icon-svg>
          <span slot="title">&nbsp;{{firstlist.groupName }}</span>
        </template>
        <el-menu-item-group v-if="firstlist.children.length>0" title="分组一" style="overflow-x: hidden">
          <el-menu-item v-for="(secondlist,index) in firstlist.children"
                        :index="secondlist.path"
                        :key="firstlist.firstIndex+'-'+secondlist.secondIndex">
            {{secondlist.groupName }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>

</template>
<script>
  import {sideBar} from '../../api/role/role-side-bar'
  import {mapGetters} from 'vuex';

  export default {
    name: 'cx-sidebar',
    data() {
      return {
        isCollapse: false,
        navselected: "1",
        navList: "",
        defaultActive: '1-1',
        sideStyle: {
          back: '#324157',
          text: '#fff',
          active: '#ccc'
        }
      };
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ]),
    },
    created() {
      sideBar({})
        .then(response => {
          this.navList = response.resultData;
          this.$store.dispatch('LoadStatus');
        })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-sidebar {
    .logo {
      width: 100%;
      height: 100px;;
    }
    .el-menu {
      border-right: none;

    }
  }


</style>
