<template>
  <div class="compute">
    <el-card>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="新房契税">
          <new-house></new-house>
        </el-tab-pane>
        <el-tab-pane label="二手商品房契税">二手商品房契税</el-tab-pane>
        <el-tab-pane label="二手经济房契税">二手经济房契税</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import NewHouse from '@/components/taxHouse/newHouse/'
export default {
  components: {
    NewHouse
  },
  data() {
    return {
      activeName: 'second',
      tabPosition: 'left'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
