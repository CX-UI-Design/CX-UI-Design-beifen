<!-- front component -->
<template>
  <div class="front" id="front">
    <!--spot-wave / glittering-stars-->
    <canvas-back type="raindrop" :width="innerWidth" :height="innerHeight">
      <!--changing-over  reg/reg/forget module-->
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </canvas-back>
  </div>
</template>
<script>
  import SpotWave from "../../components/canvas-back/spot-wave/spot-wave.vue";
  import CanvasBack from "../../components/canvas-back/index.vue";

  export default {
    components: {
      CanvasBack,
      SpotWave
    },
    name: 'front',
    data() {
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/css/modules/front/front.scss';
</style>
