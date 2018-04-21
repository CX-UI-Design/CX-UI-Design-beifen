<template>
  <!--:background-color="sideStyle.back"  main-container -->
  <!--:text-color="sideStyle.text"-->
  <!--:active-text-color="sideStyle.active"-->
  <!--nav left-->
  <div class="cx-sidebar">
    <div class="logo">

    </div>
    <el-menu
      class="cx-sidebar__container"
      @open="handleOpen" @close="handleClose"
      :default-active="defaultActive"
      :unique-opened="uniqueOpened"
      :default-openeds="defaultOpeneds"
      :router="true"
      :collapse="!sidebar.opened"
    >

      <div v-for="(firstlist,index) in navList">
        <!--single menu-->
        <el-menu-item :index="firstlist.path" v-if="firstlist.level === 1">
          <cx-icon-svg :icon-class="firstlist.icon" v-if="firstlist.icon"></cx-icon-svg>
          <span slot="title">&nbsp;{{firstlist.groupName }}</span>
        </el-menu-item>
        <!--second menu-->
        <el-submenu :key="firstlist.firstIndex" :index="firstlist.firstIndex" v-if="firstlist.level !== 1">
          <template slot="title">
            <cx-icon-svg :icon-class="firstlist.icon" v-if="firstlist.icon"></cx-icon-svg>
            <span slot="title">&nbsp;{{firstlist.groupName }}</span>
          </template>
          <el-menu-item v-for="(secondlist,index) in firstlist.children" :index="secondlist.path"
                        :key="firstlist.firstIndex+'-'+secondlist.secondIndex" v-if="firstlist.level === 2">
            {{secondlist.groupName }}
          </el-menu-item>
          <!--third menu group -->
          <el-menu-item-group v-for="(secondlist,index) in firstlist.children"
                              :index="secondlist.path" :key="firstlist.firstIndex+'-'+secondlist.secondIndex"
                              :title=" secondlist.groupName" v-if="firstlist.level === 3">
            <el-menu-item v-for="(thirdlist,index) in secondlist.children"
                          :index="thirdlist.path" :key="firstlist.firstIndex+'-'+secondlist.secondIndex+'-'+thirdlist.thirdIndex">
              {{thirdlist.groupName }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </div>
    </el-menu>
  </div>

</template>
<script>
  import {sideBar} from '../../api/role/role-side-bar'
  import {mapGetters} from 'vuex';
  import {judgeType} from '../../utils/index';

  export default {
    name: 'cx-sidebar',
    props: {
      uniqueOpened: {type: Boolean, defalut: false},//是否单独打开一个
      isAllOpened: {type: Boolean, default: false},//是否全部开启
      defaultActive: {type: String},//默认选中
    },
    data() {
      return {
        isCollapse: false,
        navList: "",
        defaultOpeneds: [],
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
          this.getDefaultOpeneds(this.navList);//get default-openeds
          this.getRoutersParallelList(this.navList);//get routers parallel list
          this.$store.dispatch('LoadStatus');
        })
    },
    methods: {
      /**
       * get routers parallel list (路由平行排列信息队列)
       * @returns {Array}
       */
      getRoutersParallelList(list) {
        let pathList = [];
        list.forEach((item) => {
          (function loopSearch(item) {
            let status = true;
            let obj = item;
            while (status) {
              status = obj.hasOwnProperty('children');
              const isArray = judgeType(obj) === 'array';
              if (!status) {
                if (isArray) {
                  obj.forEach(j => {
                    loopSearch(j)
                  })
                }
                else {
                  pathList.push(obj);
                }
                status = false;
              }
              else {
                obj = obj.children
              }
            }
          })(item);
        });
        this.$store.dispatch('RoutersParallelList', pathList);
      },
      /**
       * get default-openeds
       * @param list
       */
      getDefaultOpeneds(list) {
        list.forEach((item) => {
          const i = item.level === 1 ? item.path : item.firstIndex;
          this.defaultOpeneds.push(i)
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push({path: '/home/dashboard'});
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../assets/css/public";

  @mixin main-tit {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: #333;
    text-align: left;
    transition: .15s ease-out;
  }

  @mixin magic-change {
    &.is-active, &:hover {
      color: $--color-primary;
      background-color: transparent;
    }
  }

  .cx-sidebar {
    .logo {
      width: 100%;
      height: 100px;
      background: skyblue;
    }
    .el-menu.cx-sidebar__container {
      border-right: none;
      li.el-menu-item {
        padding-left: 0 !important;
        span {
          @include main-tit;
        }
        @include magic-change;
      }
      li.el-submenu {
        .el-menu-item {
          font-size: 13px;
          color: #444;
          padding-left: 6px !important;
          @include magic-change;
        }
        .el-submenu__title {
          padding-left: 0 !important;
          span {
            @include main-tit;
          }
          i.el-submenu__icon-arrow {
            visibility: hidden;
          }
          &.is-active, &:hover {
            background-color: transparent;
          }
          &:hover {
            i.el-submenu__icon-arrow {
              visibility: visible;
            }
          }
        }
      }
      .el-menu-item-group__title {
        padding-left: 6px !important;
      }
    }
  }
</style>
