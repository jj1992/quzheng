<template>
  <div>
    <el-row :gutter="20">
      <!-- TCP监听信息 -->
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding: '0px'}">
                  <div slot="header" class="clearfix">
                      <i class="el-icon-rank" style="color:rgb(32, 160, 255)"></i>
                      <span style="font-weight:bold;font-size:14px;display:inline-block;width:10%;">TCP监听信息</span>
                      <div style="display:inline-block;width:87%;text-align:right;">
                          <div style="display:inline-block;">
                            <div style="display:inline-block;font-size:12px;">
                                <div class="block" style="display:inline-block;margin-right:15px;">
                                    <span class="demonstration">开始时间</span>
                                    <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width:130px;margin-left:10px;">
                                    </el-date-picker>
                                </div>
                                <div class="block" style="display:inline-block;margin-right:15px;">
                                    <span class="demonstration">结束时间</span>
                                    <el-date-picker
                                    v-model="value2"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width:130px;margin-left:10px;">
                                    </el-date-picker>
                                </div>
                            </div>
                          </div>
                          <div style="display:inline-block;">
                            <el-button size="mini" type="primary" icon='el-icon-search'>查询</el-button>
                            <el-button size="mini" type="warning" icon="el-icon-time">历史记录</el-button>
                            <el-button size="mini" type="success" icon="el-icon-setting">设置</el-button>
                            <el-button size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="inde" label="索引" align='center' width='100px;'></el-table-column>
                        <el-table-column prop="utilizationAatio" label="使用率" align='center' style="text-align:center">
                            <template slot-scope="scope"><echartsLine ref="echarts" :id="scope.row.id" :smooth="false" ></echartsLine></template>
                        </el-table-column>
                        <el-table-column prop="" label="" align='center'></el-table-column>
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
import echartsLine from '../common/echartsLine2.vue'
export default {
    components: {
        echartsLine
    },
    data() {
      return {
        tableData: [
            {
                inde: '1',
                utilizationAatio:''
            },
            {
                inde: '2',
                utilizationAatio:''
            },
        ],
        value1: '',
        value2: '',
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

