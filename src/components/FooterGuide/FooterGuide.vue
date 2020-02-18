<template>
  <div id="footerContainer">
      <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="guideItem">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/item'}" @click="goPath('/item')" class="guideItem">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
      </div>
      <div :class="{active: $route.path === '/topic'}" @click="goPath('/topic')" class="guideItem">
            <i class="iconfont icon-icon09"></i>
            <span>值得买</span>
      </div>
      <div :class="{active: $route.path === '/cart'}" @click="goPath('/cart')" class="guideItem">
            <i class="iconfont icon-qicheqianlian-"></i>
            <span>购物车</span>
      </div>
      <div :class="{active: $route.path === '/personal'}" @click="goPath('/personal')" class="guideItem">
            <i class="iconfont icon-ren"></i>
            <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goPath(path){
              //跳转至指定的路径
              /*编程时导航:$router
                $route和router的区别
                    1.$router是路由器对象,里面包含路由跳转的方法
                    2.$route 是路由对象,里面包含当前路径下所有路由信息(path,params,meta,query)
              */
             this.$router.push(path)
          }
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    @import "../../common/stylus/mixins.styl" 
    #footerContainer
        display flex
        top-border-1px(#eee)
        position fixed
        left 0
        bottom 0
        width 100%
        height 98px
        box-sizing border-box
        // background pink
        padding-top 4px
        .guideItem
            width 20%
            height 98px
            text-align center
            display flex
            flex-direction column
            &.active
                color red
            .iconfont
                font-size 50px
                line-height 50px
</style>
