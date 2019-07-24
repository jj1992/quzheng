<!-- 表格分页组件 -->
<template>
  <div v-bind:id="classObject" :style="{width: '220px', height: '28px'}" class="progress-bar">
      <div class="progress-bar__outer" style="height: 100%;">
          <div ref="bar_inner" class="progress-bar__inner" >
            </div>
            <div class="progress-bar__innerText">{{current}}/{{max}}</div>
        </div>
    </div>
</template>

<script>
export default {
    // el: this.classObject,
    props: {
       max: {
            type:String,
            default:'8192MB'
           
        },
        current:{
            type:String,
            default:'1024MB'
        },
        id:{
            type:String
        }
       
    },
    computed: {
        classObject: function () {
               return "myProgress"+this.id;
        }
  },
    data () {
        return {
            defaultSeries:{},
        }
    },
    mounted(){
       this.drawLine();
   },
    methods: {
        drawLine(){
        //   let myProgress=document.geztElementById("myProgress"+this.id);
          let porgress=parseInt(this.current)/parseInt(this.max)*100;
            this.$refs.bar_inner.style.width=porgress+"%";
            if(porgress<=50){
                this.$refs.bar_inner.classList.add("bg1");
            }else{
                porgress<=80?this.$refs.bar_inner.classList.add("bg2"):this.$refs.bar_inner.classList.add("bg3");
            }
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

.progress-bar {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
}
.progress-bar__outer {
    height: 6px;
    background-color: #ebeef5;
    overflow: hidden;
    position: relative;
    text-align: center;
    vertical-align: middle;
}
.bg1{
     background-color: #409eff;
}
.bg2{
     background-color: #f7f309;
}
.bg3{
     background-color: #fa0303;
}

.progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    text-align: right;
    line-height: 1;
    white-space: nowrap;
    transition: width .6s ease;
}
.progress-bar__innerText {
    display: inline-block;
    vertical-align: middle;
    color: #000;
    font-size: 12px;
    height: 100%;
    width:100%;
    position: absolute;
    line-height: 28px;
    left: 0px;
    top: 0;
}
.progress--text-inside .progress-bar {
    padding-right: 0;
    margin-right: 0;
}

</style>