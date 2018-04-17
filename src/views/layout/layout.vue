<template>
  <div id="layout" :class="['app-wrapper clr',{hideSidebar:!sidebar.opened}]">
    <!--nav left-->
    <sidebar></sidebar>
    <!--header-->
    <div class="main-container">
      <navbar></navbar>
      <!-- content -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import Sidebar from '../../components/Sidebar/index.vue';
  import Navbar from '../../components/Head/Navbar/index.vue';
  import AppMain from './app-main.vue';

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    computed: {
      sidebar() {
        return this.$store.state.sideBar.sidebar;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/css/mixin/mixin.scss";
  @import "../../assets/css/modules/cont";
  #layout.app-wrapper {
    @include clearfix;
    &.hideSidebar {
      .main-container {

      }
    }
  }
</style>

