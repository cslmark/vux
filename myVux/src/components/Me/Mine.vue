<template>
  <div class="personal">
    <header class="about-me">
      <div class="avatar-wrapper" @click="goPersonalPage">
        <div>
          <blur :blur-amount=40 :url="url">
            <p class="center">
              <img :src="url">
            </p>
            <div class="avatar-info">
              <h3 class="user-name">{{userInfo.userName}}</h3>
              <span class="user-info">{{userInfo.userMsg}}</span>
            </div>
          </blur>
        </div>
      </div>
    </header>

    <div class="body">
      <div class="spaceColor">
        <h3 class="title">消费贷</h3>
      </div>
      <section>
        <div class="personal-ct">
          <!--<div style="background: blue; width: 100px; height:100px"></div>-->
          <!--<div style="background: red; width: 100px; height:100px"></div>-->
          <!--<div style="background: green; width: 100px; height:100px"></div>-->
          <div class="ct-items">
            <img src="./wo_icon_hetong@2x.png" width="36" height="36">
            <span>合同</span>
          </div>
          <div class="ct-items">
            <img src="./wode_icon_zhangdan@2x.png"
                 srcset="./wode_icon_zhangdan@2x.png 2x, ./wode_icon_zhangdan@3x.png 3x" width="36" height="36">
            <span>还款</span>
          </div>
          <div class="ct-items">
            <img src="./wode_icon_th@2x.png"
                 srcset="./wode_icon_th@2x.png 2x, ./wode_icon_th@3x.png 3x" width="36" height="36">
            <span>退货</span>
          </div>
        </div>
      </section>

      <group style="margin-top:20px;">
        <cell title="我的银行卡" :is-link="true">
          <img slot="icon" src="./user_question_icon@2x.png" width="26" height="26" style="display:block; margin-right: 5px"/>
        </cell>
        <cell title="设置" :is-link="true">
          <img slot="icon" src="./user_set_icon@2x.png" width="26"  height="26" style="display:block; margin-right: 5px"/>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import {Flexbox, Blur, FlexboxItem, Group, Cell } from 'vux'

  export default {
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      Group,
      Cell
    },
    data () {
      return {
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
        ],
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        userInfo: {
          userName: '陈晨',
          userMsg: '18617163096'
        }
      }
    },
    name: 'Mine'
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }

  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }

  .avatar-info {
    text-align: center;
  }

  .user-name {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-weight: normal;
    color: white;
  }

  .user-info {
    font-size: 14px;
    color: white;
  }

  .body{
    background: #F6F6F6;
  }
  .spaceColor{
    background: #F6F6F6;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 25px;
  }
  h3.title{
    padding-left: 10px;
    line-height: 25px;
    border-left: 4px solid #F04655;
    font-size: 18px;
    letter-spacing: -0.13px;
    font-weight: normal;
    color:#3C3C5E;
  }

  .personal-ct{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: white;
  }

  .ct-items{
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .ct-items img{
    margin-top: 20px;
  }

  span{
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 10px;
    color: lightgrey;
  }

  /*
    .personal-ct{
    display: -webkit-flex;       //为了支持safari
    display: flex;               //默认为block形式，同时也可以布局成 inline-flex的方式, 如果是webKit内核的浏览器，需要加上 -webkit-flex
    flex-direction: row;      //设定主轴方向为水平方向  row | row-reverse | column | column-reverse;
    flex-wrap: wrap;          //多出来的部分进行换行  nowrap | wrap | wrap-reverse;
     flex-flow: <flex-direction> || <flex-wrap>;
     justify-content: flex-start | flex-end | center | space-between | space-around;   //项目在主轴方向上的对齐方式
     align-items: flex-start | flex-end | center | baseline | stretch;  //侧轴的对齐方式
     .ct-items{
      flex: 1;                //将其布满整个屏幕


    }
  }
  */

  /*.personal{*/
    /*.personal-ct{*/
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-items: center;*/
      /*background: #fff;*/
      /*.ct-items{*/
        /*flex: 1;*/
        /*text-align: center;*/
        /*img{*/
          /*display: block;*/
          /*margin: 11px auto;*/
        /*}*/
        /*span{*/
          /*display: block;*/
          /*font-size: 15px;*/
          /*line-height: 20px;*/
          /*margin-bottom: 10px;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>
