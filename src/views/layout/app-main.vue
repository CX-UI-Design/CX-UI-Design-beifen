<template>
  <section class="app-main">
    <!--changing-over  work bench module-->
    <transition-group leave-active-class="" enter-active-class="animated zoomInLeft">
      <router-view :key="key"></router-view>
      <cx-footer-nav key="sadsadsada"></cx-footer-nav>
      <!--<div key="sadsadsada" style="width: 100%;height: 500px;background: skyblue"></div>-->
    </transition-group>
  </section>
</template>

<script>
  export default {
    name: 'app-main',
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>
