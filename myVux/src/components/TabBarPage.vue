<template>
  <div id="mainTab">
    <router-view />
    <tabbar class="TabBarPageTabbar">
      <tabbar-item show-dot v-bind:selected="this.selectIndex === 0" @click.native="goMessagePage">
        <img slot="icon" src="../assets/Wechat/tabbar_mainframe_25x23_@2x.png">
        <img slot="icon-active" src="../assets/Wechat/tabbar_mainframeHL_25x23_@2x.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item v-bind:selected="this.selectIndex === 1" @click.native="goContactPage">
        <img slot="icon" src="../assets/Wechat/tabbar_contacts_27x23_@2x.png">
        <img slot="icon-active" src="../assets/Wechat/tabbar_contactsHL_27x23_@2x.png">
        <span slot="label">通信录</span>
      </tabbar-item>
      <tabbar-item show-dot v-bind:selected="this.selectIndex === 2" @click.native="goNewsPage">
        <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
        <!--<span slot="label"></span>-->
        <img slot="icon" src="../assets/Wechat/sight_cell_moments_40x40_@2x.png">
        <img slot="icon-active" src="../assets/Wechat/sight_cell_moments_40x40_@2x.png">
        <span slot="label">新闻</span>
      </tabbar-item>
      <tabbar-item v-bind:selected="this.selectIndex === 3">
        <img slot="icon" src="../assets/Wechat/tabbar_discover_23x23_@2x.png">
        <img slot="icon-active" src="../assets/Wechat/tabbar_discoverHL_23x23_@2x.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item badge="2" v-bind:selected="this.selectIndex === 4" @click.native="goMePage">
        <img slot="icon" src="../assets/Wechat/tabbar_me_23x23_@2x.png">
        <img slot="icon-active" src="../assets/Wechat/tabbar_meHL_23x23_@2x.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'TabBarPage',
    components: {
      Tabbar,
      TabbarItem
    },
    data: {
      selectIndex: 0
    },
    created () {
      this.selectIndex = 0
    },
    methods: {
      goContactPage () {
        this.$router.push({name: 'Home'})
      },
      goMessagePage () {
        this.$router.push({name: 'Message'})
      },
      goMePage () {
        this.$router.push({name: 'Mine'})
      },
      goNewsPage () {
        this.$router.push({name: 'News'})
      }
    }
  }
</script>

<style scoped>
  .TabBarPageTabbar {
    position: fixed !important;
  }
  
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #9d19c5 !important;
  }
</style>
