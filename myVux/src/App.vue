<template>
  <div id="app">
    <router-view></router-view>
    <!--<tabbar>-->
      <!--<tabbar-item>-->
        <!--<span slot="label">Home</span>-->
      <!--</tabbar-item>-->
    <!--</tabbar>-->
    <!--<tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">-->
      <!--<tabbar-item :link="{path:'/'}" :selected="route.path === '/'">-->
        <!--<span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>-->
        <!--<span slot="label">Home</span>-->
      <!--</tabbar-item>-->
      <!--<tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">-->
        <!--<span class="demo-icon-22" slot="icon">&#xe633;</span>-->
        <!--<span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Demos</span></span>-->
      <!--</tabbar-item>-->
    <!--</tabbar>-->
  </div>
</template>

<script>
  import { XHeader, Tabbar } from 'vux'
  import TabbarItem from "vux/src/components/tabbar/tabbar-item";
  export default {
    name: 'app',
    components: {
      TabbarItem,
      XHeader,
      Tabbar
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
