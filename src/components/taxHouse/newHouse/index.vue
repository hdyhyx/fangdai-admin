<template>
  <div class="content">
    <div class="select-city">
      <span class="label">城市：</span>
    </div>
    <div class="table">
      <el-row>
        <el-col :sm="24" :md="22" :lg="17" :xl="8">
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
                <el-input v-model="scope.row.small">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">90㎡ - 144㎡</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.medium">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">144㎡ 以上</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.large">
                  <template slot="append">%</template>
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
                <el-input v-model="scope.row.tax">
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
            :span-method="objectSpanMethod"
            :data="otherTaxData"
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
                <el-input v-model="scope.row.comprehensiveTax">
                  <template slot="append">%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">房屋维修基金</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.elevator">
                  <template slot="append">万元</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <span class="text">交易手续费</span>
              </template>
              <template slot-scope="scope">
                <el-input v-model="scope.row.poundage">
                  <template slot="append">%</template>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherTaxData: [
        {
          label: '有电梯',
          stampDuty: '', //印花税
          comprehensiveTax: '', //综合地价税率
          elevator: '', //房屋维修进有电梯每平米价格
          poundage: '', //手续费
          registration: '', //登记费
          type: 1
        },
        {
          label: '没有电梯',
          elevator: '', //房屋维修金没电梯每平米价格
          comprehensiveTax: '', //综合地价税率
          stampDuty: '', //印花税
          poundage: '', //手续费
          registration: '', //登记费
          type: 2
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
          large: ''
        },
        {
          label: '二套',
          small: '',
          medium: '',
          large: ''
        },
        {
          label: '三套以上',
          small: '',
          medium: '',
          large: ''
        }
      ]
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 4 ||
        columnIndex === 5
      ) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  .label {
    font-size: 16px;
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
