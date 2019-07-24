<!-- 折线图组件 -->
<template>
  <div v-bind:id="classObject" :style="{width: '300px', height: '60px',marginLeft:'20%'}"></div>
</template>

<script>
// import Echarts  from 'echarts'
var echarts = require('echarts')
export default {
    props: {
       data: {
            type: Array,
            default: function () {
                return []
            }
        },
        id:{
            type:Number
        },
        smooth:{
            type:Boolean,
            default:false
        },
        name:{
            type:String,
            default: ''
        }
    },
    computed: {
        classObject: function () {
               return "myChart"+this.id;
        }
  },
    data () {
        return {
            defaultSeries:{},
            default1Series:{    
                name:this.name,
                type:'line',
                // symbol:'none',  //是否去点
                smooth:true,
                itemStyle: {
                    normal: { 
                        color:'#0E8AFF',
                        areaStyle: {color: '#87C3E3'  },
                        lineStyle:{  color:'#0E8AFF'   }  
                    }
                },
                data:[10, 422, 21, 54, 260, 530, 10]
            },
            default2Series:{    
                name:this.name,
                type:'line',
                // symbol:'none',  //是否去点
                smooth:false,
                itemStyle: {
                    normal: { 
                        color:'#0E8AFF',
                        lineStyle:{  color:'#0E8AFF'   }  
                    }
                },
                data:[10, 422, 21, 54, 260, 530, 10]
            }

            
        }
    },
    mounted(){
    this.drawLine();
   },
    methods: {
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'+this.id))
        if(this.smooth){
            this.defaultSeries=this.default1Series;
        }else{
            this.defaultSeries=this.default2Series;
        }
        // 绘制图表
        myChart.setOption({
                    tooltip : {
                        trigger: 'axis'
                    },
                    xAxis : [
                        {
                            show:false,
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            show:false,
                            type : 'value'
                        }
                    ],
                    series : [
                        this.defaultSeries
                    ]
                });
        }
    },
    ready () {
    },
    watch: {
    },
    events: {
    }
}
</script>

<style scoped>
</style>