<template>
  <div class="news">
    <div class="head-wrapper">
      <el-row>
        <el-col :sm="6" :md="7" :lg="5" :xl="9">
          <div class="title">文章管理</div>
        </el-col>
        <el-col :sm="14" :md="12" :lg="12" :xl="7">
          <div class="search-container">
            <el-input v-model="searchInput" placeholder="请输入搜索内容" class="input-with-select">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="全部" value="0"></el-option>
                <el-option label="标题" value="1"></el-option>
                <el-option label="作者" value="2"></el-option>
                <el-option label="内容" value="3"></el-option>
              </el-select>
              <el-button slot="append" @click="onNewsSearch">搜索</el-button>
            </el-input>
          </div>
        </el-col>
        <el-col class="right" :sm="2" :md="2" :lg="2" :xl="1">
          <el-button icon="el-icon-plus" type="primary" @click="handelAddNews">添加文章</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="news-wrapper">
      <el-row>
        <el-col :sm="24" :md="22" :lg="20" :xl="18">
          <el-card>
            <el-table
              :header-cell-style="{'background':'#3389FF','color':'#fff'}"
              :data="tableData"
              style="width: 100%"
              :border="true"
            >
              <el-table-column label="标题" prop="title"></el-table-column>
              <el-table-column label="作者" prop="author"></el-table-column>
              <el-table-column label="显示" prop="name"></el-table-column>
              <el-table-column label="发布日期" prop="createDate"></el-table-column>
              <el-table-column label="置顶" width="50px" prop="name"></el-table-column>
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
      searchInput: '',
      searchData: {
        title: '',
        author: '',
        newsContent: ''
      },
      select: '',
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,

      tableData: []
    }
  },
  created() {
    this.getNewsList(this.currentPage, this.pageSize, this.searchData)
  },
  methods: {
    onNewsSearch() {
      switch (this.select) {
        case '0':
          this.resetSearchData()
          this.getNewsList(this.currentPage, this.pageSize, this.searchData)
          break
        case '1':
          this.searchData.title = this.searchInput
          this.getNewsList(this.currentPage, this.pageSize, this.searchData)
          break
        case '2':
          this.searchData.author = this.searchInput
          this.getNewsList(this.currentPage, this.pageSize, this.searchData)
          break
        case '3':
          this.searchData.newsContent = this.searchInput
          this.getNewsList(this.currentPage, this.pageSize, this.searchData)
          break

        default:
          this.$message.error('请选择搜索类型')
          break
      }
    },
    resetSearchData() {
      this.searchData = {
        title: '',
        author: '',
        newsContent: ''
      }
    },
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({
        path: '/news/update',
        query: {
          id: row.id
        }
      })
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
    handelAddNews() {
      this.$router.push({
        path: '/news/add'
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
    getNewsList(pageNum, pageSize, searchData) {
      const formData = Object.assign(searchData, {
        pageNum,
        size: pageSize
      })
      newsList(formData).then(res => {
        console.log(res)
        const { code, message, results } = res
        if (code !== '200') {
          this.$message.error(message)
        } else {
          this.tableData = results.result
          this.totalPage = results.totalElements
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.news {
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

  .news-wrapper {
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
