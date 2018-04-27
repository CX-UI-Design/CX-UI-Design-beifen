<!-- canvas background component -->
<template>
  <div class="canvas-back">
    <glittering-stars :width="width" :height="height" v-if="type === 'stars'"></glittering-stars>
    <spot-wave :width="width" :height="height" :particleCount="particleCount" :background="background"
               :particle="particle" v-if="type === 'wave'"></spot-wave>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'canvas-back',
    props: {
      type: {type: String, default: 'wave'},
      width: {type: Number, default: 300},
      height: {type: Number, default: 300},
      particleCount: {type: Number, default: 30000},
      background: {type: Number, default: 0x000000},
      particle: {type: Number, default: 0x477cc2},
    },
    data() {
      return {}
    },

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
