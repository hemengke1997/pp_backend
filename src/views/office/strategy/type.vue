<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button
        type="primary"
        class="filter-item"
        plain
        icon="el-icon-plus"
        @click="handleCreate"
      >添加</el-button>
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
      highlight-current-row
      @sort-change="sortChange"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="type" label="分类名称"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column
        label="操作"
        class-name="small-padding fixed-width"
        align="center"
        v-slot="scope"
      >
        <el-button size="mini" type="primary" @click="handleUpdate(scope.$index,scope.row)">详细</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </el-table-column>
    </el-table>

    <Pagination :total="10" />

    <el-dialog
      :title="dialogStatus==='create' ? '添加分类':'修改分类'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :center="true"
      width="380px"
      top="165px"
    >
      <el-form
        :model="form"
        ref="dataForm"
        :rules="rules"
        label-position="right"
        label-width="95px"
      >
        <el-form-item label="所属分类">
          <el-select v-model="form.type" placeholder="顶级分类" style="width:190px">
              <el-option label="测试分类" value="1"></el-option>
              <el-option label="测试分类" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" prop="type">
            <el-input v-model="form.type" style="width:190px"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
            <el-input v-model="form.sort" type="number" style="width:190px"></el-input>
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
          id: 123456,
          type:"测试分类1",
          sort:1
        },
        {
          id: 123456,
          type:"测试分类2",
          sort:1,
        },
        {
          id: 123456,
          type:"测试分类3",
          sort:4
        },
        {
          id: 123456,
          type:"测试分类4",
          sort:1
        }
      ],
      form: {
        id:undefined,
        type:'',
        sort:undefined
      },
      rules: {
        type: { required: true, message: "请输入分类名称", trigger: "blur" },
        sort:{required:true,message:"请设置排序"}
      },
      tableKey: 0,
      listLoading: false,
      dialogVisible: false,
      dialogStatus: "create" //添加记录
    };
  },
  methods: {
    handleUpdate() {
      this.dialogVisible = true;
      this.dialogStatus = "add";
    },
    handleDelete(index, row) {
      this.$confirm("确认删除?").then(() => {
        this.deleteData(row);
      });
    },
    deleteData(index, row) {
      const tempData = Object.assign({}, row);
      this.list.splice(index, 1);
    },
    //   el-table自带的一个方法 当排序顺序改变的时候触发
    sortChange() {},
    handleCreate() {
      this.dialogStatus = "create";
      this.dialogVisible = true;
    },
    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    beforeAvatarUpload(){}
  }
};
</script>

<style lang="scss">
</style>
