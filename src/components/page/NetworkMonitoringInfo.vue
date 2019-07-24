<template>
  <div>
    <el-row :gutter="20">
      <!-- TCP监听信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                      <i class="el-icon-tickets" style="color:#0891D6"></i>
                      <span style="font-weight:bold;font-size:14px;display:inline-block;width:10%;">TCP监听信息</span>
                      <div style="display:inline-block;width:87%;text-align:right;">
                          <div style="display:inline-block;">
                            <div style="display:inline-block;width:255px;border:1px solid blur">
                                <el-input size='mini' maxlength='50px;' placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1" style="width:180px;"></el-input>
                                <el-button size="mini" type="primary" style="width:60px;margin-left:0px;">查询</el-button>
                            </div>
                          </div>
                          <div style="display:inline-block;">
                            <el-button size="mini" type="warning" icon="el-icon-time">历史记录</el-button>
                            <el-button size="mini" type="success" icon="el-icon-setting">设置</el-button>
                            <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="localAddress" label="本地地址" align='center'></el-table-column>
                        <el-table-column prop="localPort" label="本地端口" align='center'></el-table-column>
                        <el-table-column prop="remoteAddress" label="远端地址" align='center'></el-table-column>
                        <el-table-column prop="remotePort" label="远端端口" align='center'></el-table-column>
                        <el-table-column prop="status" label="状态" align='center'></el-table-column>
                    </el-table>
                  </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <!-- UDP监听信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                      <i class="el-icon-tickets" style="color:#03C482"></i>
                      <span style="font-weight:bold;font-size:14px;display:inline-block;width:10%;">UDP监听信息</span>
                      <div style="display:inline-block;;width:87%;text-align:right;">
                          <div style="display:inline-block;">
                            <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <el-table :data="tableData1" border style="width: 100%">
                        <el-table-column prop="localAddress" label="本地地址"  align='center'></el-table-column>
                        <el-table-column prop="localPort" label="本地端口"  align='center'></el-table-column>
                    </el-table>
                  </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <!-- IP地址信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                      <i class="el-icon-tickets" style="color:orange"></i>
                      <span style="font-weight:bold;font-size:14px;display:inline-block;width:10%;">IP地址信息</span>
                      <div style="display:inline-block;;width:87%;text-align:right;">
                          <div style="display:inline-block;">
                            <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <el-table :data="tableData2" border style="width: 100%">
                        <el-table-column prop="inde" label="索引"  align='center'></el-table-column>
                        <el-table-column prop="IPAddress" label="IP地址"  align='center'></el-table-column>
                        <el-table-column prop="maskOffCode" label="掩码"  align='center'></el-table-column>
                        <el-table-column prop="broadcast" label="Broadcast"  align='center'></el-table-column>
                    </el-table>
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
        input1:'',
        tableData: [
            {
                localAddress: '0.0.0.0',
                localPort: '22',
                remotePort: '0.0.0.0',
                uploadStaff : '11',
                status:'listen'
            },
            {
                localAddress: '0.0.0.0',
                localPort: '22',
                remotePort: '0.0.0.0',
                uploadStaff : '11',
                status:'listen'
            },
            {
                localAddress: '0.0.0.0',
                localPort: '22',
                remotePort: '0.0.0.0',
                uploadStaff : '11',
                status:'listen'
            },
        ],
        tableData1: [
            {
                localAddress: '0.0.0.0',
                localPort: '22',
            },
            {
                localAddress: '0.0.0.0',
                localPort: '22',
            },
        ],
        tableData2: [
            {
                inde: '1',
                IPAddress: '127.0.0.1',
                maskOffCode:'255.0.0.0',
                broadcast:'0'
            },
            {
                inde: '2',
                IPAddress: '192.168.10.4',
                maskOffCode:'255.255.255.0',
                broadcast:'1'
            },
        ]
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
</style>

