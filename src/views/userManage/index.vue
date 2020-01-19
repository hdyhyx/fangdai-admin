<template>
  <div class="user">
    <div class="head-wrapper">
      <el-row>
        <el-col :sm="6" :md="7" :lg="5" :xl="9">
          <div class="title">用户管理</div>
        </el-col>
        <el-col :sm="14" :md="12" :lg="12" :xl="7">
          <div class="search-container">
            <el-input v-model="input3" placeholder="请输入手机号" class="input-with-select">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="全部" value="0"></el-option>
                <el-option label="7天" value="1"></el-option>
                <el-option label="30天" value="2"></el-option>
                <el-option label="180天" value="3"></el-option>
              </el-select>
              <el-button slot="append">搜索</el-button>
            </el-input>
          </div>
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
            >
              <el-table-column label="登录手机" prop="date"></el-table-column>
              <el-table-column label="登录密码" prop="name"></el-table-column>
              <el-table-column label="旧密码" prop="name"></el-table-column>
              <el-table-column label="用户权限" prop="name"></el-table-column>
              <el-table-column align="right" min-width="100px">
                <template slot="header" slot-scope="scope">
                  <div>操作</div>
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    icon="el-icon-edit"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                  >查看</el-button>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
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
export default {
  data() {
    return {
      input3: '',
      select: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  padding: 0 20px;
  .head-wrapper {
    padding: 20px 0;
    .table-head {
      background: red;
    }
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
