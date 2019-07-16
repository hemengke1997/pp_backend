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
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="name" label="图片名称"></el-table-column>
      <el-table-column label="封面图片" v-slot="scope">
        <el-popover placement="right" trigger="click" v-if="scope.row.pic">
          <el-image :src="scope.row.pic" style="height:30px;width:240px" fit="contain" slot="reference">
            <div class="image-slot" slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image :src="scope.row.pic"></el-image>
        </el-popover>
        <span v-else>暂无图片</span>
      </el-table-column>
      <el-table-column prop="itime" label="注册事件"></el-table-column>
      <el-table-column prop="utime" label="更新时间"></el-table-column>
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
      :title="dialogStatus==='create' ? '添加信息':'修改信息'"
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
        label-width="80px"
      >
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks" style="width:190px"></el-input>
        </el-form-item>
        <el-form-item label="图" prop="pic">
            <el-image :src="form.pic" v-if="form.pic">
                <div class="image-slot" slot="error">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="beforeAvatarUpload"
            style="display:inline-block;margin:0;padding:0;"
            >
                <i class="el-icon-plus avatar-uploader-icon" style="display:inline-block;vertical-align:middle;line-height:100%;font-size:30px" />
            </el-upload>
            <span v-if="!form.pic">图片大小限制：640*410</span>
        </el-form-item>
        <el-form-item label="链接">
            <el-input v-model="form.link" style="width:190px"></el-input>
        </el-form-item>
        <el-form-item label="协议（用于程序）">
            <el-input v-model="form.agreement" style="width:190px"></el-input>
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
          remarks: "测试",
          pic: require("@/assets/logo.png"),
          itime: 456456431325,
          utime: 456123123121
        },
        {
          id: 123456,
          remarks: "攻略",
          itime: 456456431325,
          utime: 456123123121,
          pic: require("@/assets/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"),
        },
        {
          id: 123456,
          remarks: "攻略",
          itime: 456456431325,
          utime: 456123123121,
          pic: "",
        },
        {
          id: 123456,
          remarks: "攻略",
          itime: 456456431325,
          utime: 456123123121,
          pic: "",
        }
      ],
      form: {
        remarks:"",
        pic:"",
        link:"",
        agreement:"",
        sort:0
      },
      rules: {
        remarks: { required: true, message: "请输入备注", trigger: "blur" },
        pic:{required:true,message:"请添加图片"},
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
