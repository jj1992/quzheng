<template class='body'>
<div style="background:#F1F2F4;position:relative;height:100%;overflow-y:auto;">
  <div style="margin:0 10px 10px">
    <el-row :gutter="20">
        <!-- 服务器详情 -->
        <el-col :span="24">
            <el-row>
                <el-col>
                    <el-card shadow="hover">
                        <div slot="header" class="clearfix">
                            <i class="el-icon-tickets" style="color:rgb(32, 160, 255)"></i>
                            <span style="font-weight:bold;font-size:14px;">服务器详情</span>
                        </div>
                        <div>
                            <span style="display:inline-block;width:310px;margin:0 40px;">
                                <span style="display:inline-block;font-size:14px;margin-right:10px;"> 规则编码</span> 
                                <el-input type="text" size='mini' v-model="input" placeholder="请输入" style="width:240px;"></el-input>
                            </span>
                            <span style="display:inline-block;width:310px;">
                                <span style="display:inline-block;font-size:14px;margin-right:10px;"> 状态</span> 
                                <el-select v-model="value" placeholder="请选择" size='mini' style="width:240px;">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                  </el-option>
                                </el-select>
                            </span>
                            <span style="display:inline-block;margin-left:10px;">
                                <el-button size="mini" type="primary">取消</el-button>
                                <el-button size="mini" type="primary" style="margin-left:20px;">查询</el-button>
                                <el-button @click="changeArrow" style="margin-left:20px;" type="text" >展开<i :class="flag === true ? 'el-icon-arrow-up el-icon--right' : 'el-icon-arrow-down el-icon--right'"></i></el-button>
                            </span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
  </div>
  <div style="margin:0 10px;height:84%;">
    <div style="background:#fff;padding:8px;float:left;width:99%;">
      <span style="display:inline-block;">
        <el-button size="mini" icon="el-icon-plus" type="success" @click="newData">新建</el-button>
         <el-button size="mini" icon="el-icon-circle-plus-outline" type="warning">批量操作</el-button>
          <el-button size="mini" type="warning" @click="changeArrow2">更多操作<i :class="flag2 === true ? 'el-icon-arrow-up el-icon--right' : 'el-icon-arrow-down el-icon--right'"></i></el-button>
      </span>
      <span style="display:inline-block;float:right;">
        <el-button size="mini" icon="el-icon-download" type="primary">下载</el-button>
        <el-button size="mini" icon="el-icon-menu" type="primary">自定义列</el-button>
      </span>
    </div>
  <el-table
    ref="multipleTable"
     :data="tableData"
    tooltip-effect="dark"
    style="width:100%"
    height="80%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="设备名称"
      prop="name"
      width="350">
      <template slot-scope="scope">{{scope.row.name}}</template>
    </el-table-column>
    <el-table-column
      prop="history"
      label="历史曲线"
      show-overflow-tooltip>
      <template slot-scope="scope"><echartsLine ref="echarts" :id="scope.row.id" :smooth="true" ></echartsLine></template>
    </el-table-column>
    <el-table-column
      prop="ip"
      label="ip地址"
      width="150">
    </el-table-column>
    <el-table-column
      prop="operStatus"
      label="状态"
      width="50">
      <template slot-scope="scope">{{scope.row.operStatus|status}}</template>
    </el-table-column>
     <el-table-column
      prop="createTime"
      label="更新时间"
      width="180">
     <template slot-scope="scope">{{scope.row.createTime|mydate}}</template>
    </el-table-column>
   <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <div slot-scope="scope">
        <el-button type="text" size="small" @click="configure(scope.row.id)">配置</el-button>
        <el-button type="text" size="small" @click="deleteRow(scope.row.id)" style="color:red">删除</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row.id)">详情</el-button>
      </div>
    </el-table-column>
  </el-table>
  <el-pagination class="fy"
      @size-change='handleSizeChange'
      layout="total, prev, pager, next, jumper"
      @current-change="currentChange"
      :page-size="plusPageSize"
      :total="total"
      background>
  </el-pagination>
  </div>

  <!-- 新建弹框 -->
    <div class="mark" v-if="show">
    <div  class="newBox">
        <transition name="el-zoom-in-top">
          <div  class="transition-box">
              <!-- 顶部 -->
              <div style="width:100%;height:30px;background:#35464E;color:#fff;line-height:30px;font-size:12px;">
                <span style="float:left;margin-left:10px;">新建</span>
                <span style="float:right;margin-right:10px;cursor: pointer;">
                  <!-- <i class="el-icon-upload el-icon--right" @click="enlarge"></i> -->
                  <i @click='close'>x</i>
                </span>
              </div>
              <!-- 中间 -->
              <div style='background:#fff;color:#000;font-size:12px;'>
                <p class="new" style="padding-top:10px;">
                  <span class="tit">选择模板:</span>
                  <el-select size='mini' v-model="mouldId" placeholder="请选择" style="width:70%;" @change='selectMould'>
                    <el-option
                      v-for="item in mould"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </p>
                <p class="new">
                  <span class="tit">所属部门:</span>
                  <el-select size='mini' v-model="value2" placeholder="请选择" style="width:70%;">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </p>
                <p class="new">
                  <span class="tit">主机名称:</span>
                  <el-input size="mini" v-model="hostname" placeholder="请输入主机名称" style="width:70%;"></el-input>
                </p>
                <p class="new">
                  <span class="tit">主机IP:</span>
                  <el-input size="mini" v-model="IPAddress" placeholder="请输入IP地址" style="width:70%;"></el-input>
                </p>
                <p class="new" v-for="(item,index) in changeTag" :key="item.id">
                  <span class="tit">{{item.configName}}:</span>
                  <el-input v-if="item.configKey != 'basic-password'" v-model="changeTagVal[index].key"  size="mini"  placeholder="" style="width:70%;"></el-input>
                  <el-input v-else placeholder="请输入密码" v-model="changeTagVal[index].key" size="mini" show-password style="width:70%;"></el-input>
                </p>


                <div  class="new" style="margin-bottom:20px;">
                    <span class="tit tit1">选择基本监控项:</span>
                    <div v-if="this.basicMonitors.length <= 0" style="display:inline-block;text-align:left;width:70%;">暂无数据</div>
                    <div v-else style="display:inline-block;text-align:left;width:70%;">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedMonitors" @change="handleCheckedMonitorsChange">
                          <el-checkbox v-for="monitor in basicMonitors" :label="monitor" :key="monitor" style="width:40%;">{{monitor.name}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div  class="new" style="padding-bottom:20px;">
                    <span class="tit tit1">选择高级监控项:</span>
                    <div v-if="this.advancedMonitors.length <= 0" style="display:inline-block;text-align:left;width:70%;">暂无数据</div>
                    <div v-else style="display:inline-block;text-align:left;width:70%;">
                        <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedMonitors2" @change="handleCheckedMonitorsChange2">
                          <el-checkbox v-for="monitor2 in advancedMonitors" :label="monitor2" :key="monitor2" style="width:40%;">{{monitor2.name}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <!-- 底部 -->
                <div style="line-height:50px;background:#E6E6E6;">
                    <el-button size="mini" type="primary" @click="saveData">保存</el-button>
                    <el-button size="mini" @click='resetting'>重置</el-button>
                </div>
              </div>
          </div>
      </transition>
    </div>
    </div>


      <!-- 配置弹框 -->
    <div class="mark" v-if="show1">
    <div  class="newBox">
        <transition name="el-zoom-in-top">
          <div  class="transition-box">
              <!-- 顶部 -->
              <div style="width:100%;height:30px;background:#35464E;color:#fff;line-height:30px;font-size:12px;">
                <span style="float:left;margin-left:10px;">配置</span>
                <span style="float:right;margin-right:10px;cursor: pointer;">
                  <i @click='close1'>x</i>
                </span>
              </div>
              <!-- 中间 -->
              <div style='background:#fff;color:#000;font-size:12px;'>
                <p class="new" style="padding-top:10px;">
                  <span class="tit">模板:</span>
                  <el-input size='mini' v-model="msg" :disabled="true" style="width:70%;"></el-input>
                </p>
                <p class="new">
                  <span class="tit">所属部门:</span>
                  <el-select size='mini' v-model="value2" placeholder="请选择" style="width:70%;">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </p>
                <p class="new">
                  <span class="tit">主机名称:</span>
                  <el-input size="mini" v-model="hostname" placeholder="请输入主机名称" style="width:70%;"></el-input>
                </p>
                <p class="new">
                  <span class="tit">主机IP:</span>
                  <el-input size="mini" v-model="IPAddress" placeholder="请输入IP地址" style="width:70%;"></el-input>
                </p>
                <p class="new" v-for="(item,index) in confObjArr" :key="item.id">
                  <span class="tit">{{item.label}}:</span>
                  <el-input v-if="item.key != 'basic-password'" v-model="confObjArr[index][confObjArr[index].key]"  size="mini"  placeholder="" style="width:70%;"></el-input>
                  <el-input v-else placeholder="请输入密码" v-model="confObjArr[index][confObjArr[index].key]" size="mini" show-password style="width:70%;"></el-input>
                </p>


                <div  class="new" style="margin-bottom:20px;">
                    <span class="tit tit1">选择基本监控项:</span>
                    <div v-if="this.basicMonitorsd.length <= 0" style="display:inline-block;text-align:left;width:70%;">暂无数据</div>
                    <div v-else style="display:inline-block;text-align:left;width:70%;">
                        <el-checkbox :indeterminate="isIndeterminated" v-model="checkAlld" @change="handleCheckAllChanged">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedMonitorsd" @change="handleCheckedMonitorsChanged">
                          <el-checkbox v-for="monitor in basicMonitorsd" :label="monitor" :key="monitor" style="width:40%;">{{monitor.name}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div  class="new" style="padding-bottom:20px;">
                    <span class="tit tit1">选择高级监控项:</span>
                    <div v-if="this.advancedMonitorsd.length <= 0" style="display:inline-block;text-align:left;width:70%;">暂无数据</div>
                    <div v-else style="display:inline-block;text-align:left;width:70%;">
                        <el-checkbox :indeterminate="isIndeterminate2d" v-model="checkAll2d" @change="handleCheckAllChange2d">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedMonitors2d" @change="handleCheckedMonitorsChange2d">
                          <el-checkbox v-for="monitor2 in advancedMonitorsd" :label="monitor2" :key="monitor2" style="width:40%;">{{monitor2.name}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <!-- 底部 -->
                <div style="line-height:50px;background:#E6E6E6;">
                    <el-button size="mini" type="primary" @click="saveData2">保存</el-button>
                    <el-button size="mini" @click='cancel'>取消</el-button>
                </div>
              </div>
          </div>
      </transition>
    </div>
    </div>
</div>
</template>

<script>

import echartsLine from '../common/echartsLine.vue'
  export default {
    data() {
      return {
        msg:'',
          total:0,//默认数据总数
          plusPageSize:15,//每页的数据条数
          plusPageCurrent:1,//默认开始页面
          tableData:[],
          multipleSelection: [],
          input:'',
          hostname:'',
          IPAddress:'',
          changeTagVal:[],
          obj:{},
          obj1:{},
          obj2:{},
          basicIds: [],
          advancedIds: [],
          flag:false,
          flag2:false,
          show:false,
          show1:false,
          changeBox:true,
          options: [
            {
              value: '选项1',
              label: '状态'
            },
            {
              value: '选项2',
              label: '非状态'
            },
          ],
        value: '',
        mould:[],
        mouldId: '',
        options2: [
          {
            value: '选项1',
            label: '部门1'
          }, 
          {
            value: '选项2',
            label: '部门2'
          }, 
        ],
        value2: '',
        changeTag:[],
        idx:'',
        // 新建时基本监控多选框需要字段
        checkAll: false,
        checkedMonitors: [],
        basicMonitors: [],
        isIndeterminate: true,
        // 新建时高级监控多选框需要字段
        checkAll2: false,
        checkedMonitors2: [],
        advancedMonitors: [],
        isIndeterminate2: true,

        // 配置时基本监控多选框需要字段
        checkAlld: false,
        checkedMonitorsd: [],
        basicMonitorsd: [],
        isIndeterminated: true,
        // 配置时高级监控多选框需要字段
        checkAll2d: false,
        checkedMonitors2d: [],
        advancedMonitorsd: [],
        isIndeterminate2d: true,
        confObjArr: []
      }
    },
     mounted() {
       this.fetchData();
       
     },
     components: {
        echartsLine
    },
    methods: {
      //新建时基本选择监控需要的方法
      handleCheckAllChange(val) {
        this.checkedMonitors = val ? this.basicMonitors : [];
        this.isIndeterminate = false;
      },
      handleCheckedMonitorsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.basicMonitors.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.basicMonitors.length;
      },
      //新建时高级选择监控需要的方法
      handleCheckAllChange2(val) {
        this.checkedMonitors2 = val ? this.advancedMonitors : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedMonitorsChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.advancedMonitors.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.advancedMonitors.length;
      },


      //配置时基本选择监控需要的方法
      handleCheckAllChanged(val) {
        this.checkedMonidtorsd = val ? this.basicMonitorsd : [];
        this.isIndeterminated = false;
      },
      handleCheckedMonitorsChanged(value) {
        let checkedCountd = value.length;
        this.checkAlld = checkedCountd === this.basicMonitorsd.length;
        this.isIndeterminated = checkedCountd > 0 && checkedCountd < this.basicMonitorsd.length;
      },
      //配置时高级选择监控需要的方法
      handleCheckAllChange2d(val) {
        this.checkedMonitors2d = val ? this.advancedMonitorsd : [];
        this.isIndeterminate2d = false;
      },
      handleCheckedMonitorsChange2d(value) {
        let checkedCountd = value.length;
        this.checkAll2d = checkedCountd === this.advancedMonitorsd.length;
        this.isIndeterminate2d = checkedCountd > 0 && checkedCountd < this.advancedMonitorsd.length;
      },


      //配置按钮(修改功能)
      configure(id){
        this.show1 = true;
        this.idx = id;
        this.$axios.post("/device/manage/modify/show/"+id+".sp").then((res)=>{
          if(res.data.code == 200){
            this.confObjArr = []
            this.msg = res.data.data.templateName
            this.hostname = res.data.data.device.name
            this.IPAddress = res.data.data.device.ip
            this.mouldId = res.data.data.device.deviceTemplateId
            let connectConfig = res.data.data.device.connectConfig

            let conf = res.data.data.template.conf
            
            for(let i = 0,confLength = conf.length; i < confLength; i++){
              let confObj = {}
              let key = conf[i].configKey
              confObj[key] = connectConfig[key]
              confObj['label'] = conf[i].configName
              confObj['key'] = key
              this.confObjArr.push(confObj)
            }
            console.info(this.confObjArr)
            this.basicMonitorsd = res.data.data.template.basicItems
            this.advancedMonitorsd = res.data.data.template.advancedItems
            let checkedList = res.data.data.checked
            let basicMonitorsdLength =  this.basicMonitorsd.length
            for(let i = 0; i < basicMonitorsdLength; i++ ){
              let basic = this.basicMonitorsd[i]
              if(checkedList.includes(basic.id)){
                this.$set(this.checkedMonitorsd,this.checkedMonitorsd.length,basic)
                // console.info(123)
              }
            }

            for(let i = 0,length = this.advancedMonitorsd.length; i < length; i++ ){
              let advanced = this.advancedMonitorsd[i]
              if(checkedList.includes(advanced.id)){
                this.$set(this.checkedMonitors2d,this.checkedMonitors2d.length,advanced)
              }
            }
          }
        })
      },

      //配置框 保存按钮
      saveData2(){
          this.show1 = false
          for(var i = 0;i < this.confObjArr.length; i++){
            let key = this.confObjArr[i].key
            // let obj = {}
            this.obj1[key] = this.confObjArr[i][key]
          }

          for(var i = 0;i < this.checkedMonitorsd.length; i++){
            this.basicIds.push(this.checkedMonitorsd[i].id)
          }
          for(var i = 0;i < this.checkedMonitors2d.length; i++){
              this.advancedIds.push(this.checkedMonitors2d[i].id)
          }

          let params = {
          "basicIds": this.basicIds,
          "advancedIds": this.advancedIds,
          "device": { 
                      "deviceTemplateId" : this.mouldId,
                      "name" : this.hostname,
                      "ip" : this.IPAddress,
                      "deviceTypeId" : '-1',
                      "connectConfig" : this.obj1,
                      'id': this.idx
          }
        }
        
          this.$axios.post("/device/manage/device/modify.sp",params).then((res)=>{
            
            if(res.data.code == 200){
              // alert('保存成功')
              this.open2()
              this.fetchData();
            }
        })
        this.basicIds = []
        this.advancedIds = []

      },
      //保存提示框
       open2() {
        this.$confirm('此操作将保存此条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      //配置框 取消按钮 
      cancel(){
        this.show1 = false
      },
      //删除
      deleteRow(id){
          this.$axios.post("/device/manage/delete/"+id+".sp").then((res)=>{
          if(res.data.code == 200){
            alert('删除成功')
            this.fetchData();
          }
        })
        
      },
      //新建按钮 首先获取选择模板的数据
      newData(){
        this.show = true;
        this.$axios.post("/device/manage/template.sp").then((res)=>{
          if(res.data.code == 200){
            this.mould = res.data.data
          }
        })
      },
      //选择模板后 mouldId传给后台 再掉接口
      selectMould(){
        let params=new URLSearchParams();      
        params.append("id",this.mouldId);
        this.$axios.post("/device/manage/template-config.sp",params).then((res)=>{
          if(res.data.code == 200){
            this.changeTag = res.data.data.conf;
            this.basicMonitors = res.data.data.basicItems
            this.advancedMonitors = res.data.data.advancedItems
            // console.log(this.basicMonitors,this.advancedMonitors,this.changeTag)
          }
          //  console.log(this.changeTag);
          for(var i = 0;i < this.changeTag.length; i++){
            // var key = 'msg' + i;
            // var val = '';
            this.obj = {key:''}
            this.changeTagVal.push(this.obj)
            console.log(this.changeTagVal)
            
          }
        })
      },
      //新建框保存按钮
      saveData(){
        this.show = false
        for(var i = 0;i < this.changeTag.length; i++){
          this.obj1[this.changeTag[i].configKey] = this.changeTagVal[i].key
        }
        // console.log(this.obj1)
        for(var i = 0;i < this.checkedMonitors.length; i++){
            this.basicIds.push(this.checkedMonitors[i].id)
        }
        for(var i = 0;i < this.checkedMonitors2.length; i++){
            this.advancedIds.push(this.checkedMonitors2[i].id)
        }
        let params = {
          "basicIds": this.basicIds,
          "advancedIds": this.advancedIds,
          "device": {
                      "deviceTemplateId" : this.mouldId,
                      "name" : this.hostname,
                      "ip" : this.IPAddress,
                      "deviceTypeId" : '-1',
                      "connectConfig" : this.obj1
          }
        }
        // console.log(params)
        this.$axios.post("/device/manage//device/add.sp",params).then((res)=>{
            if(res.data.code == 200){
              this.open2()
              // alert('保存成功')
              this.fetchData();
            }
        })
        
        this.resetting()
        this.basicIds = []
        this.advancedIds = []
      },
      // 新建弹框x号按钮
      close(){
        this.show = false
        this.resetting()
      },
      // 配置弹框x号按钮
      close1(){
        this.show1 = false
        this.resetting()
      },
      //新建框重置按钮
      resetting(){
        this.mouldId = ''
        this.value2 = ''
        this.changeTag = []
        this.changeTagVal = []
        this.hostname = ''
        this.IPAddress = ''
        this.advancedMonitors = []
        this.basicMonitors = []
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        // alert(val);
        this.multipleSelection = val;
      },
      handleClick(id){
         this.$router.push('/home')
      },
      //当前页数改变时触发
     currentChange(plusPageCurrent){
        this.plusPageCurrent = plusPageCurrent;
        this.fetchData()
      },
      handleSizeChange(plusPageSize){
        this.plusPageSize = plusPageSize;
      },
      fetchData(){ //获取数据
        let params=new URLSearchParams();      
        params.append("plusPageSize",this.plusPageSize);
        params.append("plusPageCurrent",this.plusPageCurrent);
       //发送 post 请求
        this.$axios.post("/device/manage/device.sp",params).then((res)=>{
          if(res.data.code === '200'){
            this.pages = res.data.data.pages;
            this.total = res.data.data.total;
            this.plusPageSize = res.data.data.size;
            this.plusPageCurrent = res.data.data.current;
            this.tableData = res.data.data.records;
          }
          }).catch(()=>{
                this.$toast.error("数据加载错误");
           });
      },
      changeArrow(){
        this.flag = !this.flag;
      },
      changeArrow2(){
        this.flag2 = !this.flag2;
      }
    },
  }
</script>

<style scoped>
    .fl{
        float: right;
        margin-right:20px;
    }
    .fy{
        text-align:center;
        margin-top:40px;
    }
    .title{
        height:100%;
    }
    .body{
      overflow-y: auto
    }
    /* 弹框样式 */
    .mark{
      position:absolute;
      height:100%;
      width:100%;
      top:0;
      left:0;
      background:rgba(0, 0, 0, 0.5);
      z-index: 5;
    }
    .newBox{
      position:fixed;
      width:50%;
      height:50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .transition-box {
      width:100%;
      border-radius: 4px;
      background-color: #E6E6E6;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
      /* box-shadow: 1px 3px 7px 2px #cac9c9; */
      z-index: 6;
    }
    i{
      font-style:normal;
      margin:0 5px;
    }
    .tit{
      display: inline-block;
      width:110px;
      text-align: right;
      margin-right:15px;
    }
    .tit1{
      height:30px;
      vertical-align:top;
    }
    .new{
      margin-bottom:10px;
      background: #fff;
    }
</style>



