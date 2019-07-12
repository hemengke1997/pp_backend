<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" plain icon="el-icon-plus" @click="handleCreate">添加</el-button>
      <el-button type="primary" plain icon="el-icon-download" :loading="downLoading" style="margin-left:50px">导出为EXCEL</el-button>
    </div>
    <el-table
      :data="list"
      :key="tableKey"
      v-loading="listLoading"
      border
      style="width:100%"
      fit
      highlight-current-row
      @sort-change="sortChange"
    >
      <el-table-column prop="id" label="标识符"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="introduce" label="简介"></el-table-column>
      <el-table-column
        label="操作"
        class-name="small-padding fixed-width"
        align="center"
        v-slot="scope"
      >
        <el-button size="mini" type="primary" @click="handleUpdate(scope.$index,scope.row)">详细</el-button>
        <el-button size="mini" type="danger" @click="hanldleDelete(scope.$index,scope.row)">删除</el-button>
      </el-table-column>
    </el-table>

    <Pagination :total="10"/>

    <el-dialog
      :title="dialogStatus==='create'?'添加分类':'修改分类'"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
      :center="true"
    >
      <el-form :model="form" label-width="150px" ref="dataForm" :rules="rules" label-position="top">
        <el-form-item label="标识符（英文，简短，不可重复）" prop="id">
          <el-input v-model='form.id'></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="introduce">
            <el-input v-model="form.introduce"></el-input>
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
import Pagination from '@/components/Pagination'
export default {
    components:{
        Pagination
    },
    data() {
        return {
            downLoading:false,
            tableKey:1,
            dialogStatus:'create',
            dialogVisible:false,
            listLoading:0,
            form:{
                id:undefined,
                name:undefined,
                introduce:undefined
            },
            list:[
                {
                    id:1,
                    name:'zhang',
                    introduce:'aaaaaaaaaa'
                },
                {
                    id:2,
                    name:'banner',
                    introduce:'bbbbbbb'
                },
                {
                    id:3,
                    name:'hot',
                    introduce:'ddddddddddd'
                }
            ],
            rules: {
                id:{required:true,trigger:'blur',message:'请输入标识符'},
                name:{required:true,trigger:'blur',message:'请输入名称'},
                introduce:{required:true,trigger:'blur',message:'请输入简介'}
            }
        }
    },
    methods:{
        handleUpdate(index,row){
            this.dialogVisible = true
            this.dialogStatus = 'edit'
        },
        hanldleDelete(index,row){

        },
        handleCreate(){
            // 1.打开dialog
            this.dialogVisible = true
            
        },
        sortChange(){

        }
    }
}
</script>
