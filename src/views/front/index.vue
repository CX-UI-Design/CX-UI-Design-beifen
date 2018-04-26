<!--进入入口界面（切换登录，注册，忘记密码），初始：登录-->
<template>
  <div class="front" id="front">
    <spot-wave-back :width="innerWidth" :height="innerHeight" :particleCount="10000">
      <!--changing-over  reg/reg/forget module-->
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </spot-wave-back>
  </div>
</template>
<script>
  export default {
    name: 'front',
    data() {
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      }
    }
  }
</script>

