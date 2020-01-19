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
              :span-method="objectSpanMethod"
              :data="tableData"
              style="width: 100%"
              :border="true"
            >
              <el-table-column label="城市" prop="city"></el-table-column>
              <el-table-column label="计算方式" prop="author"></el-table-column>
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
import { newsList, deleteNews } from '@/api/news'
export default {
  data() {
    return {
      input3: '',
      select: '',
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      tableData: [
        {
          id: '12987122',
          city: '全国通用',
          name: '王小虎1',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          city: '厦门',
          name: '王小虎2',
          amount1: '165',
          amount2: '4.43',
          amount3: 10
        },
        {
          id: '12987124',
          city: '福州',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 11
        },
        {
          id: '12987125',
          city: '上海',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 11
        }
      ]
    }
  },
  created() {
    // this.getNewsList(this.currentPage, this.pageSize)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({
        path: '/news/update',
        query: {
          id: row.id
        }
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
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
    handleSizeChange(pageSize) {
      this.currentPage = 1
      this.getNewsList(this.currentPage, pageSize)
    },
    handleCurrentChange(pageNum) {
      this.currentPage = 1
      this.getNewsList(pageNum, this.pageSize)
    },
    getNewsList(pageNum, pageSize) {
      const formData = Object.assign(
        {},
        {
          pageNum,
          pageSize
        }
      )
      newsList(formData).then(res => {
        console.log(res)
        const { code, message, results } = res
        if (code !== '200') {
          this.$message.error(message)
        } else {
          this.tableData = results.result
          this.totalPage = results.totalPage
        }
      })
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
