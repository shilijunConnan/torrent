<template>
<br><br>
<el-row style="align-items:center">
    <el-col :span="3">
        <el-button type='primary'   @click="refuse(0,0)">新建职位</el-button>
    </el-col>
    <el-col :span="3">
        <el-button type='warning'>一键完成</el-button>
    </el-col>
    <el-col :span="3">
        <el-button type='danger'>一键删除</el-button>
    </el-col>
    <el-col :span="2">
      <el-icon title="刷新表格" size="20" @click="refresh"><refresh /></el-icon>
    </el-col>
    <el-col :span="5">
    </el-col>
    <el-col :span="8">
        <el-input
        v-model="input3"
        placeholder="请输入关键字查询"
        class="input-with-select"
        >
            <template #append>
                <el-button>
                    <el-icon size="20px">
                        <search />
                    </el-icon>
                </el-button>
            </template>
        </el-input>
    </el-col>
</el-row>
<br>
  <el-table
    :data="tableData"
    style="width: 100%"
    stripe
    border 
    highlight-current-row
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
  >
    <!-- highlight-current-row 设置单选-->
    <el-table-column type="selection" width="50px" />
    <el-table-column type="index" width="50px"  />
    <el-table-column label="Date" width="150px" >
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name"  width="150px"  />
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip
      width="150px" 
    />
    <el-table-column label="Operations"  min-width="250px" >
      <template #default="scope">
        <el-button size="mini"  @click="candy(scope.$index, scope.row.uid)"
          >查看</el-button>
          <el-button size="mini" type='primary' @click="refuse(scope.$index, scope.row.uid)"
          >编辑</el-button>
          <el-button size="mini" type='warning'
          >完成</el-button>
          <el-button size="mini" type='danger'
          >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br><br>
  <div class="block" style="text-align:center">
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  <br><br>
<el-dialog v-model="visible1" title='编辑职位' width="60%">
    <one-job @yourself='myself' :editType='editType'></one-job>
</el-dialog>
<el-dialog v-model="visible2" title='查看候选人' width="60%">
    <candidate></candidate>
</el-dialog>
</template>


<script>
import { ref ,inject} from "vue";
import {Search,Refresh} from '@element-plus/icons'
import OneJob from "@/views/enterprises/recruitment/OneJob.vue";
import Candidate from "@/views/enterprises/recruitment/Candidate.vue";
import { useRouter } from 'vue-router' 

export default {
  name: "Publishing",
  props: {},
  components: {
      Search,Refresh,
      OneJob,Candidate
  },
  setup(props, ctx) {
    let router=useRouter()
    let visible1=ref(false)
    let visible2=ref(false)
    let editType=ref('')
    const ceshi = inject("reload");
    console.log('refresh')
    let refresh=()=>{
      ceshi()
    }
    let tableData = [
      {
        uid:1,
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid:1,
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
          uid:1,
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
          uid:1,
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {uid:1,
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {uid:1,
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {uid:1,
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    let myself=(val)=>{
            visible1.value = val;
           ceshi()
        }
    let refuse=(index,row)=> {
            visible1.value = true;
            editType.value=row
        }
    let candy=(index,row)=> {
            visible2.value = true;
        }
    let input3=ref('')
    let multipleSelection = [];
    function handleCurrentChange(val) {
    //   this.currentRow = val;
      console.log(val.date)
    }
    function handleSelectionChange(val) {
      multipleSelection = val
      console.log(multipleSelection)
    }
    let handleEdit=(index,row)=>{
      let routeData = router.resolve({ path: '/admin/company/check', query: {check_status:2, uid:row.uid } });
      window.open(routeData.href, '_blank');
    }
    return {
      editType,
      visible1,
      visible2,
      input3,
      multipleSelection,
      tableData,
      handleCurrentChange,
      handleSelectionChange,
      handleEdit,
      refuse,
      myself,
      refresh,
      candy
    };
  },
};
</script>

<style lang='scss' scoped>

</style>