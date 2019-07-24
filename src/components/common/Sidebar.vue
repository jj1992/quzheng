<template>
    <div class="sidebar">
        <div class="goBack" @click='prev'>
            <i class="el-icon-arrow-left" style="color:#000"></i>
            返回
        </div>
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#FFF"
            text-color="#000000" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    // {
                    //     title: '返回'
                    // },
                    {
                        // icon: 'el-icon-setting',
                        index: 'basicEquipmentInfo',
                        title: '设备基本信息'
                    },
                    {
                        // icon: 'el-icon-setting',
                        index: 'assetInfo',
                        title: '资产信息'
                    },
                    {
                        // icon: 'el-icon-tickets',
                        index: 'attachmentInfo',
                        title: '附件信息'
                    },
                    {
                        // icon: 'el-icon-message',
                        index: 'networkMonitoringInfo',
                        title: '网络监听信息'
                    },
                    {
                        // icon: 'el-icon-star-on',
                        index: 'CPU',
                        title: 'CPU'
                    },
                    {
                        // icon: 'el-icon-rank',
                        index: 'memoryAndDisk',
                        title: '内存和磁盘'
                    },
                    {
                        // icon: 'el-icon-warning',
                        index: 'process',
                        title: '进程'
                    },
                    {
                        // icon: 'el-icon-error',
                        index: 'usb',
                        title: '网口'
                    },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单相关',
                    //     subs: [
                    //         {
                    //             index: 'form',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'editor',
                    //             title: '富文本编辑器'
                    //         },
                    //         {
                    //             index: 'markdown',
                    //             title: 'markdown编辑器'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        },
        methods: {
            prev(){
                this.$router.push('/equipmentInfo')
            }
        },
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom:0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }
    .goBack{
         height:50px;
         line-height:50px;
         padding-left:30px;
         font-size:14px;
         font-weight:bold;
    }
    .goBack:hover{
        background: #ccc;
    }
</style>
