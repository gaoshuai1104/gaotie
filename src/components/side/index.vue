<template>
  <div class="bgc">
   <el-row class="tac">
  <el-col>
    <el-menu
    :default-active="$route.path" router
    :collapse-transition=false
      class="el-menu-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
           <el-menu-item index="Arrive">
        <i class="el-icon-menu"></i>
        <span slot="title">到达提醒</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-menu"></i>
        <span slot="title">主动服务</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>
<style lang='less' scoped>
.bgc {
  position: fixed;
      top: 80px;
      bottom: 0;
      left: 0;
      width: 20%;
      background: #545c64;     // transition: width 10s;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }

::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}
.butt{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
}
}
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background: #545c64;
}
.el-menu {
  border: none;
  background: #545c64;
  height: 100%;
  overflow-y: auto;
}
.el-menu-item,
.el-submenu__title {
  color: #868e96;
}
</style>