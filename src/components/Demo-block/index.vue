<template>
  <div class="cx-demo__block" :style="{'margin':gap}">
    <div class="cx-demo__source">
      <slot name="source"></slot>
    </div>
    <div class="cx-demo__meta" style="max-height: 0px">
      <div class="cx-demo__description">
        <slot name="description"></slot>
      </div>
      <cx-code :codeCont="codeCont" skin="github-gist"></cx-code>
    </div>
    <div class="cx-demo__control" @click="controlClick(metaDom)">
      <i :class="control.icon"></i>
      <span>{{control.text}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cx-demo-block',
    props: {
      codeCont: {type: String},
      skin: {type: String},
      gap: {type: String},
    },
    data() {
      return {
        metaDom: null,
        control: {
          text: "显示代码",
          icon: 'el-icon-caret-bottom'
        }
      }
    },
    watch: {},
    created() {

    },
    mounted() {
      this.judgeBlockShow(['cx-demo__source', 'cx-demo__description']);
      this.metaDom = document.getElementsByClassName('cx-demo__meta');
    },
    methods: {
      /**
       * judge each block in Demo is Show or not
       * @param classList
       */
      judgeBlockShow(classList) {
        classList.forEach(item => {
          let sdom = document.getElementsByClassName(item);
          let status = 'none';
          if (sdom.length > 0) {
            status = sdom[0].childNodes.length > 0 ? 'block' : 'none';
            sdom[0].style.display = status;
          }
        })
      },

      /**
       * control click handle
       * @param dom
       */
      controlClick(dom) {
        const h = dom[0].style.maxHeight;
        dom[0].style.maxHeight = h === '0px' ? '5000px' : '0px';
        this.control = h === '0px' ? {
          text: "隐藏代码",
          icon: 'el-icon-caret-top'
        } : {
          text: "显示代码",
          icon: 'el-icon-caret-bottom'
        };
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-demo__block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    overflow: hidden;
    height: auto;
    box-sizing: border-box;
    .cx-demo__source {
      padding: 0;
      display: -ms-flexbox;
      display: flex;
      margin: 0 auto;
      padding: 24px;
    }
    .cx-demo__meta {
      height: auto;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      overflow: hidden;
      transition: max-height 800ms;
      .cx-demo__description {
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #eaeefb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-all;
        margin: 10px;
        background-color: #fff;
        code {
          color: #5e6d82;
          background-color: #e6effb;
          margin: 0 4px;
          display: inline-block;
          padding: 1px 5px;
          font-size: 12px;
          border-radius: 3px;
          height: 18px;
          line-height: 18px;
        }
      }
      code.hljs {
        border-left: none;
        border-right: none;
      }
    }
    .cx-demo__control {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      i {
        display: inline-block;
        font-size: 16px;
        line-height: 44px;
        transition: 200ms;
      }
      span {
        display: none;
        -ms-transform: translateX(-30px);
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: 800ms;
      }
    }
    &:hover {
      .cx-demo__control {
        color: #409EFF;
        background-color: #f9fafc;
        span {
          display: inline-block;
        }
        i {
          -ms-transform: translateX(-30px);
          transform: translateX(-30px);
        }
      }
    }
  }
</style>
