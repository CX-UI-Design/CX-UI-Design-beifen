<template>
  <cx-auto-form autoFormID="formEventTemp"
                request-url="/mock/autoForm/event"
                :query="{}"
                :cover-data="coverData"
                cue-type="only-error"
  >
  </cx-auto-form>
</template>

<script>
  export default {
    name: 'overview-view',
    data() {
      return {
        /* ===================== 覆盖/补充自动表单数据：=====================
          书写格式：{
             xxx（属性名称）：{
                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）
             }
          }
          只要这个属性名是可配置的，都可以修改，具体实现规则详见源码
       * =================================================================
       */
        coverData: {
          //覆盖属性-绑定事件
          resourcefieldBindingfnList: {
            //这里不用es6 箭头函数做示例，稍微复杂一点
            cardType: function (params) {
              //当事件为 'change' ，且不为 'visibleChange' 时
              if (params.type === 'change' && params.type !== 'visibleChange') {
                //获取this指向
                const _this = params.vm
                //获取我们在 created 钩子函数中存储的当前页面的实例对象
                const formVm = _this.$CX.autoForm.formerVm.get(_this, 'interacting-view');
                //弹出提示
                formVm.formNotify(formVm, '证件类型改变了，你也可以自行在其中加入表单交互的相关逻辑')
              }
            }
          },
        },
      }
    },
    created() {
      //存储当前页面的实例对象
      this.$CX.autoForm.formerVm.set(this, 'interacting-view', this);
      //注册表单 'formEventTemp'
      this.$CX.autoForm.formController.set(this, 'formEventTemp', {
        show: true,
      })
    },
    methods: {
      /**
       * form notify
       * @param vm
       * @param msg
       */
      formNotify(vm, msg) {
        const h = vm.$createElement;
        vm.$notify({
          title: '注入交互行为',
          message: h('i', {style: 'color: teal'}, msg)
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
