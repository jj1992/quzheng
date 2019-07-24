<template>
  <div>
    <el-row :gutter="20">
      <!-- 附件信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                      <i class="el-icon-message" style="color:#0891D6"></i>
                      <span style="font-weight:bold;font-size:14px;width:10%;display:inline-block;">附件信息</span>
                      <div style="display:inline-block;width:87%;text-align:right;">
                        <el-button size="mini" type="warning" icon="el-icon-time">历史记录</el-button>
                        <el-button size="mini" type="primary" icon="el-icon-upload2">上传</el-button>
                      </div>
                  </div>
                  <div>
                      <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="file" label="上传文件" width="120" align='center'></el-table-column>
                        <el-table-column prop="fileSize" label="文件大小" width="120" align='center'></el-table-column>
                        <el-table-column prop="uploadDate" label="上传时间" width="180" align='center'></el-table-column>
                        <el-table-column prop="uploadStaff" label="上传员工" width="120" align='center'></el-table-column>
                        <el-table-column prop="remarks" label="备注" width="300" align='center'></el-table-column>
                        <el-table-column label="操作" align='center'>
                            <template>
                                <el-button type="text" size="mini">删除</el-button>
                                <el-button type="text" size="mini">下载</el-button>
                                <el-button type="text" size="mini">查看</el-button>
                                <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                                <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
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
</template>

<script>
export default {
    data() {
      return {
        tableData: [
            {
                file: '合同01',
                fileSize: '56kb',
                uploadDate: '2018-11-23 12:23:00',
                uploadStaff : '王五',
                remarks:'备注'
            },
            {
                file: '合同02',
                fileSize: '56kb',
                uploadDate: '2018-11-23 12:23:00',
                uploadStaff : '王五',
                remarks:'备注'
            },
            {
                file: '合同03',
                fileSize: '56kb',
                uploadDate: '2018-11-23 12:23:00',
                uploadStaff : '王五',
                remarks:'备注'
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
