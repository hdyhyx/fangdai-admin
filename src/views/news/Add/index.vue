<template>
  <div class="news">
    <div class="title">新建文章</div>
    <div class="content">
      <el-row>
        <el-col :sm="24" :md="22" :lg="20" :xl="18">
          <el-card>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="标题">
                <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
              </el-form-item>
              <el-form-item label="作者">
                <el-input v-model="form.author" style="width:200px" placeholder="请输入文章作者"></el-input>
              </el-form-item>
              <el-form-item label="是否精选">
                <el-select v-model="form.Optimization" placeholder="请选择文章是否精选">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="是否显示">
                <el-select v-model="form.region" placeholder="请选择是否显示" style="width:200px">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否置顶">
                <el-select v-model="form.region" placeholder="请选择文章是否置顶">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>-->
              <div class="ide-wrapper">
                <Tinymce v-model="form.newsContent" :height="300" />
              </div>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="resetNewsForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { addNews } from '@/api/news'
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      form: {
        title: '', //标题
        author: '', //作者
        newsContent: '', //内容
        Optimization: '0' //是否精选
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form.title === '') {
        return this.$message.error('请输入标题')
      }
      this.insetNews(this.form)
    },
    insetNews(news) {
      addNews(news)
        .then(result => {
          const { code, message } = result
          if (code !== '200') {
            this.$message.error(message)
          } else {
            this.$message.success('添加成功')
            this.resetNewsForm()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    resetNewsForm() {
      this.form = {
        title: '', //标题
        author: '', //作者
        content: '', //内容
        Optimization: '0' //是否精选
      }
    }
  }
}
</script>

<style scoped lang="scss">
.news {
  padding: 20px;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .content {
    margin-top: 20px;
  }
  .ide-wrapper {
    margin: 20px 10px;
  }
}
</style>
