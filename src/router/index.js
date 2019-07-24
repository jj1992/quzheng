import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
       
  {
      path: '/',
      redirect: '/equipmentInfo'
  },
  {
      path:'/topologyInfo',
      component: resolve => require(['../components/page/TopologyInfo.vue'], resolve),
      meta: { title: '拓扑图管理' }
  },
  {
    path:'/test',
    component: resolve => require(['../components/common/echartsLine.vue'], resolve),
    meta: { title: 'echarts' }
  },
  {
    path:'/test1',
    component: resolve => require(['../components/common/progress.vue'], resolve),
    meta: { title: 'progress' }
  },  
  {
      path:'/equipmentInfo',
      component: resolve => require(['../components/page/EquipmentInfo.vue'], resolve),
      meta: { title: '设备管理' }
  },
  {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
          {
              path: '/',
              redirect: '/basicEquipmentInfo'
          },
          {
              path: '/basicEquipmentInfo',
              component: resolve => require(['../components/page/BasicEquipmentInfo.vue'], resolve),
              meta: { title: '设备基本信息' }
          },
          {
              path: '/assetInfo',
              component: resolve => require(['../components/page/AssetInfo.vue'], resolve),
              meta: { title: '资产信息' }
          }
          ,
          {
              path: '/attachmentInfo',
              component: resolve => require(['../components/page/AttachmentInfo.vue'], resolve),
              meta: { title: '附件信息' }
          },
          {
              path: '/networkMonitoringInfo',
              component: resolve => require(['../components/page/NetworkMonitoringInfo.vue'], resolve),
              meta: { title: '网络监听信息' }
          },
          {
              path: '/CPU',
              component: resolve => require(['../components/page/CPU.vue'], resolve),
              meta: { title: 'CPU' }
          },
          {
              // 内存和磁盘
              path: '/memoryAndDisk',
              component: resolve => require(['../components/page/MemoryAndDisk.vue'], resolve),
              meta: { title: '内存和磁盘' }
          },
          {
              // 进程
              path: '/process',
              component: resolve => require(['../components/page/Process.vue'], resolve),
              meta: { title: '进程' }    
          },
          {
              // 网口
              path: '/usb',
              component: resolve => require(['../components/page/USB.vue'], resolve),
              meta: { title: '网口' }   
          },
          // {
          //     // vue-schart组件
          //     path: '/charts',
          //     component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
          //     meta: { title: 'schart图表' }
          // },
          // {
          //     // 拖拽列表组件
          //     path: '/drag',
          //     component: resolve => require(['../components/page/DragList.vue'], resolve),
          //     meta: { title: '拖拽列表' }
          // },
          // {
          //     // 权限页面
          //     path: '/permission',
          //     component: resolve => require(['../components/page/Permission.vue'], resolve),
          //     meta: { title: '权限测试', permission: true }
          // }
      ]
  },
  // {
  //     path: '/login',
  //     component: resolve => require(['../components/page/Login.vue'], resolve)
  // },
  {
      path: '/404',
      component: resolve => require(['../components/page/404.vue'], resolve)
  },
  {
      path: '/403',
      component: resolve => require(['../components/page/403.vue'], resolve)
  }
//   ,
//   {
//       path: '*',
//       redirect: '/404'
//   }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
