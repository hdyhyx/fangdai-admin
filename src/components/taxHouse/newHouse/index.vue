<template>
  <div class="content">
    <div class="select-city">
      <span class="label">城市：</span>
    </div>
    <div class="table">
      <el-row>
        <el-col :sm="24" :md="22" :lg="17" :xl="8">
          <div class="title">房税</div>
          <el-table
            :header-cell-style="{'background':'#3389FF','color':'#fff'}"
            :border="true"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column align="center" width="60px" prop="props">
              <template slot="header" slot-scope="scope">
                <span class="text"></span>
              </template>
              <template slot-scope="scope">
                <span>{{ scope.row.label }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">90㎡ 以下</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.small" maxlength="3">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">90㎡ - 144㎡</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.medium" maxlength="3">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">144㎡ 以上</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.large" maxlength="3">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :sm="24" :md="22" :lg="22" :xl="{span:12,offset:1}">
          <div class="title">其余费用</div>
          <el-table
            :header-cell-style="{'background':'#3389FF','color':'#fff'}"
            :border="true"
            :data="otherTaxData"
            style="width: 100%"
          >
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">印花税</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.stampDuty">
                  <template slot="append">元</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">综合地价</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.comprehensiveTax" maxlength="3">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">交易手续费</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.poundage">
                  <template slot="append">元</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">产权登记费</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.registration">
                  <template slot="append">元</template>
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-row>
        <el-col :sm="14" :md="12" :lg="8" :xl="6">
          <div class="title">增值税及附加税</div>
          <el-table
            :header-cell-style="{'background':'#3389FF','color':'#fff'}"
            :border="true"
            :data="VATData"
            style="width: 100%"
          >
            <el-table-column align="center" width="80px" prop="props">
              <template slot="header" slot-scope="scope">
                <span class="text"></span>
              </template>
              <template slot-scope="scope">
                <span>{{ scope.row.label }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">年份</span>
              </template>
              <template slot-scope="scope">
                <span>{{ scope.row.text }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">税收</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.tax">
                  <template slot="append" maxlength="3">%</template>
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col
          :sm="{span:8,offset:1}"
          :md="{span:8,offset:1}"
          :lg="{span:8,offset:1}"
          :xl="{span:4,offset:1}"
        >
          <div class="title">个人所得税</div>
          <el-table
            :header-cell-style="{'background':'#3389FF','color':'#fff'}"
            :border="true"
            :data="personalIncomeTaxData"
            style="width: 100%"
          >
            <el-table-column align="center" width="80px" prop="props">
              <template slot="header" slot-scope="scope">
                <span class="text"></span>
              </template>
              <template slot-scope="scope">
                <span>{{ scope.row.label }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">税收</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.tax" maxlength="3">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col
          :sm="{span:8,offset:1}"
          :md="{span:8,offset:1}"
          :lg="{span:8,offset:1}"
          :xl="{span:4,offset:1}"
        >
          <div class="title">房屋维修基金</div>
          <el-table
            :header-cell-style="{'background':'#3389FF','color':'#fff'}"
            :border="true"
            :data="elevatorData"
            style="width: 100%"
          >
            <el-table-column align="center" width="80px" prop="props">
              <template slot="header" slot-scope="scope">
                <span class="text"></span>
              </template>
              <template slot-scope="scope">
                <span>{{ scope.row.label }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">房屋维修基金</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.price">
                  <template slot="append">万元</template>
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div>
        <el-button style="margin-top:20px;" @click="handelTaxSubmit">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevatorData: [
        {
          label: '有电梯',
          price: '', //房屋维修进有电梯每平米价格
          type: 1
        },
        {
          label: '没有电梯',
          price: '', //房屋维修金没电梯每平米价格
          type: 2
        }
      ],
      otherTaxData: [
        {
          stampDuty: '', //印花税
          comprehensiveTax: '', //综合地价税率
          poundage: '', //手续费
          registration: '', //登记费
          type: 1
        }
      ],
      personalIncomeTaxData: [
        {
          label: '满五唯一',
          tax: '',
          type: 1
        },
        {
          label: '非满五唯一',
          tax: '',
          type: 2
        }
      ],
      VATData: [
        {
          label: '公式一',
          text: '满两年',
          tax: '',
          type: 1
        },
        {
          label: '公式二',
          text: '不满两年',
          tax: '',
          type: 2
        }
      ],

      tableData: [
        {
          label: '首套',
          small: '',
          medium: '',
          large: '',
          type: 1
        },
        {
          label: '二套',
          small: '',
          medium: '',
          large: '',
          type: 2
        },
        {
          label: '三套以上',
          small: '',
          medium: '',
          large: '',
          type: 3
        }
      ]
    }
  },
  methods: {
    handelTaxSubmit() {
      this.processHouseTax(this.tableData)
      this.processVATData(this.VATData)
      this.processElevatorData(this.elevatorData)
    },
    processElevatorData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(newData, {
            elevator: item.price
          })
        } else {
          newData = Object.assign(newData, {
            noElevator: item.price
          })
        }
      })
      console.log(newData)
    },
    processPersonalTaxData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(newData, {
            hasFiveYearOne: item.tax
          })
        } else {
          newData = Object.assign(newData, {
            noTwoYear: item.tax
          })
        }
      })
      console.log(newData)
    },
    processVATData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(newData, {
            hasTwoYear: item.tax
          })
        } else {
          newData = Object.assign(newData, {
            noTwoYear: item.tax
          })
        }
      })
      console.log(newData)
    },
    processHouseTax(data) {
      var newTax = {}
      data.forEach((item, index) => {
        if (index === 1) {
          newTax = Object.assign(newTax, {
            smallOne: item.small,
            mediumOne: item.medium,
            largeOne: item.large
          })
        } else if (index === 2) {
          newTax = Object.assign(newTax, {
            smallTwo: item.small,
            mediumTwo: item.medium,
            largeTwo: item.large
          })
        } else {
          newTax = Object.assign(newTax, {
            smallThree: item.small,
            mediumThree: item.medium,
            largeThree: item.large
          })
        }
      })
      console.log(newTax)
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  .select-city {
    margin-bottom: 16px;
    margin-top: 20px;
    .label {
      font-size: 16px;
    }
  }
  .table {
    margin: 20px 0;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }
}
</style>
