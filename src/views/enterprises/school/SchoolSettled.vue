<template>
<br><br>
<el-row style="align-items:center">
    <el-col :span="3">
        <el-button type='primary'>一键终止</el-button>
    </el-col>
    <el-col :span="2">
      <el-icon title="刷新表格" size="20" @click="refresh"><refresh /></el-icon>
    </el-col>
    <el-col :span="11">
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
    <el-table-column type="selection" style="width: 10%" />
    <el-table-column type="index" style="width: 10%" />
    <el-table-column label="Date" style="width: 20%">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name" style="width: 30%" />
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip
      style="width: 10%"
    />
    <el-table-column label="Operations" style="width: 10%">
      <template #default="scope">
        <el-button size="mini" @click="toSchool(scope.$index, scope.row)"
          >查看</el-button>
          <el-button size="mini" type='primary' @click="handleEdit(scope.$index, scope.row)"
          >终止合作</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br><br>
  <div class="block" style="text-align:center">
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  <br><br>
</template>


<script>
import { ref ,inject} from "vue";
import {Search,Refresh} from '@element-plus/icons'
import { useRouter } from 'vue-router' 

export default {
  name: "SchoolSettled",
  props: {},
  components: {
      Search,Refresh,
      
  },
  setup(props, ctx) {
    let router=useRouter()
    let visible=ref(false)
    let date=ref('')
    const ceshi = inject("reload");
    console.log('refresh')
    let refresh=()=>{
      ceshi()
    }
    let tableData = [
      {
        uid:1,
        date: "2016-05-03",
        name: "中南财经政法大学",
        address: "南湖大道182号",
      },
      {
        uid:1,
        date: "2016-05-02",
        name: "中南财经政法大学",
        address: "南湖大道182号",
      },
      {
          uid:1,
        date: "2016-05-04",
        name: "中南财经政法大学",
        address: "南湖大道182号",
      }
    ];
    let myself=(val)=>{
            visible.value = val;
           ceshi()
        }
    let refuse=(index,row)=> {
            visible.value = true;
            date.value=row.date
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
    let toSchool=(index,row)=>{
      let routeData = router.resolve({ path: '/admin/school/check', query: {check_status:2, uid:row.uid } });
      window.open(routeData.href, '_blank');
    }
    return {
      date,
      visible,
      input3,
      multipleSelection,
      tableData,
      handleCurrentChange,
      handleSelectionChange,
      toSchool,
      refuse,
      myself,
      refresh
    };
  },
};
</script>

<style lang='scss' scoped>
</style>