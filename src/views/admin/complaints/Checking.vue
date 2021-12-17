<template>
<br><br>
<el-row style="align-items:center">
  <el-col :span="3">
        <el-button type='primary'>一键封禁</el-button>
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
    <el-table-column type="selection" />
    <el-table-column type="index"  />
    <el-table-column label="Date">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name"/>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip
    />
    <el-table-column label="Operations" width="400">
      <template #default="scope">
        <el-button size="mini" @click="toCheck(scope.$index, scope.row)"
          >查看原因</el-button>
        &ensp;&ensp;
        <el-select v-model="input3" placeholder="Select" size='mini'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
    </el-table-column>
  </el-table>
  <br><br>
  <div class="block" style="text-align:center">
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  <el-dialog v-model="visible" title="查看投诉原因" @close='closeDialog'>
    <check-complaints :complaint_id='complaint_id'></check-complaints>
  </el-dialog>
  <br><br>
</template>


<script>
import { ref ,inject} from "vue";
import {Search,Refresh} from '@element-plus/icons'
import CheckComplaints from "@/views/admin/complaints/CheckComplaints.vue";
import { useRouter } from 'vue-router' 

export default {
  name: "Pass",
  props: {},
  components: {
      Search,Refresh,
      CheckComplaints
  },
  setup(props, ctx) {
    let router=useRouter()
    let visible=ref(false)
    const ceshi = inject("reload");
    let refresh=()=>{
      ceshi()
    }
    let tableData = [
      {
        uid:1,
        date: "2016-05-03",
        name: "zhangsan",
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
    let options=[
        {
          value: 'Option1',
          label: '不予处理',
        },
        {
          value: 'Option2',
          label: '封禁公司7天',
        },
        {
          value: 'Option3',
          label: '封禁公司30天',
        },
        {
          value: 'Option4',
          label: '永久封禁公司',
        }
      ];
    // 弹出投诉详情
    let complaint_id=ref(0)
    let toCheck=(index,row)=>{
      complaint_id.value=row.uid
      visible.value=true
    }
    let closeDialog=(val)=>{
          visible.value = val;
          ceshi()
        }
        // 多选
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
    
    return {
      visible,
      options,
      input3,
      multipleSelection,
      tableData,
      handleCurrentChange,
      handleSelectionChange,
      toCheck,
      closeDialog,
      refresh,
      complaint_id
    };
  },
};
</script>

<style lang='scss' scoped>
</style>