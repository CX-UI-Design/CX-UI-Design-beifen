<template>
  <div class="cube" v-bind:style="cubeStyle">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="front"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>
<script>
  export default {
    name: 'BackToTop',
    props: {
      cubeStyle: {
        type: Object,
        default: {
          marginight: '0px',
          marginTop: '0px',
          width: '200px',
          height: '200px',
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      handleScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight;
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $speed: 5s;
  $borderSeize: 5px;
  @keyframes rt {
    to {
      transform: rotateY(360deg) rotateX(360deg)
    }
  }

  .cube {
    position: relative;
    transform-style: preserve-3d;
    animation: rt $speed infinite linear;
    z-index: 0;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      border: $borderSeize solid #1a2431;
      filter: alpha(opacity=50);
      -moz-opacity: 0.2;
      opacity: 0.2;
      &.top {
        transform-origin: 50% 0;
        transform: translateZ(100px) rotateX(-90deg);
        background-color: rgba(0,0,0,.2);
      }
      &.bottom {
        transform-origin: 50% 100%;
        transform: translateZ(100px) rotateX(90deg);
        background-color: rgba(0,0,0,.2);
      }
      &.front {
        transform: translateZ(100px);
        background-color: rgba(0,0,0,.1);
      }
      &.back {
        transform: translateZ(100px);
        background-color: rgba(0,0,0,.2);
      }
      &.left {
        transform-origin: 0 50%;
        transform: translateZ(100px) rotateY(90deg);
        background-color: rgba(0,0,0,.1);
      }
      &.right {
        transform-origin: 100% 50%;
        transform: translateZ(100px) rotateY(-90deg);
        background-color: rgba(0,0,0,.2);
      }
    }
  }
</style>
