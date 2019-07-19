<template>
  <div class="hello">
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <div class="login">
          <i class="upIcon"></i>
          登录
        </div>
      </van-tab>
      <van-tab title="标签 2">注册</van-tab>
    </van-tabs>
  </div>
</template>

<script>


import Vue from "vue"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);



export default {
  name: 'HelloWorld',
  data () {
    return {
      active:1,
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
