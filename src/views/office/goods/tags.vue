<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" class="filter-item" plain icon="el-icon-plus" @click="handleCreate">添加</el-button>
      <el-button
        type="primary"
        class="filter-item"
        style="margin-left:50px"
        plain
        icon="el-icon-download"
        :loading="false"
      >导出为EXCEL</el-button>
    </div>
    <el-table
      :data="list"
      :key="tableKey"
      v-loading="listLoading"
      border
      style="width: 100%"
      fit
      highlight-current-row
      @sort-change="sortChange"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="标签名"></el-table-column>
      <el-table-column prop="color" label="颜色">
        <template v-slot="scope">
          <div :style="'max-width:100px;height:25px;background-color:'+scope.row.color"/>
        </template>
      </el-table-column>
      <el-table-column prop="icon" label="图标" v-slot="scope">
        <el-popover placement="right" trigger="click" v-if="scope.row.icon">
          <el-image
            :src="scope.row.icon"
            style="height:30px;width:240px"
            fit="contain"
            slot="reference"
          >
            <div class="image-slot" slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image :src="scope.row.icon"></el-image>
        </el-popover>
        <span v-else>暂无图片</span>
      </el-table-column>
      <el-table-column label="操作" class-name="small-padding fixed-width" align="center" v-slot="scope">
          <el-button size="mini" type="primary" @click="handleUpdate(scope.$index,scope.row)">详细</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </el-table-column>
    </el-table>

    <Pagination :total="10" />
    
    <el-dialog
      :title="dialogStatus==='create' ? '添加标签':'修改标签'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :center="true"
      width="20%"
    >
      <el-form :model="form" ref="dataForm" :rules="rules" label-position="right" label-width="90px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" style="width:190px"></el-input>
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="form.color" style="width:190px" type="color"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <img :src="form.icon" alt="" title="点击删除图片" style="display:inline-block;vertical-align:middle;line-height:100%" @click="form.icon=undefined" v-if="form.icon">
          <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :with-credentials="true"
          >
            <i class="el-icon-plus avatar-uploader-icon" style="display:inline-block;vertical-align:middle;line-height:100%;font-size:28px" />
          </el-upload>
        </el-form-item>
      </el-form> 
      <template v-slot:footer class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: "Content",
  components: { Pagination },
  data() {
    return {
      list: [
        {
          id: 456132123,
          name: "标签1",
          color: '#000',
          icon: require("@/assets/logo.png")
        },
        {
          id: 1432532,
          name: "标签2",
          color: '#000',
          icon: require("@/assets/logo.png")
        },
        {
          id: 1432532,
          name: "标签2",
          color: '#000',
          icon: require("@/assets/logo.png")
        },
        {
          id: 1432532,
          name: "标签2",
          color: '#000',
          icon: require("@/assets/logo.png")
        }
      ],
      form: {
        name: "",
        color: "#fff",
        icon:""
      },
      rules:{
          name:[{required:true,trigger:'blur',message:'请输入标签名称'}],
      },
      tableKey: 0,
      listLoading: false,
      dialogVisible: false,
      dialogStatus:'create'  //添加记录
    };
  },
  methods: {
    handleUpdate() {
      this.dialogVisible = true;
      this.dialogStatus = 'add'
    },
    handleDelete(index,row) {
      this.$confirm('确认删除?').then(()=>{
        this.deleteData(row)
      })
    },
    deleteData(index,row){
      const tempData = Object.assign({},row)
      this.list.splice(index,1)
    },
    //   el-table自带的一个方法 当排序顺序改变的时候触发
    sortChange() {},
    handleCreate() {
      this.dialogStatus = 'create'
      this.dialogVisible = true
    },
    beforeAvatarUpload(){

    },
    handleAvatarSuccess(){

    }
  },
};
</script>

<style lang="scss" scoped>
</style>
