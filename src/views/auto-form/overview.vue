<template>

  <cx-checkbox v-model="checkboxModel" :items="checkboxItem"  type="button"></cx-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        checkboxModel: ['item1'],
        checkboxItem: [
          {label: '选项一', value: 'item1', disabled: false},
          {label: '选项二', value: 'item2', disabled: false},
          {label: '选项三', value: 'item3', disabled: false}
        ],
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
