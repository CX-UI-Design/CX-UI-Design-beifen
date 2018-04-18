<!--back-to-top-->
<template>
  <transition :name="transitionName">
    <el-tooltip :placement="placement" :content="tooltipTit" :effect="tooltipTheme" :disabled="tooltipTit?false:true">
      <div class="cx-back-to-top" @click="backToTop" v-show="visible" :style="customStyle">
        <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="cx-backToTop-svg Icon--backToTopArrow" aria-hidden="true"
             style="height: 16px; width: 16px;">
          <title>回到顶部</title>
          <g>
            <path
              d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"
              fill-rule="evenodd"></path>
          </g>
        </svg>
      </div>
    </el-tooltip>
  </transition>
</template>

<script>
  export default {
    name: 'cx-back-to-top',
    props: {
      actionNode: {type: String, default: 'window'},
      visibilityHeight: {type: Number, default: 600},
      backPosition: {type: Number, default: 0},
      transitionName: {type: String, default: 'fade'},
      tooltipTit: {type: String},
      tooltipTheme: {type: String, default: 'light'},
      placement: {type: String, default: 'top'},
      customStyle: {
        type: Object, default: function () {
          return {
            right: '20px',
            bottom: '50px',
            width: '40px',
            height: '40px',
            'border-radius': '4px',
            'line-height': '45px',
            background: '#e7eaf1'
          }
        }
      },
    },
    data() {
      return {
        node: null,//active node
        visible: false,
        interval: null
      }
    },
    mounted() {
      this.node = this.getNode('main');//get node
      this.node.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      this.node.removeEventListener('scroll', this.handleScroll);
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    methods: {
      /**
       * get node
       * @param node
       * @returns {*}
       */
      getNode(node) {
        if (typeof node !== 'string' || !node) return window;
        if (node === 'body') {
          return document.body;
        }
        else if (node === 'window') {
          return window;
        }
        else {
          const nid = document.getElementById(node);//node by ID
          const nclass = document.getElementsByClassName(node)[0];//node by className
          return nid ? nid : nclass ? nclass : window;
        }
      },
      handleScroll() {
        this.visible = this.node.scrollTop > this.visibilityHeight;
      },
      backToTop() {
        const start = this.node.scrollTop;
        let i = 0;
        this.interval = setInterval(() => {
          const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 300));
          if (next <= this.backPosition) {
            this.node.scrollTo(0, this.backPosition);
            clearInterval(this.interval)
          } else {
            this.node.scrollTo(0, next);
          }
          i++;
        }, 16.7)
      },
      easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-back-to-top {
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #d5dbe7;
    }
    .cx-backToTop-svg {
      fill: #9aaabf;
      background: none;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
