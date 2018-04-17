<template>
  <!--header-->
  <div class="header fr">
    <!--top nav-->
    <el-menu class="headNav" mode="horizontal">
      <hamburger class="fl" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
      <levelbar></levelbar>
      <tabs-view></tabs-view>
      <screenfull class='screenfull fr'></screenfull>
      <user-dropdown :avator="avatar" :username="username" handleStyle="click"></user-dropdown>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {Hamburger, Levelbar, TabsView, Screenfull, UserDropdown} from './index';

  export default {
    name: 'navbar',
    components: {
      Hamburger,
      Levelbar,
      TabsView,
      Screenfull,
      UserDropdown
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'username',
        'avatar'
      ]),
    },
    data() {
      return {};
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .header {
    .headNav.el-menu--horizontal {
      border-bottom: none;
    }
  }

</style>



