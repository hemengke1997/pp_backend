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
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="itime" label="添加时间"></el-table-column>
      <el-table-column prop="utime" label="更新时间"></el-table-column>
      <el-table-column label="操作" class-name="small-padding fixed-width" align="center" v-slot="scope">
          <el-button size="mini" type="primary" @click="handleUpdate(scope.$index,scope.row)">详细</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </el-table-column>
    </el-table>

    <Pagination :total="10" />
    
    <el-dialog
      :title="dialogStatus==='create' ? '添加类型':'修改类型'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :center="true"
      width="26%"
      top="250px"
    >
      <el-form :model="form" ref="dataForm" :rules="rules" label-position="right" label-width="120px" :status-icon="true">
        <el-form-item label="类型名称" prop="name" style="width:80%">
          <el-input v-model="form.name"></el-input>
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
  name: "newstype",
  components: { Pagination },
  data() {
    return {
      list: [
        {
          id:123456,
          type:'攻略',
          itime:456456431325,
          utime:456123123121,
        },
        {
          id:123456,
          type:'攻略',
          itime:456456431325,
          utime:456123123121,
        },
        {
          id:123456,
          type:'攻略',
          itime:456456431325,
          utime:456123123121,
        },
        {
          id:123456,
          type:'攻略',
          itime:456456431325,
          utime:456123123121,
        },
      ],
      form: {
        name:''
      },
      rules:{
          name:{required:true,message:'请输入类型名称',trigger:'blur'}
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
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
