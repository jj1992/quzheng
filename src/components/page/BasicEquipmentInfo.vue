<template>
    <div>
        <el-row :gutter="20">
            <!-- 基本详情 -->
            <el-col :span="24">
                <el-row>
                    <el-col>
                        <el-card shadow="hover">
                            <div slot="header" class="clearfix">
                                <i class="el-icon-tickets" style="color:rgb(32, 160, 255)"></i>
                                <span style="font-weight:bold;font-size:14px;">基本详情</span>
                            </div>
                            <div>
                                <p><span class="tit">设备名称：</span><span class="con">定时接口备份服务器</span></p>
                                <p><span class="tit">监控IP：</span><span class="con">61.149.43.1</span></p>
                                <p><span class="tit">设备描述：</span><span class="con">Linux wang1010q 4.4.0-130-generic #156-Ubuntu SMP Thu Jun 14 08:53:28 UTC 2018 x86_64</span></p>
                                <p><span class="tit">uptime system：</span><span class="con">11days,20:13:07:37</span></p>
                                <p><span class="tit">sysServuces：</span><span class="con">72</span></p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <!-- 设备连接信息 -->
            <el-col :span="24">
                <el-row  class="mgb20">
                    <el-col>
                        <el-card shadow="hover">
                            <div slot="header" class="clearfix">
                                <i class="el-icon-document" style="color:#03C482"></i>
                                <span style="font-weight:bold;font-size:14px;">设备连接信息</span>
                            </div>
                            <div>
                                <p><span class="tit">连接方式：</span><span class="con">SNMP</span></p>
                                <p><span class="tit">SNMP版本：</span><span class="con">v2</span></p>
                                <p><span class="tit">SNMP团体名：</span><span class="con">******</span></p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <!-- 应用基本状态信息 -->
            <el-col :span="24">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="24">
                        <el-card shadow="hover">
                            <div slot="header" class="clearfix">
                                <i class="el-icon-menu" style="color:red"></i>
                                <span style="font-weight:bold;font-size:14px;display:inline-block;width:11%;">应用基本状态信息</span>
                                <div style="display:inline-block;;width:86%;text-align:right;">
                                    <div style="display:inline-block;">
                                        <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                 <el-col :span="5">
                                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                                        <div class="grid-content grid-con-1">
                                            <i class="el-icon-view grid-con-icon"></i>
                                            <div class="grid-cont-right">
                                                <div class="grid-num">正常</div>
                                                <div>MySQL</div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="5">
                                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                                        <div class="grid-content grid-con-2">
                                            <i class="el-icon-message grid-con-icon"></i>
                                            <div class="grid-cont-right">
                                                <div class="grid-num">正常</div>
                                                <div>NGINX</div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="5">
                                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                                        <div class="grid-content grid-con-3">
                                            <i class="el-icon-goods grid-con-icon"></i>
                                            <div class="grid-cont-right">
                                                <div class="grid-num">危险</div>
                                                <div>MySQL</div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="5">
                                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                                        <div class="grid-content grid-con-4">
                                            <i class="el-icon-message grid-con-icon"></i>
                                            <div class="grid-cont-right">
                                                <div class="grid-num">正常</div>
                                                <div>MySQL</div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="4">
                                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                                        <div class="grid-content grid-con-5">
                                            <i class="el-icon-goods grid-con-icon"></i>
                                            <div class="grid-cont-right">
                                                <div class="grid-num">正常</div>
                                                <div>MySQL</div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                methods: {
                    postData(){
                        this.$axios.post('/').then((res)=>{
                            
                        })
                    }
                },
            }
        },
        computed: {
            // role() {
            //     // return this.name === 'wbsm' ? '超级管理员' : '普通用户';
            //     return this.name === 'wbsm' ? '被降维打击的三体圆' : '面壁者罗杰';
            // }
        }
    }

</script>


<style scoped>
    .tit{
        font-size: 14px;
        color:rgb(105, 96, 96);
        display:inline-block;
        width: 110px;
        text-align: right;
        margin:10px;
    }
    .con{
        font-size: 14px;
        margin-left:10px;
    }
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
        border:1px solid #eee;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size:30px;
        width:50px;
        height:50px;
        text-align: center;
        line-height:50px;
        color: #fff;
        border-radius: 50%;
        margin-left: 20px;
    }

    .grid-con-1 .grid-con-icon {
        background:rgb(27, 190, 100);
    }

    .grid-con-1 .grid-num {
        color: rgb(27, 190, 100);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(27, 190, 100);
    }

    .grid-con-2 .grid-num {
        color: rgb(27, 190, 100);
    }
    .grid-con-4 .grid-con-icon {
        background: rgb(27, 190, 100);
    }

    .grid-con-4 .grid-num {
        color: rgb(27, 190, 100);
    }
    .grid-con-5 .grid-con-icon {
        background: rgb(27, 190, 100);
    }

    .grid-con-5 .grid-num {
        color: rgb(27, 190, 100);
    }

    .grid-con-3 .grid-con-icon {
        background: red;
    }

    .grid-con-3 .grid-num {
        color: red
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

</style>
