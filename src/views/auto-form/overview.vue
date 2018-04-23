<template>
  <div>
    <cx-input v-model="inputModel1" placeholder="请输入内容" :width="200" customIcon="fangchan"></cx-input>
    <cx-input v-model="inputModel2" placeholder="请输入内容" :width="200" customIcon="baobiao" @iconClick="iconClick(inputModel2)"></cx-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputModel1: '',
        inputModel2: '点击图标事件'
      }
    },
    methods: {
      iconClick(value) {
        alert('this is input icon click, value is :' + value)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
