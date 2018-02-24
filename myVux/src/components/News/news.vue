<template>
  <div id="news">
    <div class="header">
      <div class="searchTap">
        <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          placeholder="请输入你搜索的新闻"
          position="absolute"
          auto-scroll-to-top top="0px"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
      </div>
      <div class="AddButtonBg" v-on:click="troggleMenu">
          <img src="../../assets/Wechat/barbuttonicon_add_30x30_@2x.png" width="28" height="28" style="display: block"/>
          <span>发布</span>
        <!--<div class="testDiv" style="background: white">1</div>-->
        <!--<div class="testDiv" style="background: #5B62CD">2</div>-->
      </div>
    </div>
    <scroller lock-y scrollbar-x class="topBarScroller">
      <!--<div v-for="item in this.menuList" style="width: 60px; height: 40px">{{ item }}</div>-->
      <div v-for="menu in this.menulist" style="width: 60px; height: 40px; background: #5B62CD; display:inline-block">{{ menu.title }}</div>
    </scroller>
    <div class="maskAlertView" v-if="dialog">
      <div class="alertGroup">
        <div class="paddingDiv" style="width: 100%; height: 15px"></div>
        <div v-for="item in items" class="itemClass">
          <img src="../../assets/Wechat/add_friend_icon_addgroup_36x36_@2x.png">
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
    <!--<div class="body" style="width: 100%; height: 500px; background: red"></div>-->
  </div>
</template>

<script>
  const popMenuList = [
    {
      'imageUrl': '../../assets/Wechat/add_friend_icon_addgroup_36x36_@2x.png',
      'content': '面对面建群'
    },
    {
      'imageUrl': '../../assets/Wechat/add_friend_icon_contacts_36x36_@2x.png',
      'content': '手机联系人'
    },
    {
      'imageUrl': '../../assets/Wechat/add_friend_icon_reda_36x36_@2x.png',
      'content': '雷达加好友'
    },
    {
      'imageUrl': '../../assets/Wechat/add_friend_icon_scanqr_36x36_@2x.png',
      'content': '扫一扫'
    },
    {
      'imageUrl': '../../assets/Wechat/add_friend_icon_offical_36x36_@2x.png',
      'content': '公众号'
    }
  ]

  const newsMenulist = [
    {
      'title':'关注'
    },
    {
      'title':'推荐'
    },
    {
      'title':'热点'
    },
    {
      'title':'深圳'
    },
    {
      'title':'视频'
    },
    {
      'title':'春节'
    },
    {
      'title':'新时代'
    },
    {
      'title':'图片'
    },
    {
      'title':'娱乐'
    },
    {
      'title':'科技'
    },
    {
      'title':'懂车帝'
    },
    {
      'title':'财经'
    },
    {
      'title':'军事'
    },
    {
      'title':'体育'
    },
    {
      'title':'街拍'
    },
    {
      'title':'国际'
    },
    {
      'title':'房产'
    }
  ]

  import { Search, Group, Cell, Scroller } from 'vux'
  export default {
    name: 'News',
    data () {
      return {
        results: [],
        value: '理想派',
        dialog: false,
        items: popMenuList,
        menulist: newsMenulist,
        menulistCount: newsMenulist.length
      }
    },
    methods: {
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      getMenuWidth: function () {
        var width = (this.menuList.length + 1) * 60 + 'px'
        return width
      }
    },
    components: {
      Search,
      Group,
      Cell,
      Scroller
    },
    methods: {
      getImageUrl: function (item) {
        return url("item.imageUrl");
      },
      troggleMenu: function () {
        this.dialog = !this.dialog;
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>
  #news .header vux-search-box,vux-search-fixed{
    top:0px !important;
  }

  .header{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background: #D7D6DC;
    height: 48px;
  }

  .AddButtonBg{
    width: 15%;
    height: 100%;
    background: red;
    flex:1;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }


  .AddButtonBg img{
    display: block;
    margin-top: 0px;
  }

  .AddButtonBg span{
    display: block;
    color: white;
    font-size: 5px;
    margin-bottom:0px;
  }

  .searchTap{
    width: 85%;
    height: 100%;
    background: #EFEFF4;
  }

  .testDiv{
    width: 30px;
    height: 30px;
  }

  .maskAlertView{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index:1000;
    top:48px;
    left:0px;
    background: rgba(0,0,0, 0.1);
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .alertGroup {
    /*margin-top: 48px;*/
    width: 40%;
    height: 200px;
    background-image: url("../../assets/bolai/zhuye_tanchu@2x.png");
    /*background-size:contain;*/
    /*background: red;*/
    background-size:100% 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    color: white;
  }

  .itemClass{
    margin-top:1px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .itemClass img{
    width: 26px;
    height: 26px;
    margin-top:5px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom: 5px;
    display: block;
  }

  .itemClass span{
    font-size: 12px;
    display: block;
  }

  .searchTap .vux-search-box .weui-search-bar {
    padding: 8px 10px 12px 10px !important;
    background-color: red!important;
  }

  .topBarScroller{
    width: 100%;
    height: 50px;
    background-color: yellow;
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  /*注释部分

  */
</style>
