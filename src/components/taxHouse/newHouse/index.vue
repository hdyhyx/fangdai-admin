<template>
  <div class="content">
    <el-row>
      <el-col :sm="24" :md="12" :lg="12" :xl="8">
        <div class="select-city">
          <span class="label">城市：</span>
          <area-select
            v-model="selected"
            class="select"
            type="code"
            :level="1"
            :data="pcaa"
            @change="onChangeProvince"
          ></area-select>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="12" :xl="8">
        <div class="select-city">
          <span>建议：</span>
          <el-select v-model="remind" placeholder="请选择">
            <el-option label="合同价" value="合同价"></el-option>
            <el-option label="评估价" value="评估价"></el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
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
        <el-col :sm="24" :md="22" :lg="18" :xl="{span:12,offset:1}">
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
        <el-col :sm="12" :md="12" :lg="10" :xl="6">
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
        <el-col :sm="{span:8}" :md="{span:8}" :lg="{span:8}" :xl="{span:4,offset:1}">
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
                  <template slot="append">m²/元</template>
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
import Vue from 'vue'
import { pcaa } from 'area-data' // v5 or higher
import 'vue-area-linkage/dist/index.css' // v2 or higher
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)
export default {
  data() {
    return {
      pcaa: pcaa,
      selected: [],
      remind: '合同价', //平估计
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
          registration: '' //登记费
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
    onChangeProvince(province) {
      console.log(province)
    },
    handelTaxSubmit() {
      if (this.selected[0] === undefined || this.selected[0] === '') {
        return this.$message.error('请选择省份')
      }
      if (this.selected[1] === undefined || this.selected[1] === '') {
        return this.$message.error('请选择省份')
      }
      const houseTax = this.processHouseTax(this.tableData)
      const VATTax = this.processVATData(this.VATData)
      const PersonalTax = this.processPersonalTaxData(
        this.personalIncomeTaxData
      )
      const elevatorPrice = this.processElevatorData(this.elevatorData)
      const newTax = Object.assign(
        houseTax,
        VATTax,
        PersonalTax,
        elevatorPrice,
        this.otherTaxData[0],
        {
          provinces: this.selected[0],
          cityCode: this.selected[1],
          remind: this.remind,
          comprehensiveTax: this.percentage(
            this.otherTaxData[0].comprehensiveTax
          )
        }
      )
      this.$emit('onMortgage', newTax)
    },
    percentage(data) {
      if (!data) {
        return ''
      }
      return parseInt(data) / 100
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
      return newData
    },
    processPersonalTaxData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(newData, {
            hasFiveYearOne: this.percentage(item.tax)
          })
        } else {
          newData = Object.assign(newData, {
            noFiveYearOne: this.percentage(item.tax)
          })
        }
      })
      return newData
    },
    processVATData(data) {
      var newData = {}
      data.forEach(item => {
        if (item.type === 1) {
          newData = Object.assign(newData, {
            hasTwoYear: this.percentage(item.tax)
          })
        } else {
          newData = Object.assign(newData, {
            noTwoYear: this.percentage(item.tax)
          })
        }
      })
      return newData
    },
    processHouseTax(data) {
      var newTax = {}
      data.forEach((item, index) => {
        if (index === 1) {
          newTax = Object.assign(newTax, {
            smallOne: this.percentage(item.small),
            mediumOne: this.percentage(item.medium),
            largeOne: this.percentage(item.large)
          })
        } else if (index === 2) {
          newTax = Object.assign(newTax, {
            smallTwo: this.percentage(item.small),
            mediumTwo: this.percentage(item.medium),
            largeTwo: this.percentage(item.large)
          })
        } else {
          newTax = Object.assign(newTax, {
            smallThree: this.percentage(item.small),
            mediumThree: this.percentage(item.medium),
            largeThree: this.percentage(item.large)
          })
        }
      })
      return newTax
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  .select-city {
    margin-top: 20px;
    .label {
      position: relative;
      top: 5px;
      font-size: 16px;
      vertical-align: middle;
    }
    .select {
      display: inline-block;
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
