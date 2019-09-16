<template>
  <div class="home">
    <div class="left">
      <img src="../../../static/bg.jpg" class="bg"/>
      <img src="../../../static/zhui.png" class="zhui">
    </div>
    <div class="right">
      <div class="border"></div>
      <h2>登录</h2>
      <!-- <span>BIM.FM运营管理平台</span> -->
      <div class="user">
        <span>账号</span> <div><el-input placeholder="" v-model="username" clearable></el-input></div>
        <span>密码</span> <div><el-input placeholder="" v-model="passwored" show-password></el-input></div>
      </div>
       
      <div class="checked">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </div>
      <button @click="lond" class="but" >登录</button>
      </div>
      <!-- <span>@Arcplus Surbana Jurong Digital Ltd</span> -->
  </div>
</template>

<script>
import {getUserInfo} from '../../api/loading/index'
import { format } from 'path';
const axios = require('axios');
export default {
  data() {
    return {
      username: "",
      passwored: "",
      checked: true,
      token:''
    };
  },
  // name: 'home',
  // components: {
  // },
  mounted(){
    this.getUserInfo()
  },
  methods: {
    lond() {
      this.$router.push({ name: "Admission" });
    },
      getUserInfo(){
          axios.get('http://49.235.155.249:8081/record')
  .then(function (res) {
        this.token==res.token
        console.log(token);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }
  }
};
</script>
<style lang="less" scoped>
.left {
  .bg {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .zhui{
    position: fixed;
    top: 25%;
    left: 20%;
    width: 300px;
    height: 300px;
    z-index: 2;
  }
}
.right {
  z-index: 2;
  position: fixed;
  width: 200px;
  height: 40%;
  top: 23%;
  right: 100px;
  padding: 20px;
  border: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: rgba(84,123,169,0.5);
  // 控制边框透明
  background-clip: padding-box;
  background-color: #fff;
    h2{
  color: #6C6763;
  font-weight: 400;
  text-align: center;
    }

  .user{
    span{
      float: left;
      line-height: 42px;
    }
    div{
      display: inline-block;
      width: 140px;
      margin-bottom: 5px;
    }
  }
  .checked{
    position: absolute;
    left: 68px;
  }
  .but{
    margin-top: 30px;
    width: 140px;
    height: 40px;
    background-color:#66b1ff;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    color: #fff;
    margin-left: 30px;
  }
  .border{
    position: fixed;
    width: 184px;
    height: 38%;
    top: 24%;
    right: 108px;
    padding: 20px;
    border: 10px;
    border-style: solid;
    border-radius: 10px;
    border-color:#fff;
    z-index: -1;
  }
}
</style>
