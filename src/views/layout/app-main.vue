<template>
  <section class="app-main">
    <!--changing-over  work bench module-->
    <transition-group leave-active-class="" enter-active-class="animated zoomInLeft">
      <router-view :key="contentkey"></router-view>
      <cx-footer-nav :key="navKey"></cx-footer-nav>
    </transition-group>
  </section>
</template>

<script>
  export default {
    name: 'app-main',
    computed: {
      contentkey() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
      },
      navKey() {
        return 'cx-footer-nav' + +new Date();
      }
    }
  }
</script>
