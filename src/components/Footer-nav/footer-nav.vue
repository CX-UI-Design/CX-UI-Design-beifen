<!--footer-nav-->
<template>
  <div class="cx-footer-nav">
   <span class="footer-nav-link footer-nav-left" @click="routerJump('last')" v-show="lastRouter">
     <i class="el-icon-arrow-left"></i>
     {{lastRouterName}}
   </span>
    <span class="footer-nav-link footer-nav-right" @click="routerJump('next')" v-show="nextRouter">
     {{nextRouterName}}
     <i class="el-icon-arrow-right"></i>
   </span>
  </div>
</template>
<script>
  import {sideBarData} from '../../mock/role/role-side-bar/index'

  export default {
    name: 'cx-footer-nav',
    props: {},
    data() {
      return {
        lastRouter: {},
        nextRouter: {},
      }
    },
    computed: {
      lastRouterName() {
        return this.lastRouter ? this.lastRouter.groupName : '';
      },
      nextRouterName() {
        return this.nextRouter ? this.nextRouter.groupName : '';
      }
    },
    created() {
      this.getJumpInfo();
    },
    watch: {
      $route() {
        this.getJumpInfo();
      }
    },
    methods: {
      getJumpInfo() {
        const fullPath = this.$route.fullPath;
        const RPList = this.$store.state.SideBar.sidebar.routersParallelList;
        const len = RPList.length;
        const currIndex = (function () {
          for (let i = 0; i < len; i++) {
            if (RPList[i].path === fullPath) {
              return i;
              break;
            }
            ;
            continue;
          }
        })();
        let JumpInfo = {};
        if (currIndex - 1 >= 0) {
          JumpInfo.last = RPList[currIndex - 1]
        }
        if (currIndex < len - 1) {
          JumpInfo.next = RPList[currIndex + 1]
        }
        this.lastRouter = JumpInfo.last;
        this.nextRouter = JumpInfo.next;
      },
      /**
       * router jump
       * @param type (lase / next)
       */
      routerJump(type) {
        this.$router.push({path: type === 'last' ? this.lastRouter.path : this.nextRouter.path});
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-footer-nav {
    position: absolute;
    overflow: hidden;
    color: #333;
    font-size: 14px;
    .footer-nav-left {
      float: left;
      margin-left: -4px;
    }
    .footer-nav-right {
      float: right;
      margin-right: -4px;
    }
    .footer-nav-link {
      cursor: pointer;
      transition: .3s;
      &:hover {
        color: #409eff;
        i {
          color: #409eff;
        }
      }
    }
  }
</style>
