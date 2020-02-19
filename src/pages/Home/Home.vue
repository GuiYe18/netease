<template>
  <div id="homeContainer">
    <!-- 置顶内容 -->
    <div class="Sticky">
        <!-- 置顶上部分 -->
        <div class="StickyTop">
          <img src="./login.webp" />
          <i class="iconfont icon-soushuo"></i>
          <input type="text" placeholder="搜索商品共20413款" class="search_input">
          <button>登录</button>
        </div>
        <!-- 置顶下部分 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">slider1</div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
          </div>
        <!-- </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
          </div> -->
          <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
        
    </div>
    <!-- 滚动轮播图 -->

    <!-- 测试顶置 -->
    <div class="div"></div>
    <div class="div1"></div>

  </div>

</template>
<script type="text/ecmascript-6">
// 引入轮播图
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import{getHomeDatas} from '../../api'



export default {
      data() {
        return {

        }
      },
      async mounted(){
        let result = await getHomeDatas()
        console.log(result)

        var mySwiper = new Swiper('.swiper-container',{
          pagination: {
            el: '.swiper-pagination',
          },
        })
        

      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope="this api replaced by slot-scope in 2.5.0+">
@import "../../common/stylus/mixins.styl"

#homeContainer
  .div
    width 100%
    height 800px
    background-color pink
  .div1
    width 100%
    height 800px
    background-color blue
  .Sticky
    position:fixed;
    top:0;
    box-sizing:border-box
    // overflow hidden
    background-color #fff
    width 100%
    height 88px
    display: flex;
    align-items center
    display:inline
    .StickyTop 
      display flex
      padding 16px 30px
      width 100%
      align-items: center//flex基线对齐
      img
        width 138px
        height 40px
      input
        width 58%
        background  #f2f2f2
        line-height 56px
        border-radius 10px
        margin-right 20 px
        padding-left 80px
        box-sizing:border-box
        outline: medium
      i
        position:relative
        left:66px
      button
        background #fff
        border 2px solid red
        border-radius 6px
        color red
        outline: medium
    .swiper-container
      --swiper-theme-color: #fff;
      .swiper-slide
        width 100%
        height 370px
      .swiper-pagination
        span 
          width 40px
          height 6px
          border-radius: 20%


 






</style>
