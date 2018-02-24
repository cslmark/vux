<template>
  <div>
    <div class="fixed-header">
      <x-header title="联系人详情"
                style="color:black"
      >
      </x-header>
    </div>
    <!--<div class="fixed-header">-->
    <!--<div class="vux-header loginHeader f18">-->
    <!--<h1 class="vux-header-title">-->
    <!--<span>联系人详细信息</span>-->
    <!--</h1> &lt;!&ndash;&ndash;&gt;-->
    <!--<div class="vux-header-right">&lt;!&ndash;&ndash;&gt;-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div>
      <!--<p>-->
        <!--<label>姓名</label>-->
        <!--<label>{{ name }}</label>-->
      <!--</p>-->
      <!--<p>-->
        <!--<label>电话号码</label>-->
        <!--<label>{{ phone }}</label>-->
      <!--</p>-->

      <group title="联系人详情" style="margin-top:20px;">
        <cell title="姓名" style="color:blue;left:20px"></cell>
        <x-input  v-model="this.name" type="text" placeholder="请输入联系人姓名" :show-clear="false" style="color:lightgray; left:20px" ></x-input>
        <cell title="电话号码" style="color:blue;left:20px"></cell>
        <x-input  v-model="this.phone" type="tel" placeholder="请输入电话号码" :show-clear="false" style="color:lightgray; left:20px"></x-input>
      </group>

      <group title="联系人其他信息" label-width="5.5em" label-margin-right="2em" label-align="justify">
        <x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
        <datetime title="生&emsp;&emsp;&nbsp;日" v-model="time1" value-text-align="left" placeholder="请选择日期"></datetime>
        <selector title="电话类别" :options="['iphone', '其他']" v-model="this.phoneType" placeholder="请选择电话类型"></selector>
        <x-switch title="选择"></x-switch>
        <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>
        <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      </group>

      <!--<group title="联系人设置" style="margin-top:20px;">-->
        <!--<cell title="姓名"></cell>-->
        <!--<x-input  v-model="this.name" type="text" placeholder="请输入联系人姓名" :show-clear="false" ></x-input>-->
        <!--<cell title="电话号码"></cell>-->
        <!--<x-input  v-model="this.phone" type="tel" placeholder="请输入电话号码" :show-clear="false" ></x-input>-->
      <!--</group>-->
      <!--<group title="showMode">-->
        <!--<radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>-->
      <!--</group>-->
      <!--<group title="placement">-->
        <!--<radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>-->
      <!--</group>-->
    </div>
  </div>
</template>

<script>
  import { XHeader, Tabbar, Group, Cell, XInput, Datetime, Selector, ChinaAddressData, XAddress,  XSwitch, XTextarea } from 'vux'
export default {
  name: 'SLContactDetail',
  data() {
    return {
      name: '',
      phone: '',
      time: '',
      phoneType: '',
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      myIndex: '',
    }
  },
  created() {
    let name = this.$router.app._route.params.name
    let phone = this.$router.app._route.params.phone
    let index = this.$router.app._route.params.index
    this.myIndex = index
    this.name = name
    this.phone = phone
    console.log(name + phone)
  },
  components: {
    XHeader,
    Tabbar,
    Group,
    Cell,
    XInput,
    Datetime,
    Selector,
    ChinaAddressData,
    XAddress,
    XSwitch,
    XTextarea
  }
}
</script>

<style scoped>

</style>
