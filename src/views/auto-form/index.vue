<template>
  <div class="win autoForm-index">
    <cx-main-title>自动表单</cx-main-title>
    <cx-sub-title>示例用法</cx-sub-title>
    <cx-describe-text>这是自动表单的示例用法，你可以将此作为参考进行自我配置</cx-describe-text>
    <cx-mini-title>小标题</cx-mini-title>
    <cx-tip-block>
      <p>12738127371982731729793</p>
    </cx-tip-block>
    <cx-demo-block :codeCont="codeTest" skin="github-gist">
      <div slot="source">
        <gcx-auto-form autoFormID="template-auto-form"
                       request-url="/mock/autoForm/template"
                       :query="{}"
                       :cover-data="coverData"
                       cue-type="only-error"
                       :isCheck="false"
                       @afterRequest="afterRequest"
        ></gcx-auto-form>
      </div>
      <div slot="description">
        这是自动表单的案例
      </div>
    </cx-demo-block>

    <attributes-table></attributes-table>

  </div>
</template>
<script>
  import {code} from './test'
  import pickerOptionsMap from '../../static-data/form/picker-options'
  import attributesTable from '../../components/Attributes-table/index.vue'

  export default {
    name: 'autoForm-index',
    components: {
      attributesTable
    },
    data() {
      return {
        codeTest: code.test.html,

        /* ===================== 覆盖/补充自动表单数据：=====================
       书写格式：{
             xxx（属性名称）：{
                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）
             }
       }
       * =================================================================
       */
        coverData: {
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,
          },
          resourcefieldColspan: {
            searchInfo: 2   //覆盖改变 - 搜索信息字段的组件 所占列数为2
          },
          fieldWidth: {
            searchInfo: 700 //覆盖改变 - 搜索信息字段的组件 宽度为700
          },
          tableHead: {mainHouseList: 'autoFormTest'},
        },
      }
    },
    created() {
      this.$CX.formController.set(this, 'template-auto-form', {
        show: true,
        headers: {
          funcId: 'funcId', //funcId
          interpreter: 'interpreter',//interpreter
          formOperateType: 'formOperateType',//formOperateType
        }
      });

    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写
//        console.log('afterRequest');
//        console.log(data);
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
