<template>
  <div class="house-tax">
    <div class="head-wrapper">
      <el-row>
        <el-col :sm="6" :md="7" :lg="5" :xl="9">
          <div class="title">房税管理</div>
        </el-col>
        <el-col :sm="14" :md="12" :lg="12" :xl="7">
          <div class="search-container">
            <el-input v-model="input3" placeholder="请输入搜索内容" class="input-with-select">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="标题" value="1"></el-option>
                <el-option label="作者" value="2"></el-option>
                <el-option label="内容" value="3"></el-option>
              </el-select>
              <el-button slot="append">搜索</el-button>
            </el-input>
          </div>
        </el-col>
        <el-col class="right" :sm="2" :md="2" :lg="2" :xl="1">
          <el-button icon="el-icon-plus" type="primary" @click="handelAddCompute">添加算法</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="house-tax-wrapper">
      <el-row>
        <el-col :sm="24" :md="22" :lg="20" :xl="18">
          <el-card>
            <el-table
              :header-cell-style="{'background':'#EDEFFE','color':'#333'}"
              :data="tableData"
              style="width: 100%"
              :border="true"
            >
              <el-table-column label="城市">
                <template slot-scope="scope">
                  <div>{{ findCity(scope.row.cityCode,scope.row.cityCode) }}</div>
                </template>
              </el-table-column>
              <el-table-column label="计算方式">
                <template slot-scope="scope">
                  <div>{{ handleHouseType(scope.row.houseType) }}</div>
                </template>
              </el-table-column>
              <el-table-column label="计算公式" prop="name"></el-table-column>
              <el-table-column label="发布日期" prop="createDate"></el-table-column>
              <el-table-column align="right" width="250px">
                <template slot="header" slot-scope="scope">
                  <div>操作</div>
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    icon="el-icon-edit"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                  >查看 / 编辑</el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-delete"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="page-wrapper">
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalPage"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { deleteNews } from '@/api/news'
import { findCityName } from '@/utils/utils'
import { houseTaxList } from '@/api/tax'
export default {
  data() {
    return {
      input3: '',
      select: '',
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      cityCode: '000000',
      tableData: []
    }
  },
  created() {
    this.getHouseTaxList(this.cityCode, this.currentPage, this.pageSize)
  },
  methods: {
    findCity(provinces, city) {
      return findCityName(provinces, city)
    },
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({
        path: '/algorithm/houseUpdate',
        query: {
          city: row.cityCode,
          houseType: row.houseType
        }
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
          return {
            rowspan: 3,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    handleHouseType(type) {
      switch (type) {
        case '1':
          return '新房'
        case '2':
          return '二手商品房'
        case '3':
          return '二手经济房'
        default:
          break
      }
    },
    handleDelete(index, row) {
      this.$msgbox({
        title: '消息',
        message: '是否删除文章',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            const formData = Object.assign(
              {},
              {
                id: row.id
              }
            )
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            deleteNews(formData).then(res => {
              instance.confirmButtonLoading = false
              const { code, message } = res
              if (code !== '200') {
                this.$message.error(message)
              } else {
                this.$message.success(message)
                this.getNewsList(this.currentPage, this.pageSize)
                done()
              }
            })
          } else {
            done()
          }
        }
      })
    },
    handelAddCompute() {
      this.$router.push({
        path: '/algorithm/houseTaxAdd'
      })
    },
    getHouseTaxList(cityCode, pageNum, pageSize) {
      const formData = Object.assign(
        {},
        {
          cityCode,
          pageNum,
          pageSize
        }
      )
      houseTaxList(formData).then(res => {
        const { code, message, results } = res
        if (code !== '200') {
          this.$message.error(message)
        } else {
          this.tableData = results.list
          this.totalPage = results.totalElements
        }
      })
    },
    handleSizeChange(pageSize) {
      this.currentPage = 1
      this.getHouseTaxList(this.currentPage, pageSize)
    },
    handleCurrentChange(pageNum) {
      this.currentPage = 1
      this.getHouseTaxList(pageNum, this.pageSize)
    }
  }
}
</script>

<style scoped lang="scss">
.house-tax {
  padding: 0 20px;
  .head-wrapper {
    padding: 20px 0;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .search-container {
    }
    .right {
      text-align: right;
      margin-left: 20px;
    }
  }

  .house-tax-wrapper {
  }
  .page-wrapper {
    padding-top: 40px;
    text-align: center;
  }
}
</style>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
