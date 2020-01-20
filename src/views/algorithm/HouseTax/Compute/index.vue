<template>
  <div class="compute">
    <el-card>
      <el-tabs v-model="activeName" :tab-position="tabPosition">
        <el-tab-pane name="1" label="新房契税">
          <new-house @onMortgage="onMortgage"></new-house>
        </el-tab-pane>
        <el-tab-pane name="2" label="二手商品房契税">
          <new-house @onMortgage="onMortgage"></new-house>
        </el-tab-pane>
        <el-tab-pane name="3" label="二手经济房契税">
          <new-house @onMortgage="onMortgage"></new-house>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import NewHouse from '@/components/taxHouse/newHouse/'
import { addMortgage } from '@/api/tax'
export default {
  components: {
    NewHouse
  },
  data() {
    return {
      activeName: '1',
      tabPosition: 'left'
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
      addMortgage(formData).then(res => {
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
