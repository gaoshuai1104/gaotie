<template>
    <div class="bg">
        <side></side>
         <main class="fr">
            <div>
                <h4>贵宾信息录入</h4>
                <div><el-button type="primary" plain>证件扫描</el-button></div>
            </div>
        </main>
        <main class="fl">
            <div>
                <h4>贵宾信息</h4>
                <ul>
                <li>姓名:XXX</li>
                <li>性别：男</li>
                <li>证件类型:身份证</li>
                <li>证件号：311321XXXXXXXXXX</li>
                <li>被访人：XXX</li>
                </ul>

                <el-button type="success" plain>通知住户</el-button>
            </div>
            <div class="num">
                <h4>距当前</h4>
                <div class="xs">100m</div>
                请提前做好相应准备!
            </div>
        </main>
    </div>
</template>
<script>
import side from '../../components/side/index'
export default {
    data() {
        return {
            
        }
    },
    components:{
        side,
    }
}
</script>
<style lang="less" scoped>
    .bg{
margin-top: 80px;
    }
    .fl{
        float: left;
        margin-left: 120px;
        li{
            list-style-type: none;
            text-align: left;
            line-height: 40px;
        }
    }
    .fr{
        float: right;
        margin-right: 100px;
    }
    .num{
        position: absolute;
        top: 28%;
        left: 50%;
    }
    .xs{
        width: 80px;
        height: 80px;
        background: #50bfff;
        margin-left: 35px;
        font-size: 30px;
        line-height: 80px;
        margin-bottom: 30px;
    }
</style>