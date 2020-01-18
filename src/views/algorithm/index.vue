<template>
  <div class="algorithm">
    <div class="algorithm-wrapper">
      <div class="title">等额本息</div>
      <div class="container">
        <el-row>
          <el-col :sm="24" :md="18" :lg="16" :xl="14">
            <el-card class="box-card">
              <span class="text">
                贷款本金
                <sup class="square">3</sup>
              </span>
              <span class="icon">&times;</span>
              [
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              (
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              )
              <span class="icon">^</span>
              <span class="text">
                还款月数
                <sup class="square">3</sup>
              </span>
              ]
              <span class="icon">&divide;</span>
              [
              (
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              )
              <span class="icon">^</span>
              <span class="text">
                还款月数
                <sup class="square">3</sup>
              </span>
              -1
              ]
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="tabel-container">
        <el-row>
          <el-col :sm="24" :md="18" :lg="16" :xl="14">
            <el-card>
              <!-- <div class="btn">
                <el-button>添加</el-button>
              </div>-->
              <el-table :border="true" :data="tableData" style="width: 100%">
                <el-table-column align="center" width="60px" prop="props">
                  <template slot="header" slot-scope="scope">
                    <span class="text">参数</span>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      贷款本金
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      贷款本金
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      月利率
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      月利率
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      还款月数
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      还款月数
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="algorithm-wrapper">
      <div class="title">等额本息</div>
      <div class="container">
        <el-row>
          <el-col :sm="24" :md="18" :lg="16" :xl="14">
            <el-card class="box-card">
              <span class="text">
                贷款本金
                <sup class="square">3</sup>
              </span>
              <span class="icon">&times;</span>
              [
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              (
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              )
              <span class="icon">^</span>
              <span class="text">
                还款月数
                <sup class="square">3</sup>
              </span>
              ]
              <span class="icon">&divide;</span>
              [
              (
              <span class="text">
                月利率
                <sup class="square">3</sup>
              </span>
              )
              <span class="icon">^</span>
              <span class="text">
                还款月数
                <sup class="square">3</sup>
              </span>
              -1
              ]
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="tabel-container">
        <el-row>
          <el-col :sm="24" :md="18" :lg="16" :xl="14">
            <el-card>
              <!-- <div class="btn">
                <el-button>添加</el-button>
              </div>-->
              <el-table :border="true" :data="tableData" style="width: 100%">
                <el-table-column align="center" width="60px" prop="props">
                  <template slot="header" slot-scope="scope">
                    <span class="text">参数</span>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      贷款本金
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      贷款本金
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      月利率
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      月利率
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      还款月数
                      <sup class="square">1</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot="header" slot-scope="scope">
                    <span class="text">
                      还款月数
                      <sup class="square">2</sup>
                    </span>
                  </template>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.date"></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          props: '*',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          props: '-',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped lang="scss">
.algorithm {
  padding: 0 20px;
  .algorithm-wrapper {
    margin-top: 20px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .container {
      margin-top: 20px;
      text-align: center;
      .text {
        padding: 0 2px;
        color: #000;
        font-weight: 600;
        .square {
          padding: 0 1px;
          color: #409eff;
        }
      }
      .icon {
        padding: 0 2px;
        font-size: 18px;
      }
    }
    .tabel-container {
      margin-top: 30px;
      .btn {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
