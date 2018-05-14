<template>
  <div class="win demo">
    <cx-main-title>成果示例</cx-main-title>
    <cx-describe-text>根据基础、业务、总览来大致预览自动表单的生成的效果</cx-describe-text>
    <div class="flex-container column">
      <div class="flex-tit">
        <h3>基础</h3>
        <h3>业务</h3>
        <h3>总览</h3>
      </div>
      <card-over :cardNum="4" :activeNum="1" :perHigh="0.333333">
        <div :slot="'card-'+(index+1)" v-for="(item,index) in createList" :key="index" :index="index">
          <cx-auto-form :autoFormID="item"
                        request-url="/mock/autoForm/dynamic"
                        :query="{id: item}"
                        cue-type="only-error"
          ></cx-auto-form>
        </div>
      </card-over>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'demo',
    data() {
      return {
        items: [],
        createList: ['baseFromDemo', 'dynamicFormTemplate', 'dynamicFormTemplate', 'dynamicFormTemplate']

      }
    },
    created() {
      this.createFrom(this.createList);
    },
    mounted() {

    },
    methods: {
      createFrom(createList) {
        createList.forEach(item => {
          this.$CX.autoForm.formController.set(this, item, {show: true,});
        })
      }
    },
    components: {}
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .win.demo {
    width: 100%;
    .flex-container.column {
      /*height: 90%;*/
      margin: 0 auto 100px auto;
      box-sizing: content-box;
      .flex-tit {
        width: 100%;
        margin: 30px 0 15px;
        overflow: hidden;
        h3 {
          display: inline-block;
          float: left;
          width: 33.33333%;
          margin: 0;
          text-align: center;
        }
      }
    }
  }


</style>
