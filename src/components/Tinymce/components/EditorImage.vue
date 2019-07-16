<template>
  <div class="upload-container">
    <el-button
      :style="{background:color,borderColor:color}"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click=" dialogVisible=true"
    >upload</el-button>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <el-upload
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        class="editor-slide-upload"
        action="https://httpbin.org/post"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">Click upload</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="handleSubmit">Confirm</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'EditorSlideUpload',
    props: {
        color:{
            type:String,
            default:'#1890ff'
        }
    },
    data() {
        return {
            dialogVisible:false,
            listObj: {},
            fileList: []
        }
    },
    methods:{
        handleRemove() {

        },
        handleSuccess() {

        },
        beforeUpload() {

        },
        handleSubmit() {

        }
    }
};
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>