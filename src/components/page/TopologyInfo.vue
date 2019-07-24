<template>
  <div>
    <el-row :gutter="20">
      <!-- 基本信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                    <i class="el-icon-view" style="color:#0891D6"></i>
                      <span style="font-weight:bold;font-size:14px;width:10%;display:inline-block;">拓扑图管理</span>
                  </div>
                  <div>
                    <el-col :span="12">
                      <el-card shadow="hover" >
                          <div>
                              <p><span class="tit">应用系统：</span><span class="con">
                                    <el-select v-model="value" placeholder="请选择">
                                      <el-option
                                        v-for="item in options"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                      </el-option>
                                    </el-select>
                                </span><span class="tit"><el-button v-if="!editFlag" @click="editTopologyInfo()" type="primary">编辑</el-button>
                                     <el-button v-if="editFlag"  @click="saveTopologyInfo()" type="primary">保存</el-button>
                                </span></p>
                          </div>
                      </el-card>
                  </el-col>
                  </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <!-- 应用信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div  class="clearfix" style="text-align:center;">
                    <div class="in_block">
                      <img src="@/assets/img/11.png" class="user-avator" >
                     </div>
                     <div v-if="editFlag" class="in_block" style="text-align:center; " >
                        <div class="in_block_edit">
                                     <!-- 设备列表 -->
                            <el-row>               
                              <el-col :span="24">
                                <el-row>
                                  <el-col :span="24">
                                    <el-card :body-style="{padding: '0px'}">
                                        <div slot="header" class="clearfix" style="text-align:left;">
                                            <i class="el-icon-tickets" style="color:#03C482"></i>
                                            <span style="font-weight:bold;font-size:14px;display:inline-block;">设备列表</span>
                                            <div style="display:inline-block;text-align:right; float:right;">
                                                <div style="display:inline-block;">
                                                  <el-button size="mini" type="primary"  @click="plusEquipment" icon="el-icon-plus">增加</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                          <table >
                                            <tr>
                                              <td style="width:130px;"><div class="eList bg-purple">服务器</div></td>
                                              <td>
                                                <div class="eList tRight bg-purple-light">
                                                  <el-button size="mini" type="primary">服务器1<i dataId="1"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">服务器2<i dataId="2"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">服务器3<i dataId="3"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="width:130px;"><div class="eList bg-purple">网络设备</div></td>
                                              <td>
                                                <div class="eList tRight bg-purple-light">
                                                  <el-button size="mini" type="primary">路由器<i dataId="1"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">交换机2<i dataId="2"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">防火墙3<i dataId="3"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="width:130px;"><div class="eList bg-purple">数据库</div></td>
                                              <td>
                                                <div class="eList tRight bg-purple-light">
                                                  <el-button size="mini" type="primary">数据库1<i dataId="1"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">数据库2<i dataId="2"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  <el-button size="mini" type="primary">数据库3<i dataId="3"  @click="closeButton" class="el-icon-close el-icon--right"></i></el-button>
                                                  </div>
                                              </td>
                                            </tr>
                                          </table>
                                          
                                        </div>
                                    </el-card>
                                  </el-col>
                                </el-row>
                              </el-col>
                          </el-row>

                                   <!-- 关系列表 -->
                            <el-row>               
                              <el-col :span="24">
                                <el-row>
                                  <el-col :span="24">
                                    <el-card :body-style="{padding: '0px'}">
                                        <div slot="header" class="clearfix" style="text-align:left;">
                                            <i class="el-icon-tickets" style="color:#03C482"></i>
                                            <span style="font-weight:bold;font-size:14px;display:inline-block;">关系列表</span>
                                            <div style="display:inline-block;text-align:right; float:right;">
                                                <div style="display:inline-block;">
                                                  <el-button size="mini" type="primary" icon="el-icon-view">预览</el-button>
                                                  <el-button size="mini" type="primary" icon="el-icon-refresh">增加</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                           <el-table
                                              ref="multipleTable"
                                              :data="tableData"
                                              tooltip-effect="dark"
                                              style="width:100%"
                                              height="400"
                                              @selection-change="handleSelectionChange">
                                              <el-table-column
                                                label="开始节点"
                                                prop="start"
                                                width="220">
                                                <template slot-scope="scope">
                                                  <el-select v-model="value1"  placeholder="请选择">
                                                    <el-option
                                                      v-for="item1 in scope.row.options"
                                                      :key="item1.value"
                                                      :label="item1.label"
                                                      :value="item1.value">
                                                    </el-option>
                                                  </el-select></template>
                                              </el-table-column>
                                              <el-table-column
                                                prop="end"
                                                label="结束节点"
                                                show-overflow-tooltip>
                                                <template slot-scope="scope">
                                                  <el-select v-model="value1"  placeholder="请选择">
                                                    <el-option
                                                      v-for="item1 in scope.row.options"
                                                      :key="item1.value"
                                                      :label="item1.label"
                                                      :value="item1.value">
                                                    </el-option>
                                                  </el-select></template>
                                              </el-table-column>
                                              <el-table-column
                                                prop="link"
                                                label="类型"
                                                width="150">
                                                <template slot-scope="scope">
                                                  <el-select v-model="value1"  placeholder="请选择">
                                                    <el-option
                                                      v-for="item1 in scope.row.options"
                                                      :key="item1.value"
                                                      :label="item1.label"
                                                      :value="item1.value">
                                                    </el-option>
                                                  </el-select></template>
                                              </el-table-column>
                                              
                                            <el-table-column
                                                fixed="right"
                                                label="操作"
                                                width="100">
                                                <template slot-scope="scope">
                                                  <el-button type="text" size="small">配置</el-button>
                                                  <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                                                </template>
                                              </el-table-column>
                                            </el-table>
                                        </div>
                                    </el-card>
                                  </el-col>
                                </el-row>
                              </el-col>
                          </el-row>
                          </div>
                     </div>
                  </div>
                  <div>
                      
                    <!-- <el-col :span="12">
                      <el-card shadow="hover" >
                          <div>
                              <p><span class="tit">承载系统：</span><span class="con">机线资源管理系统</span></p>
                              <p><span class="tit">购置合同：</span><span class="con">2017-06-09</span></p>
                              <p><span class="tit">厂家：</span><span class="con">联想</span></p>
                              <p><span class="tit">维保厂家：</span><span class="con">联信</span></p>
                              <p><span class="tit">维保期到期时间：</span><span class="con">2018-06-29</span></p>
                          </div>
                      </el-card>
                  </el-col>
                  <el-col :span="12">
                      <el-card shadow="hover">
                          <div>
                              <p><span class="tit">承载系统：</span><span class="con">机线资源管理系统</span></p>
                              <p><span class="tit">购置合同：</span><span class="con">2017-06-09</span></p>
                              <p><span class="tit">厂家：</span><span class="con">联想</span></p>
                              <p><span class="tit">维保厂家：</span><span class="con">联信</span></p>
                              <p><span class="tit">维保期到期时间：</span><span class="con">2018-06-29</span></p>
                          </div>
                      </el-card>
                  </el-col> -->
                  </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
    </el-row>
    <el-dialog
        title="添加"
        :visible.sync="centerDialogVisible"
        width="50%"
        left>
          <el-container>
          <el-header>
                 ip地址：<el-input v-model="input" style="width:240px; margin-left:12px;" placeholder="请输入内容"></el-input>
                 <el-button style="margin-left:12px;" type="primary">查询</el-button>
          </el-header>
          <el-main>
               <table>
                    <tr>
                          <td style="width:130px;"><div class="eList bg-purple">服务器</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox label="服务器1"></el-checkbox>
                              <el-checkbox label="服务器1"></el-checkbox>
                              <el-checkbox label="服务器1"></el-checkbox>
                            </div>
                          </td>
                       </tr>
                       <tr>
                          <td style="width:130px;"><div class="eList bg-purple">网络设备</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox label="服务器1"></el-checkbox>
                              <el-checkbox label="服务器1"></el-checkbox>
                              <el-checkbox label="服务器1"></el-checkbox>
                            </div>
                          </td>
                       </tr>
                       <tr>
                          <td style="width:130px;"><div class="eList bg-purple">数据库</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox v-model="checked">服务器1</el-checkbox>
                              <el-checkbox v-model="checked">服务器2</el-checkbox>
                              <el-checkbox v-model="checked">服务器3</el-checkbox>
                            </div>
                          </td>
                       </tr>
                       <tr>
                          <td style="width:130px;"><div class="eList bg-purple">小型机</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox v-model="checked">服务器1</el-checkbox>
                              <el-checkbox v-model="checked">服务器2</el-checkbox>
                              <el-checkbox v-model="checked">服务器3</el-checkbox>
                            </div>
                          </td>
                       </tr>
                       <tr>
                          <td style="width:130px;"><div class="eList bg-purple">小型机</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox v-model="checked">服务器1</el-checkbox>
                              <el-checkbox v-model="checked">服务器2</el-checkbox>
                              <el-checkbox v-model="checked">服务器3</el-checkbox>
                            </div>
                          </td>
                       </tr>
                       <tr>
                          <td style="width:130px;"><div class="eList bg-purple">中间件</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox v-model="checked">服务器1</el-checkbox>
                              <el-checkbox v-model="checked">服务器2</el-checkbox>
                              <el-checkbox v-model="checked">服务器3</el-checkbox>
                            </div>
                          </td>
                       </tr><tr>
                          <td style="width:130px;"><div class="eList bg-purple">应用</div></td>
                          <td>
                            <div class="eList tRight bg-purple-light">
                              <el-checkbox v-model="checked">服务器1</el-checkbox>
                              <el-checkbox v-model="checked">服务器2</el-checkbox>
                              <el-checkbox v-model="checked">服务器3</el-checkbox>
                            </div>
                          </td>
                       </tr>
                  </table>
          </el-main>
          </el-container>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
        editFlag:false,
        value:'',
        value1:'',
        options: [],
                tableData:[
                   {
                        start: '1',
                        end:'Physical memory',
                        link:'unknown'
                     
                    }
                ]
      }
    },
    mounted() {
       this.init();
     },
    methods:{
      plusEquipment(){
        this.centerDialogVisible=true;
      },
      init(){
          this.$axios.get("/businessSystem/selectAllBusinessSystem.sp",{}).then((res)=>{
          if(res.data.code === '200'){
            this.options=res.data.data.records;
          }
          }).catch(()=>{
                this.$toast.error("数据加载错误");
           });  
      },
        closeButton(event){
            alert(event.target.getAttribute("dataId"));
        },
        editTopologyInfo(){
               this.editFlag=true;
        },
        saveTopologyInfo(){
               this.editFlag=false;
        },
        handleSelectionChange(val) {
        // alert(val);
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>
table {    
            margin: 0 auto;
            width: 100%;
            border:1px solid rgb(40, 46, 46);
            border-collapse: collapse;/*关键代码*/
        }
        th,td {
            text-align: center;
            border: 1px solid rgb(40, 46, 46);
        }
.eList{height:35px; line-height: 32px; }

.tRight{text-align: left; padding-left:5px;  }

.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.in_block{
  width:50%;height: 600px;
   display: inline-block;overflow-x:hidden;overflow-y: auto; 
}
.in_block_edit{
   padding: 0px 15px;
}
.in_edit_button{
 background: #1295DB;
 border-radius: 5px;
 display: inline-block;
}
.in_edit_text{
  color: #FFF;

}
.in_edit_icon{
   
}
.none {
  display: none;
}
.user-avator {
        width: 506px;
        height: 306px;
    }
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
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }




.card{
  margin-top: 10px;
}
.card:hover .grid-num{
  color: #3f51b5;
}
.card:hover .grid-link::after{
  width: 100%;
}
.grid-content {
  display: flex;
  padding: 0 10%;
  align-items: center;
  height: 80px;
  cursor: pointer;
}
.grid-cont-right {
  flex: 1;
  text-align: left;
  font-size: 12px;
  color: #999;
}

.grid-num {
  font-size: 16px;
  font-weight: bold;
  transition: all 1s;
  color: #999;
}
.grid-link{
  position: relative;
}
.grid-link::after{
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  background: #3f51b5;
  height: 3px;
  width: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.grid-text{
  margin-top:5px; 
  max-height: 32px;
overflow:hidden; 

text-overflow:ellipsis;

display:-webkit-box; 

-webkit-box-orient:vertical;

-webkit-line-clamp:2; 
}



</style>
