<template>
  <div class="index">
      <div class="banner_top">
        <div class="banner-desc">
          <p>Welcome to the ETXS!</p>
          <h2>【以太荣耀】ETXS拓展计划！</h2>
        </div>
        <div class="contact-wrap">
          <a href="">客服咨询</a>
        </div>
        <div class="resonance">
          <a href="javascript:;" @click="resonance">共振</a>
        </div>
      </div>
      

      <div class="content">
        <div class="resonance-wrap com">
          <a href="javascript:;" class="EcoPlan" @click="EcoPlan">生态计划</a>
          <h3>EtxS共振计划</h3>
          <div class="resonance-plan">
            <van-row type="flex">
              <van-col span="10">
                <p>第一期</p>
                <span>{{resonanceArr.resonance}}ETXS</span>
              </van-col>
              <van-col span="4">
                <p>时间</p>
                <span>{{resonanceArr.maxDay}}天</span>
              </van-col>
              <van-col span="10">
                <p>兑换比例</p>
                <span>1ETH={{resonanceArr.proportion}}ETXS</span>
              </van-col>
            </van-row>
          </div>
          <div class="resonance-progress">
            <p class="progress-t">共振进度</p>
            <div class="progress">
              <div class="progress-box">
                <van-progress color="#2ac4d2" v-if="percentage"  :percentage="percentage" />
                <!-- v-if="percentage" 防止出现Invalid prop: custom validator check failed for prop "percentage" 错误-->
              </div>
            </div>
          </div>

          <div class="number-wrap">
            <!-- <p class="progress-t"></p> -->
            <span>
              <i></i>
              <input type="number" v-model="ResonanceNum" name="" value="">
            </span>
          </div>

          <div class="pay-wrap">
            <p class="progress-t">余额:<van-loading size="12px" color="#2ac4d2" v-show="isShowETHInfo" vertical />{{ETHArr.balance}}ETH</p>
            <button @click="payNow">立即支付ETH</button>
          </div>
          <div class="balance">
            <p>余额：<van-loading size="12px" color="#2ac4d2" v-show="isShowETHInfo" vertical />{{ETXSArr.balance}}ETXs</p>
          </div>
        </div>

        <!-- 邀请 -->
        <div class="invitation com">
          <h3>邀请链接</h3>
          <div class="invitation-content">
            <div class="invitation-bg">
              <p>我的专属邀请码</p>
              <div class="invitation-code">
                <!-- {{invitationCode}} -->
                <span v-for="(itemCode,i) in invitationCode" :key="i">{{itemCode}}</span>
                <div ref="invitationCodeHide">{{userInfo.data.invitationCode}}</div>
                <!-- <span>8</span>
                <span>8</span>
                <span>8</span>
                <span>8</span>
                <span>8</span> -->
              </div>
              <div class="invitation-share">
                <a href="javascript:;" @click="copyInvitationCode">复制邀请链接</a>
              </div>
            </div>
          </div>
        </div>



        <div class="mining com">
          <h3>移动挖矿</h3>
          <div class="mining-content">
            <div class="mining-list">
              <van-row type="flex">
                <van-col span="8">
                  <p class="f-top">2.0%</p>
                  <span class="f-time">前100天</span>
                </van-col>
                <van-col span="9">
                  <p class="pay-top">一次性支付</p>
                  <span class="pay-num">8000EtxS</span>
                </van-col>
              </van-row>

              <div class="star-mining"> 
                <a href="javascript:;" @click="starMining">开启挖矿</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mining com storage-list">
          <h3>存储列表</h3>
          <div class="mining-content">
            


            <div class="mining-list" v-for="(item,i) in listOfRevenueProductsArr" :key="item.id">
              <van-row type="flex">
                <van-col span="8">
                  <p class="f-top">{{item.profit}}%</p>
                  <span class="f-time">产矿量/日</span>
                </van-col>
                <van-col span="9">
                  <p class="pay-top">{{item.maxDay}}天</p>
                  <span class="pay-num">{{item.startNum}}EtxS</span>
                </van-col>
              </van-row>

              <div class="star-mining"> 
                <a href="javascript:;" @click="changeInto(item.startNum)">立即转入</a>
              </div>
            </div>
            

            <div class="mining-temp">
              <a href="javascript:;" @click="MiningList">存储挖矿列表</a>
              <a href="javascript:;" @click="Consensus">我的共识</a>
            </div>

          </div>

          <div class="total-mining com">
            <h3>挖矿累计</h3>
            <div class="total-mining-box">
              <van-row type="flex">
                <van-col span="12">
                  <p >0</p>
                  <p >ETXS</p>
                  <p >储存挖矿</p>
                </van-col>
                <van-col span="12">
                  <p >0</p>
                  <p >ETXS</p>
                  <p >共识社团</p>
                </van-col>
              </van-row>
            </div>
          </div>
          
          <div class="mining-detail com">
            <h3>挖矿明细</h3>
            <div class="mining-detail-box">
              <van-tabs v-model="active">
                <van-tab title="储存挖矿">
                  <div class="overcontent">
                    <ul>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                    </ul>
                  </div>
                </van-tab>
                <van-tab title="共识挖矿">
                  <div class="overcontent">
                    <ul>
                      <li>
                        <span>999999999</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                    </ul>
                  </div>
                </van-tab>
                <van-tab title="社团挖矿">
                  <div class="overcontent">
                    <ul>
                      <li>
                        <span>222222222</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                      <li>
                        <span>2019.15.12</span>
                        <p>+4500.0000etxS</p>
                      </li>
                     
                    </ul>
                  </div>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </div>
      </div>

      <div class="layer" v-show="isShow">
        <div class="layer-wrap">
          

          <!-- 抱歉，暂未开放 -->
          <div v-show="isstarMining">
            <h2 class="layer-title">友情提示<i @click="closeLayer"></i></h2>
            <div class="layer-content">
             <p class="no-out">抱歉，暂未开放</p>
             <p class="backBtn"><a @click="closeLayer" href="javascript:;">我知道了</a></p>
            </div>
          </div>
          
          <!-- 存储挖矿列表 -->
          <div v-show="isMiningList">
            <h2 class="layer-title">存储挖矿列表<i @click="closeLayer"></i></h2>
            <div class="layer-content">
              <van-row type="flex" class="cctop">
                <van-col span="6">
                  <p>储存时间</p>
                </van-col>
                <van-col span="6">
                  <p>金额</p>
                </van-col>
                <van-col span="6">
                  <p>昨日挖矿</p>
                </van-col>
                <van-col span="6">
                  <p>状态</p>
                </van-col>
              </van-row>

              <van-row type="flex" class="ccButtom" v-for="(item,i) in miningListDatas" :key="item.id">
             
                <van-col span="6">
                  <p>{{item.ccTime}}</p>
                </van-col>
                <van-col span="6">
                  <p>{{item.money}}</p>
                </van-col>
                <van-col span="6">
                  <p class="yestoday">{{item.yestoday}}</p>
                </van-col>
                <van-col span="6">
                  <p>{{item.status}}</p>
                </van-col>
              </van-row>

            </div>
          </div>
          
          <!-- 共振 -->
          <div v-show="isResonance">
            <h2 class="layer-title">共振<i @click="closeLayer"></i></h2>
            <div class="layer-content gzwrap">
              <p>ETH</p>
              
				<van-loading size="38px" color="#2ac4d2" v-show="isShowETHInfo" vertical />
                <p><img :src="ETHArr.qrCode"></p>
                
             <p class="payCode" ref="copycontent">{{ETHArr.address}}</p>
             <p class="copyAddress"><a href="javascript:;" @click="copyAddressFn()">复制地址</a></p>
            </div>
          </div>
					
          <!-- 共识 -->
          <div v-show="isConsensus">
            <h2 class="layer-title">我的共识<i @click="closeLayer"></i></h2>
            <div class="layer-content">
              <van-row type="flex" class="cctop">
                <van-col span="8">
                  <p>列表</p>
                </van-col>
                <van-col span="8">
                  <p>储存量</p>
                </van-col>
                <van-col span="8">
                  <p>社团储存量</p>
                </van-col>
              </van-row>

              <van-row type="flex" class="ccButtom" v-for="(item,i) in miningListDatas" :key="item.id">             
                <van-col span="8">
                  <p>{{item.ccTime}}</p>
                </van-col>
                <van-col span="8" class="layin">
                  <p>{{item.money}}</p>
                </van-col>
                <van-col span="8">
                  <p class="yestoday">{{item.yestoday}}</p>
                </van-col>
              </van-row>

            </div>
          </div>
          

           <!-- 生态计划 -->
          <div v-show="isEcoPlan" class="ecologyplan">
            <h2 class="layer-title">生态计划<i @click="closeLayer"></i></h2>
            <div class="layer-content">
             <div class="layer-content-rules">
               <p class="">第一期 时间5天 限量1000名，先到为准</p>
               <p>共振兑换比例：1ETH=10000ETXS</p>
               <p class="">第二期 时间5天 限量1000名，先到为准</p>
               <p>共振兑换比例：1ETH=10000ETXS</p>
               <p class="">第三期 时间5天 限量1000名，先到为准</p>
               <p>共振兑换比例：1ETH=10000ETXS</p>
               <p class="">第四期 时间5天 限量1000名，先到为准</p>
               <p>共振兑换比例：1ETH=10000ETXS</p>
               <p class="">第五期 时间5天 限量1000名，先到为准</p>
               <p>共振兑换比例：1ETH=10000ETXS</p>
             </div>
             <div class="introduce">
               <h3>平台介绍</h3>
               <p>这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍,这里是平台介绍。</p>
             </div>
             <div class="introduce">
               <h3>合作单位</h3>
               
               <div class="partner">
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
                 <a href="">合作单位</a>
               </div>
             </div>
            </div>
          </div>

          <!-- 支付 -->
          <div v-show="ispayNow">
            <h2 class="layer-title">支付ETH<i @click="closeLayer"></i></h2>
            <div class="layer-content paymoney-layer">
              <p>支付金额</p>
              <input type="text" value="1ETXS" class="password input" name="">
              <p>密码</p>
              <input type="password" class="password input" name="">
              <p class="copyAddress"><a href="javascript:;">确认转入</a></p>
            </div>
          </div>
          <!-- 立即转入 -->
          <div v-show="ischangeInto">
            <h2 class="layer-title">支付ETXS<i @click="closeLayer"></i></h2>
            <div class="layer-content paymoney-layer">
              <p>支付金额</p>
              <input type="text" v-model="InMoney" class="password input" value="900000ETXS" name="">
              <p>密码</p>
              <input type="password" class="password input" name="">
              <p class="copyAddress"><a href="javascript:;">确认转入</a></p>
            </div>
          </div>

        </div>
      </div>

      
  </div>
</template>

<script>


import Vue from "vue"
import Vant from 'vant';
import 'vant/lib/index.css';
import '../../../static/css/index.css';
Vue.use(Vant);
import Tip from '@/components/layer/Tip'
import { Notify } from 'vant';
import axios from 'axios'
import qss from './../../../node_modules/qs/dist/qs'


//引入Vuex 

Vue.use(Notify);
import { Progress } from 'vant';

Vue.use(Progress);

var miningListDatas=[
    {id:1,ccTime:"2019-12-12",money:"8000ETXS",yestoday:"0ETXS",status:"0/365"},
    {id:2,ccTime:"2019-12-12",money:"7000ETXS",yestoday:"0ETXS",status:"0/365"},
    {id:3,ccTime:"2019-12-12",money:"6000ETXS",yestoday:"0ETXS",status:"4/365"},
    {id:4,ccTime:"2019-12-12",money:"5000ETXS",yestoday:"0ETXS",status:"5555/365"},
    {id:5,ccTime:"2019-12-12",money:"4000ETXS",yestoday:"0ETXS",status:"65/365"},
    {id:6,ccTime:"2019-12-12",money:"3000ETXS",yestoday:"0ETXS",status:"0/365"},
]

import payCode from '../../../static/images/pay.png';

export default {
  name: 'index',
  data () {
    return {
      active: 0,
      isShow:false,
      isConsensus:false,
      isMiningList:false,
      cIsShow:false,
      isResonance:false,
      ResonanceNum:0,
      isEcoPlan:false,
      ispayNow:false,
      ischangeInto:false,
      isstarMining:false,
      miningListDatas:miningListDatas,
      payCode:payCode,
      InMoney:0,
      userInfo:JSON.parse(window.localStorage.getItem("userInfo")),
      resonanceArr:[],
      ETHArr:[],
      ETXSArr:[],
	    isShowETHInfo:true,
      listOfRevenueProductsArr:[],
      // invitationCode:userInfo.data.invitationCode
    }
  },
  computed:{
    percentage:function(){
      return +Number(this.resonanceArr.nowResonance/this.resonanceArr.resonance*100).toFixed(2);
    },
    invitationCode:function(){
      return this.userInfo.data.invitationCode.split('');
    }
    
  },
  watch:{
  },
  methods:{
    closeLayer(){
      this.isShow=false
      this.isConsensus=false;
      this.isMiningList=false;
      this.ispayNow=false;
      this.isResonance=false;
      this.isEcoPlan=false;
      this.ischangeInto=false;
      this.isstarMining=false;
    },
    Consensus(){
      //alert(123)
      ///etxs/myteam  我的共识
      
      // let datas = qss.stringify({ 
      //   token : this.userInfo.data.token, 
      //   username : this.userInfo.data.userName,
      //   type:"TEAM",
      //   page:1
      // });
      //myManagerMoney  我的理财
      ///etxs/myProList  
     

     /* let datas = qss.stringify({ 
        token : this.userInfo.data.token, 
        username : this.userInfo.data.userName,
        num:"2",
        numberPperiods:1,
        password:'zxcvbnm3'
      });*/
      ////etxs/playResonanceQuota参与共振
       let datas = qss.stringify({ 
        token : this.userInfo.data.token, 
        username : this.userInfo.data.userName
      });
      ////etxs/revenueAndCashWithdrawal  收益及提现  好像是累计挖矿
      ///
      axios.post('/etxs/revenueAndCashWithdrawal', datas)
      .then( str =>{
        console.log(str.data)
        if(str.data.code==100){
            //this.resonanceArr=str.data.data.use;

            // console.log(this.resonanceArr)
        }else{
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

      this.isShow=true;
      this.isConsensus=true;
    },
    MiningList(){
      this.isShow=true;
      this.isMiningList=true;
    },
    resonance(){
      this.isShow=true;
      this.isResonance=true;
    },
    copyAddressFn(){
      //复制地址
     // console.log(this.$refs.copycontent.innerHTML)

      const range = document.createRange();
      range.selectNode(this.$refs.copycontent);

      const selection = window.getSelection();
      if(selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      Notify({
        message: "复制成功",
        duration: 1000,
        background: '#2ac4d2'
      });
    },
    EcoPlan(){

      this.isShow=true;
      this.isEcoPlan=true;
    },
    payNow(){

      if(this.ResonanceNum>5 || this.ResonanceNum<1){
        Notify({
          message: "请兑换5个以内的ETH",
          duration: 1000,
          background: '#2ac4d2'
        });
        return false;
      }

      if(this.ResonanceNum>this.ETHArr.balance){
        Notify({
          message: "您的余额不足，请点击右上方'共振'充值",
          duration: 3000,
          background: '#2ac4d2'
        });
        return false;
      }

      this.isShow=true;
      this.ispayNow=true;
    },
    changeInto(val){
      //console.log(val)
      this.InMoney=val+"ETXS";
      this.isShow=true;
      this.ischangeInto=true;
    },
    starMining(){
      this.isShow=true;
      this.isstarMining=true;
    },
    getResonanceQuotaInfo(){


      let datas = qss.stringify({ 
        token : this.userInfo.data.token, 
        username : this.userInfo.data.userName
      });

      //alert(datas);
     // return false;
      axios.post('/etxs/getResonanceQuotaInfo', datas)
      .then( str =>{
        //console.log(str.data)
        if(str.data.code==100){
            this.resonanceArr=str.data.data.use;

           // console.log(this.resonanceArr)
        }else{
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    getFlushCoin(){
       let datas = qss.stringify({ 
        token : this.userInfo.data.token, 
        username : this.userInfo.data.userName
      });
      axios.post('/etxs/flushCoin', datas)
      .then( str =>{
        //console.log(str.data)
        if(str.data.code==100){
			this.isShowETHInfo=false;
          this.ETHArr=str.data.data[0];
          this.ETXSArr=str.data.data[1];
           // this.resonanceArr=str.data.data.use;
          // console.log(this.ETHArr)
        }else{
            Notify({
              message: str.data.message,
              duration: 1000,
              background: '#2ac4d2'
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
	  getlistOfRevenueProducts(){ //获取储存列表
  		let datas = qss.stringify({ 
  		  token : this.userInfo.data.token, 
  		  username : this.userInfo.data.userName
  		});
  		axios.post('/etxs/listOfRevenueProducts', datas)
  		.then( str =>{
  		  //console.log(str.data.data)
  		  if(str.data.code==100){
  					this.listOfRevenueProductsArr=str.data.data;
  		  }else{
  		      Notify({
  		        message: str.data.message,
  		        duration: 1000,
  		        background: '#2ac4d2'
  		      });
  		  }
  		})
  		.catch(function (error) {
  		  console.log(error);
  		});
	  },
        //复制邀请码
    copyInvitationCode(){


      const range = document.createRange();

      range.selectNode(this.$refs.invitationCodeHide);
      const selection = window.getSelection();
      if(selection.rangeCount > 0) {
        selection.removeAllRanges();
      }
      selection.addRange(range);
      document.execCommand('copy');


      Notify({
        message: "复制成功",
        duration: 1000,
        background: '#2ac4d2'
      });
    }

  },
  components: {

  },
  mounted(){
    //copy
    console.log(this.userInfo)

    if(!this.userInfo){
      Notify({
        message: "请登录之后再操作!",
        duration: 1000,
        background: '#2ac4d2'
      });

      var _this=this;
      setTimeout(function(){
        _this.$router.push({ path: '/login' })
      },1300);
    }

   // console.log(this.userInfo.data.token)
    //获取共振计划
    this.getResonanceQuotaInfo();

    //获取币种
    this.getFlushCoin();
  	//获取储存列表
  	this.getlistOfRevenueProducts();


    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.van-loading--vertical{
	display: inline;;
}
</style>
