<!--card-over-->
<template>
  <div class="card-over">
    <div :class="['card' , {'active': index === activeIndex-1 }]" v-for="(item,index) in loopList" :key="index" :index="index"
         :style="cardStyle(cardNum, index, activeIndex-1)" @click="clickCard(index)"
    >
      <div class="card-content">
        <div :class="['card-mask', {'isShow':showMask}]"></div>
        <slot :name="'card-'+(index+1)"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card-over',
    props: {
      cardNum: {type: Number},//card total number
      activeIndex: {type: Number, default: 1},//active index
      cardHeight: {type: Number, default: 300},//card base height
      pdGap: {type: Number, default: 10},//card padding
      activeGap: {type: Number, default: 20},//active card gap
      showMask: {type: Boolean, default: true},//是否显示card 遮罩层（切换缩略图不能选中里面内容）
    },
    data() {
      return {
        loopList: [],
        cardDomList: [], //dom - class is 'card' lsit
        activeTranY: '',
      }
    },
    computed: {},
    created() {
      for (let i = 1; i <= this.cardNum; i++) {
        this.loopList.push(i);
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.cardDomList = document.querySelectorAll('.card-over .card')
        let len = this.cardDomList.length;
        for (let i = 0; i < len; i++) {
          this.cardDomList[i].order = i;
        }
      },


      /**
       * translate style
       * @param total
       * @param index
       * @param active
       * @returns {*}
       */
      tranStyle(total, index, active) {
        let styleCont;
        let tranY = (100 / (total - 1)).toFixed(1);
        const showTotal = total - 1;
        const eachPer = 100 / showTotal;

        /**
         * get translate x number
         * @param index
         * @returns {number}
         */
        let getTranX = (index) => {
          const x = (eachPer * (index + 1 / 2) - 50).toFixed(1);//索引 translate x值
          return x;
        }
        if (index === 0) {
          this.activeTranY = getTranX(0);//获取索引为0时 translate x值
        }
        if (index === active) {
          styleCont = 'translate(0%,' + tranY + '%) scale(1)';
        }
        else {
          //当前索引值大于 active 时，后续索引自动往前顶格
          if (index > active) {
            index = index - 1;
          }
          let tranX = getTranX(index);//索引 translate x值
          const tranSC = (eachPer / 100).toFixed(3);
          styleCont = 'translate(' + tranX + '%' + ',' + this.activeTranY + '%) scale(' + tranSC + ')'
        }
        return styleCont
      },

      cardStyle(total, index, active) {
        return {
          transform: this.tranStyle(total, index, active),
          'margin-top': index === active ? this.activeGap + 'px' : null,
          padding: this.pdGap + 'px',
          height: this.cardHeight + 'px'
        }
      },

      /**
       * click card
       * @param clickIndex
       */
      clickCard(clickIndex) {
        let activeItem = document.querySelector('.card-over .active');
        let activeIndex = activeItem.order;
        let clickItem = this.cardDomList[clickIndex];
        if (activeIndex === clickIndex) {
          return
        }
        activeItem.classList.remove('active')
        clickItem.classList.add('active');
        activeItem.style.marginTop = null;
        clickItem.style.marginTop = this.activeGap + 'px';


        this._setStyle(clickItem, activeItem)
      },
      /**
       * _set card style
       * @param el1
       * @param el2
       * @private
       */
      _setStyle(el1, el2) {
        let transform1 = el1.style.transform
        let transform2 = el2.style.transform
        el1.style.transform = transform2
        el2.style.transform = transform1
      }
    },
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .card-over {
    position: relative;
    width: 100%;
    height: 600px;
    .card {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      transition: all 0.8s;
      cursor: pointer;
      .card-content {
        position: relative;
        height: 100%;
        overflow: hidden;
        background: rgba(150, 150, 150, 0.3);
        .card-mask {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: transparent;
          z-index: 999;
        }
      }
      &.active {
        height: 600px !important;
        .card-content {
          overflow-y: auto;
        }
        .card-mask {
          display: none;
        }
        /*margin-top: 20px;*/
        /*line-height: 300px;*/
      }

    }
  }
</style>

