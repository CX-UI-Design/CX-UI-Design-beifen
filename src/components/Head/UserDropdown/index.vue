<!--顶部栏目 右侧 头像操作模块-->
<template>
  <el-dropdown class="avatar-container fr" id="avatar-container" :trigger="handleStyle">
    <div class="avatar-wrapper">
      <img class="user-avatar" :src="avator">
      <p class="hello fr">Hello<span>{{username}}</span></p>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
      <el-dropdown-item>
        <a to="/user/usere">消息</a>
      </el-dropdown-item>
      <el-dropdown-item divided>
        <span @click="logout">退出登录</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default {
    name: 'user-dropdown',
    props: {
      username: {
        type: String,
        default: '用户'
      },
      avator: {
        type: String,
        default: '\'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\''
      },
      handleStyle: String
    },
    data() {
      return {};
    },
    methods: {
      logout() {
        //login out,empty store and localStorage by dispatch function of 'LogOut'
        this.$store.dispatch('LogOut');
        this.$router.push({path: '/front/login'});
      },
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-dropdown-menu {
    margin: 0 !important;
  }

  @media screen and (min-width: 980px) {
    #layout .header .headNav p.hello {
      display: inline-block;
    }
  }

  @media screen and (max-width: 979px) {
    #layout .header .headNav p.hello {
      display: none;
    }
  }
</style>
