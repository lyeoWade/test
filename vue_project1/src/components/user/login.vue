<template>
  <div class="login">
    <h2 class="guide-desc">欢迎来到ETXS!</h2>

    <div class="login-wrap">
      <van-tabs v-model="active" class="login-wrap-s">
        <van-tab title="登录">
          <div class="login-box login-wrap-content">
            <i class="upIcon"></i>
            <div class="login-from">
              <van-cell-group>
                <van-field
                  v-model="username"
                 
                  clearable
                  left-icon="address"
                  placeholder="imtoken钱包地址"
                  @click-right-icon="$toast('question')"
                  ref="imtokenUrl"
                />
                <van-field
                  v-model="password"
                  left-icon="password"
                  placeholder="密码"
                  ref="mypassword"
                  type="password"
                />

                <van-button type="info" @click="loginFn">登录</van-button>
              </van-cell-group>
            </div>
          </div>
        </van-tab>
        <van-tab title="注册">
          <div class="register-box login-wrap-content">
            <i class="upIcon"></i>
            <div class="">
              <van-cell-group>
                <van-field
                  v-model="username"
                 
                  clearable
                  left-icon="address"
                  placeholder="imtoken钱包地址"
                  ref="regimtokenUrl"
                  @click-right-icon="$toast('question')"
                />
                <van-field
                  v-model="password"
                  left-icon="password"
                  placeholder="密码"
                  ref="passwords"
                  type="password"
                />
                <van-field
                  v-model="code"
                  left-icon="code"
                  placeholder="邀请码"
                  ref="fromuser"
                />

                <van-button type="info" @click="registerFn">注册</van-button>
              </van-cell-group>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>


import Vue from "vue"
import Vant from 'vant';
import 'vant/lib/index.css';

import axios from 'axios'
import qss from './../../../node_modules/qs/dist/qs'


Vue.use(Vant);

import { Notify } from 'vant';

Vue.use(Notify);


export default {
  name: 'login',
  data () {
    return {
      active:0,
      msg: '',
      username:'',
      code:'',
      password:'',
      RmonitorPassword:/^[\w]{8,}$/
    }
  },
  methods:{
    //注册
    registerFn(){

      let password = this.$refs.passwords.value,
          name     = this.$refs.regimtokenUrl.value,
          fromuser = this.$refs.fromuser.value;

      if(password==''||name==''||fromuser==''){
        Notify({
          message: "请填写完整!",
          duration: 1000,
          background: '#2ac4d2'
        });
        return false;
      }

      
      if(!this.RmonitorPassword.test(password)){
        Notify({
          message: "请输入正确的密码(8位及以上数字字母下划线)",
          duration: 1000,
          background: '#2ac4d2'
        });
        return false;
      }
      
      let datas = qss.stringify({ 
        fromuser: fromuser, 
        password : password,
        username : name
      });
      axios.post('etxs/register', datas)
      .then( str =>{
        console.log(str.data)
        if(str.data.code==100){
            Notify({
              message: str.data.message+', 请登录!',
              duration: 1000,
              background: '#2ac4d2'
            });
            history.go(0)
        }else{
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });
            history.go(0)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    loginFn(){
      //登录
      let password = this.$refs.mypassword.value,
          name     = this.$refs.imtokenUrl.value;

      if(password==''||name==''){
        Notify({
          message: "请填写完整!",
          duration: 1000,
          background: '#2ac4d2'
        });
        return false;
      }

      if(!this.RmonitorPassword.test(password)){
        Notify({
          message: "请输入正确的密码(8位及以上数字字母下划线)",
          duration: 1000,
          background: '#2ac4d2'
        });
        return false;
      }

      let datas = qss.stringify({ 
        password : password,
        username : name
      });

      axios.post('etxs/login', datas)
      .then( str =>{
        console.log(str.data)
        if(str.data.code==100){
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });

            window.localStorage.setItem('userInfo',JSON.stringify(str.data))
            var _this=this;
            setTimeout(function(){
              _this.$router.push({ path: '/home/index' })
            },1300)
        }else{
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });
            history.go(0)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

      // 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
