<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" class="filter-item" plain icon="el-icon-plus">添加</el-button>
      <el-button
        type="primary"
        class="filter-item"
        style="margin-left:50px"
        plain
        icon="el-icon-download"
        :loading="true"
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
      <el-table-column prop="name" label="推荐位标识"></el-table-column>
      <el-table-column prop="name" label="类型"></el-table-column>
      <el-table-column prop="address" label="对应ID"></el-table-column>
      <el-table-column prop="address" label="对应图片"></el-table-column>
      <el-table-column prop="address" label="排序" sortable></el-table-column>
      <el-table-column label="操作" class-name="small-padding fixed-width" align="center">
        <template>
          <el-button size="mini" type="primary" @click="handleUpdate">详细</el-button>
          <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination :total="10" />
    <el-dialog
      title="修改推荐"
      :visible.sync="dialogVisible"
      close-on-press-escape
      :close-on-click-modal="false"
      :center="true"
      width="30%"
    >
      <el-form :model="form" ref="dataForm" :rules="rules" :label-position="right">
        <el-form-item label="所属推荐位" prop="recommend">
          <el-select v-model="form.position">
            <el-option label="热门商品" value="hot"></el-option>
            <el-option label="首页banner" value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="form.type">
            <el-option label="banner内容" value="1"></el-option>
            <el-option label="商品道具" value="2"></el-option>
            <el-option label="新闻资讯" value="3"></el-option>
            <el-option label="游戏攻略" value="4"></el-option>
            <el-option label="图片推荐" value="5"></el-option>
            <el-option label="视频推荐" value="6"></el-option>
            <el-option label="公告内容" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="对应表id" prop="tableID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="排序(从大到小)" prop="sort">
          <el-input v-model="form.sort"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      form: {
        position: "",
        type: "",
        id: 0,
        sort: 0
      },
      rules:{
          recommend:[{required:true,trigger:'blur'}],
          type: [{required:true,trigger:'blur'}],
          tableID:[{required:true,message:'请输入对应表ID!',trigger:'change'}],
          sort:[{required:true,message:'请输入排序数字!',trigger:'change'}]
      },
      tableKey: 0,
      listLoading: false,
      dialogVisible: false
    };
  },
  methods: {
    handleUpdate() {
      this.dialogVisible = true;
    },
    handleDelete() {},
    //   el-table自带的一个方法 当排序顺序改变的时候触发
    sortChange() {}
  }
};
</script>

<style lang="scss" scoped>
</style>
