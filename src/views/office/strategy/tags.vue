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
      <el-table-column prop="tag" label="标签名称"></el-table-column>
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
      :title="dialogStatus==='create' ? '添加标签':'修改标签'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :center="true"
      width="380px"
      top="200px"
    >
      <el-form
        :model="form"
        ref="dataForm"
        :rules="rules"
        label-position="right"
        label-width="95px"
      >
        <el-form-item label="标签名称" prop="tag">
            <el-input v-model="form.tag" style="width:190px"></el-input>
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
  name: "strategy-tags",
  components: { Pagination },
  data() {
    return {
      list: [
        {
          id: 123456,
          tag:'111'
        },
        {
          id: 123456,
          tag:"测试分类2",
        },
        {
          id: 123456,
          tag:"测试分类3",
        },
      ],
      form: {
        id:undefined,
        tag:'11'
      },
      rules: {
        tag: { required: true, message: "请输入标签名称", trigger: "blur" }
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
