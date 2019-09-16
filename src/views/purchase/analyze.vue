<template>
  <div>
    <safetyside></safetyside>
    <div id="chart_example">
    </div>
    <span class="foot">近六个月内异情数量</span>
      <div class="pie">
        <div id="pie1">

            <div id="main1" style="float:right;width:500px;height: 300px"></div>
        </div>
        <div id="pie2">
            <div id="main2" style="float:right;"></div>
        </div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import safetyside from "../../components/safetyside/index"
  export default {
    data() {
      return {}
    },
    components:{
      safetyside
    },
    mounted() {
      this.initData();
      let this_ = this;
      let myChart = echarts.init(document.getElementById('chart_example'));
      let option = {
        color: ['#f44'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {
            type : 'shadow'
          }
        },
        xAxis : [
          {
            type : 'category',
            data : ['4月','5月','6月','7月','8月','9月'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'每月异情',
            type:'bar',
            barWidth: '60%',
            data:[123,99,70,51,43,20]
          }
        ]
      };
      myChart.setOption(option);
 
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods:{
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'));
      // 绘制图表
      myChart.setOption({
          title : {
              text: '本月异情类型分布',//主标题
              subtext: '纯属虚构',//副标题
              x:'center',//x轴方向对齐方式
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              bottom: 'bottom',
              data: ['误入管控区域','跟随报警','X报警','XX警报','XXXX警报']
          },
          series : [
              {
                  name: '异情类型',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:15, name:'误入管控区域'},
                      {value:7, name:'跟随报警'},
                      {value:4, name:'X报警'},
                      {value:8, name:'XX警报'},
                      {value:9, name:'XXXX警报'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      });
    },
  },
    watch: {},
    created() {
 
    }
  }
</script>
<style lang="less" scoped>
  #chart_example{
    width: 40%;
    height: 400px;
    border: 1px solid red;
    margin-left: 120px;
  }
  .pie{
    width: 300px;
    height: 400px;
    position: absolute;
    right: 100px;
    top: 200px;
  }
  .foot{
    display: block;
    float: left;
    margin-top: 10px;
    margin-left: 220px;
  }
  .inp{
    margin-top: 40px;
    .input{
      width: 40%;
      margin-left: 6%;
    }
    .fl{
      float: left;
    }
    .but{
      margin-top: 20px;
    }
  }
</style>