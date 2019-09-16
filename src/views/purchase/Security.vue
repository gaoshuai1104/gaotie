<template>
<div class="af">
  <safetyside></safetyside>
  <div class="con">
  <el-container>
    <main class="color green" @click="rou">
      <h3>外来人数</h3>
      <div>
        <ul>
          <li>今日汇总：189</li>
          <li>实时在园：76</li>
          <li>已离园区：113</li>
        </ul>
      </div>
    </main>
    <el-main class="color green">
      <h3>设施监测</h3>
      <div class="row">
      <el-row>
                <el-col :span="8">定位基站 :</el-col>
                <el-col :span="4">6</el-col>
                <el-col :span="4">正常</el-col>
      </el-row>  
      </div>
      <div class="row">
        <el-row>
        <el-col :span="8">RFID卡 : </el-col>
                <el-col :span="4">100</el-col>
                <el-col :span="4">正常</el-col>
      </el-row>
      </div>
    </el-main>
    <el-main class="color red">
      <h3>异常时段</h3>
              <el-row>
        <el-col :span="24">8:00~9:00 </el-col>
      </el-row>
                    <el-row>
        <el-col :span="24">12:00~13:00</el-col>
      </el-row>
                    <el-row>
        <el-col :span="24">17:00~18:00 </el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>

 <div class="bon">
  <el-container>
    <el-main class="color red">
      <h3>误入管控区域</h3>
      <ul>
        <li>总异常：19</li>
        <li>已处理：17</li>
        <li>未处理：2</li>
      </ul>
    </el-main>
    <el-main class="color red">
      <h3>跟随进入</h3>
      <ul>
        <li>总异常：8</li>
        <li>已处理：8</li>
        <li>未处理：0</li>
      </ul>
    </el-main>
    <el-main class="color red">
      <h3>逗留时间异常</h3>
        <ul>
        <li>总异常：10</li>
        <li>已处理：8</li>
        <li>未处理：2</li>
        </ul>
    </el-main>
  </el-container>
  </div>


</div>
</template>
<script>
import safetyside from '../../components/safetyside/index'
export default {
    data() {
      return {
        
      }
    },
    methods :{
      rou (){
          this.$router.push({name: 'list'})
      }
    },
    components:{
      safetyside
    }
}
</script>
<style lang="less" scoped>
    .bg{
        font-size: 50px;
    }
    .af{
      margin-top: 50px;
    }
    .con{
      margin-left: 100px;
      margin-bottom: 30px;
    }
    .color{
      margin-right: 10px;
    }
    .green{
      width: 20%;
      border: 4px solid green;
      border-radius: 8px;
    }
    .red{
      border: 4px solid red;
      border-radius: 8px;
    }
    .row{
     padding-left: 80px;
    }
    li{
      list-style-type: none;
      text-align: center;
    }
    .bon{
      margin-left: 100px;
    }
</style>
<style>
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
#lh {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 300px;
    height: 100%;
  }
  
  body > .el-container {
    margin-top: 100px;
    line-height: 50px;
  }
</style>