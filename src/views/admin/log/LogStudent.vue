<template>
<br><br>
<el-row style="align-items:center">
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
    <el-col :span="1"></el-col>
    <el-col :span="2">
      <el-icon title="刷新表格" size="20" @click="refresh"><refresh /></el-icon>
    </el-col>
    <el-col :span="14">
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
    <el-table-column type="index"/>
    <el-table-column label="Date" property='dateI'/>
    <el-table-column property="name" label="Name"/>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip
    />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >查看日志</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br><br>
  <div class="block" style="text-align:center">
    <el-pagination background  layout="prev, pager, next" :total="100"></el-pagination>
  </div>
  <br><br>
</template>


<script>
import { ref ,inject} from "vue";
import {Search,Refresh} from '@element-plus/icons'
import RefuseDetail from "@/components/admin/mains/RefuseDetail.vue";
import { useRouter } from 'vue-router' 

export default {
  name: "LogStudent",
  props: {},
  components: {
      Search,Refresh,
      RefuseDetail
  },
  setup(props, ctx) {
    const ceshi = inject("reload");
    console.log('refresh')
    let refresh=()=>{
      ceshi()
    }
    let tableData = [
      {
        uid:1,
        dateI: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid:1,
        dateI: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      }
    ]
    let input3=ref('')
    let router=useRouter()
    let handleEdit=(index,row)=>{
      let routeData = router.resolve({ path: '/admin/log/check', query: {ssc_status:1, uid:row.uid } });
      window.open(routeData.href, '_blank');
    }
    return {
      input3,
      tableData,
      handleEdit,
      refresh
    };
  },
};
</script>

<style lang='scss' scoped>
</style>