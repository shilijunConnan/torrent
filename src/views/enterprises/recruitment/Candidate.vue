<template>
  <el-table :data="candidates">
    <el-table-column label="学号" property="studentId"></el-table-column>
    <el-table-column label="学校" property="school"></el-table-column>
    <el-table-column label="Operations" min-width="250px">
      <template #default="">
        <el-button size="mini" @click="toResume">查看简历</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Candidate",
  props: {},
  components: {},
  setup(props, ctx) {
    let candidates = [
      { studentId: "10001", school: "中南财经政法大学", education: "本科" },
      { studentId: "10002", school: "中南财经政法大学", education: "硕士" },
      { studentId: "10003", school: "中南财经政法大学", education: "博士" },
      { studentId: "10004", school: "中南财经政法大学", education: "MBA" },
    ];
    let toResume=()=>{
      window.open('/enterprises/oneResume','_blank')
    }
    return {
      toResume,
      candidates,
    };
  },
};
</script>

<style lang='scss' scoped>
</style>