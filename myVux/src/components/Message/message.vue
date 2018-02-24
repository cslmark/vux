<template>
  <div>
    <div>
      <swiper auto :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
    </div>

    <div class="Study">
      <a href="https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">
        想了解vue的舍命周期图，点我
      </a>
    </div>


    <div>
      <load-more v-bind:tip="this.timeLabel" :show-loading="false" background-color="#fbf9fe"></load-more>
      <x-table>
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>BIT</td>
          <td>$7023.00</td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>$800</td>
        </tr>
        <tr>
          <td>EOS</td>
          <td>$8.16</td>
        </tr>
        </tbody>
      </x-table>
    </div>

    <div style="padding:15px;">
      <load-more tip="当前的水果价格" :show-loading="false" background-color="#fbf9fe"></load-more>
      <x-table full-bordered style="background-color:#fff;">
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Apple</td>
          <td colspan="2">$1.25 x 10</td>
        </tr>
        <tr>
          <td>Banana</td>
          <td>$1.20</td>
          <td>x 08</td>
        </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, XTable, LoadMore } from 'vux'
  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
    return item
  })

  export default {
    name: 'message',
    components: {
      Swiper,
      SwiperItem,
      XTable,
      LoadMore
    },
    data () {
      return {
        demo01_list: baseList,
        demo02_index: 1,
        timeLabel: '',
        myTimer: null
      }
    },
    created() {
       this.timer = setInterval(() => {
        this.startTime()
      }, 1000)
      // this.startTime()
    },
    beforeDestroy(){
      console.log("我要被销毁了。。。。。啦啦啦,我要消灭定时器")
      window.clearInterval(this.timer)
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      startTime () {
        var today = new Date()
        var y = today.getFullYear()
        var mon = today.getMonth() + 1
        mon = changNum(mon)
        var d = today.getDay()
        d = changNum(d)
        var h = today.getHours()
        var m = today.getMinutes()
        m = changNum(m)
        var s = today.getSeconds()
        s = changNum(s)
        this.timeLabel = y + '年' + mon + '月' + d + '日' + h + ':' + m + ':' + s

        // setTimeout(() => {
        //   console.log('时间过去了1s')
        //   this.startTime()
        // }, 1000)

        function changNum (i) { // 月、日、秒如果小于10数字前加0
          if (i < 10) {
            return '0' + i
          }
          return i
        }
      }
    }
  }
</script>

<style scoped>
.Study{
  text-align: center;
}
</style>
