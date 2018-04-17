<template>
  <el-breadcrumb class="levelbar" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="index">
      <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  export default {
    name: 'levelbar',
    data() {
      return {
        levelList: null
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{name: '首页', path: '/home'}].concat(matched)
        }
        this.levelList = matched;
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    }
  }
</script>
<style scoped>
  .levelbar.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
  }

  .levelbar .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>
