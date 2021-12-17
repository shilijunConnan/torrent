<template>
  <br />
  <el-row style="align-items: center">
    <el-col :span="3">
        <el-dropdown>
            <span class="el-dropdown-link">
            <el-button>一键操作</el-button>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>解除封禁</el-dropdown-item>
                <el-dropdown-item>限制服务</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-col>
    <el-col :span="2">
      <el-icon title="刷新表格" size="20" @click="refresh"><refresh /></el-icon>
    </el-col>
    <el-col :span="11"> </el-col>
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
  <br />
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
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-dropdown size="mini">
            <span class="el-dropdown-link">
            <el-button size="mini">处理操作</el-button>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>解除封禁</el-dropdown-item>
                <el-dropdown-item>限制服务</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
  <br /><br />
  <div class="block" style="text-align: center">
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  <br /><br />
</template>


<script>
import { ref, inject } from "vue";
import { Search, Refresh } from "@element-plus/icons";
import { useRouter } from "vue-router";

export default {
  name: "Banned",
  props: {},
  components: {
    Search,
    Refresh,
  },
  setup(props, ctx) {
    let router = useRouter();
    let visible = ref(false);
    let date = ref("");
    const ceshi = inject("reload");
    console.log("refresh");
    let refresh = () => {
      ceshi();
    };
    let options=[
        {
          value: 'Option1',
          label: '解除封禁',
        },
        {
          value: 'Option2',
          label: '限制服务'
        }
      ];
    let tableData = [
      {
        uid: 1,
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        uid: 1,
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    let myself = (val) => {
      visible.value = val;
      ceshi();
    };
    let refuse = (index, row) => {
      visible.value = true;
      date.value = row.date;
    };
    let input3 = ref("");
    let multipleSelection = [];
    function handleCurrentChange(val) {
      //   this.currentRow = val;
      console.log(val.date);
    }
    function handleSelectionChange(val) {
      multipleSelection = val;
      console.log(multipleSelection);
    }
    let handleEdit = (index, row) => {
      let routeData = router.resolve({
        path: "/admin/company/check",
        query: { check_status: 0, uid: row.uid },
      });
      window.open(routeData.href, "_blank");
    };
    return {
      date,
      visible,
      options,
      input3,
      multipleSelection,
      tableData,
      handleCurrentChange,
      handleSelectionChange,
      handleEdit,
      refuse,
      myself,
      refresh,
    };
  },
};
</script>

<style lang='scss' scoped>
</style>