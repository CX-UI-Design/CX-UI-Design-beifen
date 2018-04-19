<template>
  <div id="layout" :class="['app-wrapper clr',{hideSidebar:!sidebar.opened}]">
    <div class="header">
      <navbar></navbar>
    </div>
    <!--header-->
    <div class="main">
      <div class="main-container">
        <!--nav left-->
        <sidebar isAllOpened default-active="/autoForm/index"></sidebar>
        <!-- content -->
        <app-main></app-main>
      </div>
    </div>
    <!--go top-->
    <cx-back-to-top tooltip-tit="回到顶部" action-node="main" transitionName="fade" :visibilityHeight="600" :backPosition="0"></cx-back-to-top>
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

