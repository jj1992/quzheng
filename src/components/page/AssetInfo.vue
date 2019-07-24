<template>
  <div>
    <el-row :gutter="20">
      <!-- 基本信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                    <i class="el-icon-tickets" style="color:#0891D6"></i>
                      <span style="font-weight:bold;font-size:14px;width:10%;display:inline-block;">基本信息</span>
                      <div style="display:inline-block;width:87%;text-align:right;">
                        <el-button size="mini" type="warning" icon="el-icon-time">历史记录</el-button>
                        <el-button size="mini" type="primary" icon="el-icon-edit-outline">编辑</el-button>
                      </div>
                  </div>
                  <div>
                    <el-col :span="12">
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
                  <div slot="header" class="clearfix">
                      <i class="el-icon-menu" style="color:red"></i>
                      <span style="font-weight:bold;font-size:14px;">应用信息</span>
                  </div>
                  <div>
                    <el-col :span="12">
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

      }
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
    background: #e5e9f2;
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
