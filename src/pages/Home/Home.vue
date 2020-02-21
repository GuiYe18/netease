<template>

  <div id="homeContainer">
    <!-- 置顶内容 -->
    <div class="Sticky">
        <!-- 置顶上部分 -->
        <div class="StickyTop">
          <img src="./login.webp" />
          <i class="iconfont icon-soushuo"></i>
          <input type="text" placeholder="搜索商品,共20413款" class="search_input">
          <button>登录</button>
        </div>
        <!-- 置顶下部分 -->
        <div class="wrapper" ref="bscroll">
          <ul class="content">
            <li class="active">推荐</li>
            <li v-for="(item,index) in address" :key='index'>{{item.name}}</li>
          </ul>
          <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
    </div>
    <!-- 滚动轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in address" :key='index'>
          <img v-bind:src="item.imgUrl">
        </div>
      </div>
      <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
    <!-- 内容部分 -->
    <ul class="servicePolicy">
      <li>
        <i style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- 商品列表 -->
    <div class="kingKongModule">
      <!-- first -->
      <div class="icon">
        <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
        <span>新品首发</span>
      </div>
      <!-- center -->
      <div class="icon" v-for="(item,index) in address" :key='index'>
        <img v-bind:src="item.kingKongModuleUrl">
        <span>{{item.name}}</span>
      </div>
      <!-- last -->
      <div class="icon">
        <img src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt="">
        <span>好货抄底</span>
      </div>
    </div>
    <!-- 广告 -->
    <div class="BigPromotionModule">
      <div class="floorTop">
        <div class="floorGood">
          <img src="https://yanxuan-item.nosdn.127.net/3b8108472955b93c729184edf4c96e2a.png?imageView&thumbnail=168x0&quality=75">
          <span>¥199</span>
        </div>
      </div>
      <div class="floorFirst">
        <div class="icon">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="floorTwo">
          <div style="background:url(https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></div>
          <div style="background:url(https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></div>
          <div style="background:url(https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></div>
          <div style="background:url(https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <!-- <div class="HotSellModule">
      <div class="moduleTitle">类目热销榜</div>
      <div class="content">
        <div class="line1">

        </div>
        <div class="line2">

        </div>
      </div>
    </div> -->
    <div class="ftWrap">
      <div class="gobd">
        <span class="goApp">
        下载APP
        </span>
        <span class="goWeb">
          电脑版
        </span>
      </div>
      <div class="copy">
        <span class="copyTop">
          网易公司版权所有 © 1997-2020<br>
        </span>
        <span class="copyBottom">
          食品经营许可证：JY13301080111719
        </span>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
//引入better-scroll
import BScroll from 'better-scroll'
import {mapState} from 'vuex'

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

        this.$store.commit('save_address',result.data)

        new BScroll('.wrapper',{
          scrollX:true
        })


        //轮播效果
        var mySwiper = new Swiper('.swiper-container',{
            pagination: {
            el: '.swiper-pagination',
          },
            loop : true
        })
      },
       computed:{
        // ...mapState(['address']) 不能自定义映射
        ...mapState({
          address:state=>state.address

        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope="this api replaced by slot-scope in 2.5.0+">
@import "../../common/stylus/mixins.styl"

#homeContainer
  .Sticky
    z-index 2
    position:fixed;
    top:0;
    box-sizing:border-box
    // overflow hidden
    background-color #fff
    width 750px
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
    .wrapper
      width 100%
      height 50px
      overflow hidden
      .content
        width 1300px
        height 50px
        display flex
        white-space nowrap
        li
          height 54px
          font-size 24px 
          text-align: center
          line-height 45px
          padding  0 24px
          background #ffffff
          &.active
            color red
            border-bottom  8px solid red
            box-sizing  border-box
  .swiper-container
    --swiper-theme-color: #fff;
    margin-top 136px
    .swiper-slide
      overflow   hidden
      img 
        width 750px
        height 370px
        display:block
    .swiper-pagination
      span 
        width 40px
        height 6px
        border-radius: 20%
  .servicePolicy
    width 750px 
    height 72px
    // display block
    display flex
    justify-content center
    li
      line-height 72px
      display flex
      justify-content center
      i
        width 32px
        height 32px
        display inline-block
        background-size 30px 30px
        background-repeat no-repeat
        margin auto
        margin-left 30px
  .kingKongModule
    height 340px
    width 750px
    display flex
    flex-wrap wrap
    padding-bottom 32px
    .icon
      width 110px
      display block
      text-align: center
      margin 0 20px
      img
        width 110px
        height 110px
  .BigPromotionModule
    .floorTop
      height 240px
      width 750px
      background-color red
      background url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0);
      background-size 100% 100%
      position relative
      .floorGood
        width 168px
        height 168px 
        position:absolute
        left 74px
        top 35px
        img 
          width 168px
          height 168px  
        span 
          width 150px
          display block
          height 32px
          background-color #F48F18
          border-radius 16px
          text-align center
          color #ffffff
          position:absolute
          left 8px
          top 130px
    .floorFirst
      height 100%
      width 750px
      background-color #1674e3
      box-sizing border-box
      padding 20px
      .icon
        background:url(https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75)
        background-size:100% 100%;
        height 160px
      .floorTwo
        display flex
        flex-wrap wrap
        div
          height 186px
          width 351px
          margin-top 8px
        div:nth-child(2n-1)
          margin-right  8px
  .HotSellModule
    width 750px
    height 710px
  .ftWrap
    height 244px
    width 750px
    background-color #414141
    margin-bottom 50px
    // margin-top 20px 
    .gobd
      text-align center
      color #ebebeb
      .goApp
      .goWeb
        width 172px
        height 62px
        border 2px solid #6d6d6d
        display inline-block
        line-height 62px
        border-radius 6px
        font-size 24px
        margin 40px 20px 20px 20px 
    .copy
      text-align center
      color #999999
      line-height 30px

</style>
