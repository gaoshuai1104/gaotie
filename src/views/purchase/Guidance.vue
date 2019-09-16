<template>
    <div class="bg">
      <safetyside></safetyside>
        <el-col :span="8">
    <!-- <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入起点"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete> -->
    </el-col>
<div class="inp">
  <el-col :span="8">
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入到达地点"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</div>
  
  <el-button type="info" icon="el-icon-search">搜索</el-button>

<div class="im">
<img src="../../../static/xq.png" alt="">
</div>
    </div>
</template>
<script>
import safetyside from '../../components/safetyside/index'
export default {
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    components:{
      safetyside,
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "A栋123"},
          { "value": "B栋456"},
          { "value": "C栋789"},
          { "value": "D栋123"},
          { "value": "E栋345",},
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
<style lang="less" scoped>
    .bg{
        font-size: 50px;
        margin-top: 50px;
    }
    .im{
      margin-top: 30px;
      margin-left: 5%;
      img{
        height: 600px;
      }
    }
    .inp{
      margin-left: 30%;
    }
</style>