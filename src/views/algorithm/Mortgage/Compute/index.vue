<template>
  <div class="algorithm">
    <el-card>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="等额本息">
          <div class="algorithm-wrapper">
            <div class="container">
              <div class="select-wrapper">
                <span class="label">城市：</span>
                <area-select v-model="selected" class="select" type="code" :level="1" :data="pcaa"></area-select>
              </div>
              <el-row>
                <el-col :sm="24" :md="22" :lg="22" :xl="14">
                  <el-card>
                    <span class="text">
                      贷款本金
                      <sup class="square">1</sup>
                    </span>
                    <span class="icon">&times;</span>
                    [
                    <span class="text">
                      月利率
                      <sup class="square">1</sup>
                    </span>
                    (
                    <span class="text">
                      月利率
                      <sup class="square">2</sup>
                    </span>
                    )
                    <span class="icon">^</span>
                    <span class="text">
                      还款月数
                      <sup class="square">1</sup>
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
                      <sup class="square">2</sup>
                    </span>
                    -1
                    ]
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="table-container">
              <el-row>
                <el-col :sm="24" :md="22" :lg="22" :xl="14">
                  <el-card>
                    <!-- <div class="btn">
                <el-button>添加</el-button>
                    </div>-->
                    <el-table
                      :header-cell-style="{'background':'#3389FF','color':'#fff'}"
                      :border="true"
                      :data="principalAndInterestData"
                      style="width: 100%"
                    >
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
                          <el-input v-model="scope.row.principal"></el-input>
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
                          <el-input v-model="scope.row.firstMonthInterest"></el-input>
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
                          <el-input v-model="scope.row.secondMonthInterest"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot="header" slot-scope="scope">
                          <span class="text">
                            月利率
                            <sup class="square">3</sup>
                          </span>
                        </template>
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.thirdMonthInterest"></el-input>
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
                          <el-input v-model="scope.row.firstRepaymentMonths"></el-input>
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
                          <el-input v-model="scope.row.secondRepaymentMonths"></el-input>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-card>
                </el-col>
              </el-row>
              <div class="btn-wrap">
                <el-button @click="onSubmit">确定</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="等额本金">
          <div class="algorithm-wrapper">
            <div class="container">
              <el-row>
                <el-col :sm="24" :md="22" :lg="22" :xl="14">
                  <el-card class="box-card">
                    (
                    <span class="text">
                      贷款本金
                      <sup class="square">1</sup>
                    </span>
                    <span class="icon">&divide;</span>
                    <span class="text">还款月数</span>
                    )
                    +
                    (
                    <span
                      class="text"
                    >
                      贷款本金
                      <sup class="square">2</sup>
                    </span>
                    -
                    <span class="text">累计已还本金</span>
                    )
                    <span class="icon">&times;</span>
                    <span class="text">月利率</span>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="table-container">
              <el-row>
                <el-col :sm="24" :md="20" :lg="22" :xl="14">
                  <el-card>
                    <!-- <div class="btn">
                <el-button>添加</el-button>
                    </div>-->
                    <el-table
                      :header-cell-style="{'background':'#3389FF','color':'#fff'}"
                      :border="true"
                      :data="thePrincipalData"
                      style="width: 100%"
                    >
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
                          <span class="text">还款月数</span>
                        </template>
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.date"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot="header" slot-scope="scope">
                          <span class="text">累计已还本金</span>
                        </template>
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.date"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot="header" slot-scope="scope">
                          <span class="text">月利率</span>
                        </template>
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.date"></el-input>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-card>
                </el-col>
              </el-row>
              <div class="btn-wrap">
                <el-button @click="onSubmit">确定</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { pcaa } from 'area-data' // v5 or higher
import 'vue-area-linkage/dist/index.css' // v2 or higher
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)
export default {
  data() {
    return {
      pcaa: pcaa,
      tabPosition: 'left',
      selected: [],
      principalAndInterestData: [
        //等额本息
        {
          type: 1,
          props: '*',
          principal: '',
          firstMonthInterest: '', //第一项月利率
          secondMonthInterest: '', //第二项月利率
          thirdMonthInterest: '', //第三项月利率
          firstRepaymentMonths: '', //第一项还款数
          secondRepaymentMonths: '' //第二项还款数
        },
        {
          type: 2,
          props: '-',
          principal: '',
          firstMonthInterest: '', //第一项月利率
          secondMonthInterest: '', //第二项月利率
          thirdMonthInterest: '', //第三项月利率
          firstRepaymentMonths: '', //第一项还款数
          secondRepaymentMonths: '' //第二项还款数
        }
      ],
      thePrincipalData: [
        //等额本金
        {
          props: '*',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          props: '+',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log(this.tableData)
      console.log(this.handleTableData(this.tableData))
    },
    handleTableData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(
            {},
            {
              multiplyPrincipal: item.principal,
              firstMultiplyMonthInterest: item.firstMonthInterest,
              secondMultiplyMonthInterest: item.secondMonthInterest,
              thirdMultiplyMonthInterest: item.thirdMonthInterest,
              firstMultiplyRepaymentMonths: item.firstRepaymentMonths,
              secondMultiplyRepaymentMonths: item.secondRepaymentMonths
            }
          )
        } else {
          newData = Object.assign(newData, {
            addPrincipal: item.principal,
            firstAddMonthInterest: item.firstMonthInterest,
            secondAddMonthInterest: item.secondMonthInterest,
            thirdAddMonthInterest: item.thirdMonthInterest,
            firstAddRepaymentMonths: item.firstRepaymentMonths,
            secondAddRepaymentMonths: item.secondRepaymentMonths
          })
        }
      })
      return newData
    }
  }
}
</script>

<style scoped lang="scss">
.algorithm {
  padding: 20px;
  .algorithm-wrapper {
    margin-top: 20px;
    .select-wrapper {
      margin-bottom: 20px;
      text-align: left;
      .label {
        position: relative;
        top: 8px;
      }
      .select {
        display: inline-block;
      }
    }
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
    .table-container {
      margin-top: 30px;
      .table-head {
        background: red;
      }
      .btn {
        margin-bottom: 20px;
      }
    }
    .btn-wrap {
      padding: 20px 0;
    }
  }
}
</style>
