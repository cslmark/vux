<template>
  <div>
    <div>
      <div class="vux-demo">
        <x-header title="联系人列表"
                  :left-options="{'showBack': false, 'preventGoBack': false}"
        >
        </x-header>
        <h6 v-if="seen" v-on:click="hideSubTitle">我是隐藏标题，点我将隐藏</h6>
        <form class="cmxform" id="signForm" method="get" type="text">
          <fieldset>
            <legend>请输入你要登记的联系人信息</legend>
            <p>
              <label for="name">名字</label>
              <input id="name" v-model="newPerson" name="name" type="text">
            </p>
            <p>
              <label for="phoneNum">号码</label>
              <input id="phoneNum" v-model="newPhone" name="phoneNum" type="text">
            </p>
            <!--<button class="ilbButton" v-on: onclick="addNew()">增加联系人到列表</button>-->
            <input type="button" class="ilbButton" value="添加到联系人列表" v-on:click="addNew()"/>
            <!--<router-link to=("/SLcontactDetail"+"hello"+"18981906927")>Go to Detail</router-link>-->
            <button v-on:click="gotoContactDetail" v-if="seen">跳转到联系人详情页面</button>
          </fieldset>
        </form>
      </div>

      <!--<scroller lock-x scrollbar-y use-pulldown-->
                <!--&lt;!&ndash;:pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}"&ndash;&gt;-->
                <!--@on-pulldown-loading="refreashContacts" ref="demo1">-->
      <scroller lock-x scrollbar-y use-pulldown height="600px" @on-pulldown-loading="refreashContacts" ref="demo1"
                :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中...'}"
                v-model="refreashStatus">
        <group title="我的联系人">
          <swipeout>
            <swipeout-item v-for="(item, index) in items" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')"
                           transition-mode="follow">
              <div slot="right-menu">
                <swipeout-button @click.native="onButtonClick('Delete', item, index)" type="primary">删除</swipeout-button>
                <swipeout-button @click.native="onButtonClick('Edit', item, index)" type="warn">编辑</swipeout-button>
              </div>
              <cell value=item.isFinished v-bind:title="item.name" :is-link="true"
                    v-bind:link="getLinksStr(item, index)" slot="content" class="demo-content vux-1px-t">{{ item.phone }}
              </cell>
            </swipeout-item>
          </swipeout>
        </group>

        <!--pulldown slot-->
        <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
          <span v-show="refreashStatus.pulldownStatus === 'default'"></span>
          <span class="pulldown-arrow" v-show="refreashStatus.pulldownStatus === 'down' || refreashStatus.pulldownStatus === 'up'"
                :class="{'rotate': refreashStatus.pulldownStatus === 'up'}">↓ 释放刷新数据</span>
          <inline-loading v-show="refreashStatus.pulldownStatus === 'loading'"></inline-loading>
          <span class="pulldown-arrow" v-show="refreashStatus.pulldownStatus === 'loading'">数据加载中...</span>
          <span v-show="refreashStatus.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
        </div>
      </scroller>

      <!--<swipeout>-->
        <!--<group title="可左滑删除的组测试" style="margin-top:20px;">-->
          <!--<swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')"-->
                         <!--transition-mode="follow">-->
            <!--<div slot="right-menu">-->
              <!--<swipeout-button @click.native="onButtonClick('fav')" type="primary">Yes</swipeout-button>-->
              <!--<swipeout-button @click.native="onButtonClick('delete')" type="warn">Right</swipeout-button>-->
            <!--</div>-->
            <!--&lt;!&ndash;<div slot="content" class="demo-content vux-1px-t">&ndash;&gt;-->
              <!--&lt;!&ndash;可以进行左滑删除的Cell&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<cell title="姓名" style="color:blue;left:20px" slot="content" class="demo-content vux-1px-t"></cell>-->
          <!--</swipeout-item>-->
        <!--</group>-->
      <!--</swipeout>-->
    </div>

  </div>
</template>

<script>
import { XButton, Group, Cell, AlertPlugin, XHeader, Tabbar, Alert, AlertModule,
  Swipeout, GroupTitle, SwipeoutItem, SwipeoutButton, Scroller, LoadMore, InlineLoading, Confirm, TabbarItem,
  TransferDomDirective as TransferDom } from 'vux'
import Store from '../store/store.js'
export default {
  directives: {
    TransferDom
  },
  components: {
    XButton,
    Group,
    Cell,
    AlertPlugin,
    XHeader,
    Tabbar,
    Alert,
    Swipeout,
    GroupTitle,
    SwipeoutItem,
    SwipeoutButton,
    Scroller,
    LoadMore,
    InlineLoading,
    Confirm,
    TabbarItem
  },
  data () {
    return {
      title: '<span>联系人</span>',
      items: '',
      newPerson: '',
      newPhone: '',
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      message: new Date().toLocaleDateString() + '正在创立联系人列表',
      seen: false,
      refreashStatus: {
        pulldownStatus: 'default'
      },
      editShow: false,
      selectIndex: 0
    }
  },
  // beforecreated：el 和 data 并未初始化
  // created:完成了 data 数据的初始化，el没有
  // beforeMount：完成了 el 和 data 初始化
  // mounted ：完成挂载
  created() {
    this.items = Store.fetch()
    this.selectIndex = 0
  },
  methods: {
    // toggleFinish: function (item) {
    //   console.log(item)
    //   item.isFinished = !item.isFinished
    // },
    addNew: function () {
      // 检查对应的字符串是否为空
      if ((this.isempty(this.newPerson)) || (this.isempty(this.newPhone))) {
        AlertModule.show({
          title: '温馨提示',
          content: '输入的姓名或者电话号码为空，不符合要求!!!',
          onshow () {
            console.log('我是alert,我出现了=================')
          },
          onHide () {
            console.log('我是alert,我消失了=================')
          }
        })
        // alert("输入的姓名或者电话号码为空，不符合要求!!!")
        return
      }
      console.log(this.newPerson)
      console.log(this.newPhone)
      this.items.push({
        name: this.newPerson,
        phone: this.newPhone
      })
      Store.save(this.items)
      this.newPerson = ''
      this.newPhone = ''
    },
    isempty: function (obj) {
      if (typeof obj === 'undefine' || obj == null || obj == '') {
        return true
      } else {
        return false
      }
    },
    hideSubTitle: function () {
      this.seen = !this.seen
    },
    gotoContactDetail: function (item) {
      console.log('item = ' + item + '准备跳转页面了')
      this.$router.push({ name: 'SLContactDetail', params: { name: '王二小', phone: '1861726345555', index: 0}})
    },
    getLinksStr: function (item, index) {
      let links = '/SLContactDetail/' + item.name + '/' + item.phone + '/' + index
      return links
    },
    onButtonClick (type, item, index) {
      if (type === 'Delete') {
        console.log('将要删除' + item.name + '(' + index + ')')
        this.items.splice(index, 1)
      } else {
        console.log('将要编辑' + item.name + '(' + index + ')')
        const _this = this
        this.$vux.confirm.prompt('请输入电话号码', {
          title: '编辑' + item.name + '的电话号码',
          onShow () {
            _this.$vux.confirm.setInputValue(item.phone)
          },
          onHide () {
            console.log('将要隐藏弹框')
          },
          onCancel () {
            console.log('取消对于' + item.name + '的号码编辑')
          },
          onConfirm (msg) {
            var originEle = this.items[index]
            originEle.phone = msg
            Store.save(this.items)
          }
        })
      }
    },

    handleEvents (type) {
      console.log('event: ', type)
    },
    refreashContacts () {
      console.log('正在更新通信录的信息')
      this.$nextTick(() => {
        setTimeout(() => {
          this.items = Store.fetch()
          this.$refs.demo1.donePulldown()
        }, 1000)
      })
    }
  },
  watch: {
    items: {
      handler: function (val, oldval) {
        console.log('val' + val)
        console.log('oldval' + val)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/less/index.less';
  .vux-demo {
    text-align: center;
    background: lightblue;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .ilbButton {
    margin-top: 5px;
    margin-buttom: 5px;
    height: 24px;
    font-size: 12px;
    color: lightblue;
    background: #60992e;
    border-radius: 5px;
  }

  .vux-header .vux-header-title {
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #4e84de !important;
  }

</style>
