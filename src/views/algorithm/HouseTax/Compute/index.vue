<template>
  <div class="compute">
    <el-card>
      <el-tabs v-model="activeName" :tab-position="tabPosition">
        <el-tab-pane name="1" label="新房契税">
          <new-house
            :selected="selected"
            :remind="remind"
            :elevator-data="elevatorData"
            :other-tax-data="otherTaxData"
            :personal-income-tax-data="personalIncomeTaxData"
            :vat-data="VATData"
            :table-data="tableData"
            @onMortgage="onMortgage"
          ></new-house>
        </el-tab-pane>
        <el-tab-pane name="2" label="二手商品房契税">
          <new-house
            :selected="selected"
            :remind="remind"
            :elevator-data="elevatorData"
            :other-tax-data="otherTaxData"
            :personal-income-tax-data="personalIncomeTaxData"
            :vat-data="VATData"
            :table-data="tableData"
            @onMortgage="onMortgage"
          ></new-house>
        </el-tab-pane>
        <el-tab-pane name="3" label="二手经济房契税">
          <new-house
            :selected="selected"
            :remind="remind"
            :elevator-data="elevatorData"
            :other-tax-data="otherTaxData"
            :personal-income-tax-data="personalIncomeTaxData"
            :vat-data="VATData"
            :table-data="tableData"
            @onMortgage="onMortgage"
          ></new-house>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import NewHouse from '@/components/taxHouse/newHouse/'
import { addHouseTax } from '@/api/tax'
export default {
  components: {
    NewHouse
  },
  data() {
    return {
      activeName: '1',
      tabPosition: 'left',
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
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onMortgage(tax) {
      const formData = Object.assign(tax, {
        houseType: this.activeName
      })
      addHouseTax(formData).then(res => {
        const { code, message } = res
        if (code !== '200') {
          this.$message.error(message)
        } else {
          this.$message.success(message)
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.compute {
  margin: 30px;
}
</style>
<style>
.el-input-group__append,
.el-input-group__prepend {
  padding: 0 10px;
}
</style>
