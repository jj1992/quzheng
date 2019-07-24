import Vue from 'vue';

//日期
Vue.filter("mydate",(value,p)=>{
	var d=new Date(value);
	return d.getFullYear()+'-'+(d.getMonth()+1)+"-"+d.getDate();
})

//状态
Vue.filter("status",(val,p)=>{
	if(val === 0){
        return '运行中'
    }else if(val === 9){
        return '故障'
    }
})