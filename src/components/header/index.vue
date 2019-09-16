<template>
  <div class="head">
    <div id="logo">
    <img class="pty" @click="$router.push({path:'Admission'})" src="../../../static/logo-aiFM.png" alt="">
     <h3 @click="$router.push({path:'/'})"> Longout </h3>
     </div>
   <el-menu
  :default-active="$route.path"
    id="bg-top"
    router
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="rgb(84, 92, 100)"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
    <template slot="title"><i class="el-icon-s-cooperation"></i>平安住区</template>
    <el-menu-item index="/Admission">智慧门禁</el-menu-item>
    <el-menu-item index="/Security">安防监控</el-menu-item>
    <el-menu-item index="/analyze">异情分析</el-menu-item>
    <el-menu-item index="/Guidance">小区导引</el-menu-item>
    <el-menu-item index="">应急模拟</el-menu-item>
    </el-submenu>
      <el-submenu index="2">
    <template slot="title"><i class="el-icon-s-cooperation" @click="$router.push({ path:'Admission'})"></i>贵宾支持</template>
    <el-menu-item index="Arrive">到达提醒</el-menu-item>
    <el-menu-item index="">主动服务</el-menu-item>
    </el-submenu>
    
          <el-submenu index="3">
    <template slot="title"><i class="el-icon-s-cooperation"></i>绿色住区</template>
    <el-menu-item index="">垃圾管理</el-menu-item>
    <el-menu-item index="">绿植管理</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
    <template slot="title"><i class="el-icon-s-cooperation"></i>资产管理</template>
    <el-menu-item index="">物业资产台账</el-menu-item>
    <el-menu-item index="">资产卡片</el-menu-item>
    <el-menu-item index="">资产空间分布</el-menu-item>
    <el-menu-item index="">资产查询盘点</el-menu-item>
    <el-menu-item index="">资产关联影响</el-menu-item>
    <el-menu-item index="">资产预算管理</el-menu-item>
    <el-menu-item index="">资产成本分析</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
    <template slot="title"><i class="el-icon-s-cooperation"></i>设备运维</template>
    <el-menu-item index="">设备状态指标</el-menu-item>
    <el-menu-item index="">故障维修</el-menu-item>
    <el-menu-item index="">计划性维护</el-menu-item>
    <el-menu-item index="">预防性维护</el-menu-item>
    <el-menu-item index="">设备维护电子档案</el-menu-item>
    <el-menu-item index="">运维费用统计</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
    <template slot="title"><i class="el-icon-s-cooperation"></i>空间管理</template>
    <el-menu-item index="">空间创收</el-menu-item>
    <el-menu-item index="">空间清册</el-menu-item>
    <el-menu-item index="">空间查询</el-menu-item>
    <el-menu-item index="">空间占用</el-menu-item>
    <el-menu-item index="">费用分摊</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      dayjs,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      if (keyPath == 1) {
        this.$router.push({ name: "Apply" });
      }
      // if (key == 2) {
      //   this.$router.push({ name: "property" });
      // }
      if (key == 3) {
        this.$router.push({ name: "Admission" });
      }
      // if (key == 4) {
      //   this.$router.push({ name: "equipment" });
      // }
      // if (key == 5) {
      //   this.$router.push({ name: "greenshcoll" });
      // }
      // if (key == 6) {
      //   this.$router.push({ name: "stop" });
      // }
      // if (key == 7) {
      //   this.$router.push({ name: "work" });
      // }
    }
    // rout(index){
    //   if(index==1){
    //     this.$router.push({ name: "home" });
    //   }
    // }
  }
};
</script>
<style lang="less">
.head{
  height: 60px;
  width: 100%;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
#bg-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 80px;
  top: 0;
  width: 80%;
  left: 10%;
  z-index: 10;
  color: #8791a2;
  background: #0a2549;
}
#logo{
  position: fixed;
  top:0;
  background-color: rgb(84, 92, 100);
  z-index: 10;
  width: 100%;
  height: 80px;
  h3{
    float: right;
    margin-right: 60px;
    line-height: 40px;
  }
}
.pty{
  float: left;
  margin: 30px;
}
.righ{
  z-index: 11;
  float: right;
  margin: 30px;
  margin-right: 60px;
}
.time{
  line-height: 40px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.rou{
  height: 60px;
}

</style>
<style>
.el-menu--horizontal{
  border: none !important;
}
</style>
