<template>
  <el-container class="index">
    <el-header>
      <header-admin></header-admin>
    </el-header>
    <el-container>
      <el-row style="width: 100%">
        <el-col :span="spanWidth1">
          <div style="display:flex;align-items:flex-start">
              <el-menu
                class="el-menu-vertical-demo"
                :default-active="this.$route.path"
                :collapse="isCollapse"
                router
                
              >
              <el-menu-item index="" @click="changeCollapse">
                  <el-icon><fold /></el-icon>
                  <template #title>{{collapseMsg}}</template>
                </el-menu-item>
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><school /></el-icon>
                    <span>学校信息</span>
                  </template>
                  <el-menu-item index="/admin/index/school/under"
                    >待审核</el-menu-item
                  >
                  <el-menu-item index="/admin/index/school/pass"
                    >审核通过</el-menu-item
                  >
                  <el-menu-item index="/admin/index/school/failed"
                    >审核未通过</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><histogram /></el-icon>
                    <span>企业信息</span>
                  </template>
                  <el-menu-item index="/admin/index/company/under"
                    >待审核</el-menu-item
                  >
                  <el-menu-item index="/admin/index/company/pass"
                    >审核通过</el-menu-item
                  >
                  <el-menu-item index="/admin/index/company/failed"
                    >审核未通过</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><headset /></el-icon>
                    <span>投诉信息</span>
                  </template>
                  <el-menu-item index="/admin/index/complaints/checking"
                    >待处理</el-menu-item
                  >
                  <el-menu-item index="/admin/index/complaints/checked"
                    >已处理</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><lock /></el-icon>
                    <span>账号处理</span>
                  </template>
                  <el-menu-item index="/admin/index/handle/studentsContainer/handleStudentNormal"
                    >学生账号</el-menu-item
                  >
                  <el-menu-item index="/admin/index/handle/companyContainer/handleCompanyNormal"
                    >公司账号</el-menu-item
                  >
                  <el-menu-item index="/admin/index/handle/schoolContainer/handleSchoolNormal"
                    >学校账号</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><list /></el-icon>
                    <span>日志信息</span>
                  </template>
                  <el-menu-item index="/admin/index/log/student"
                    >学生日志</el-menu-item
                  >
                  <el-menu-item index="/admin/index/log/company"
                    >公司日志</el-menu-item
                  >
                  <el-menu-item index="/admin/index/log/school"
                    >学校日志</el-menu-item
                  >
                </el-sub-menu>
              </el-menu>
          </div>
        </el-col>
        <el-col :span="spanWidth2">
          <br><br>
          <router-view v-if="isRouterAlive"></router-view>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
    </el-container>
    <el-footer><bottom-1></bottom-1></el-footer>
  </el-container>
</template>

<script>
import { ref, nextTick, provide } from "vue";
import HeaderAdmin from "@/components/admin/headers/HeaderAdmin.vue";
import Bottom1 from "@/components/students/bottoms/Bottom1.vue";
import {
  School,
  Histogram,
  Lock,
  List,
  Headset,
  Fold,
} from "@element-plus/icons";
export default {
  name: "home",
  props: {},
  components: {
    School,
    Histogram,
    Lock,
    List,
    Headset,
    Fold,
    HeaderAdmin,
    Bottom1
  },
  setup(props, ctx) {
    //控制局部刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    //控制折叠
    let isCollapse = ref(false);
    let collapseMsg=ref('点击收起');
    let spanWidth1=ref(4)
    let spanWidth2=ref(19)
    let changeCollapse = () => {
      isCollapse.value = !isCollapse.value;
      if (isCollapse.value){
        collapseMsg.value='点击展开'
        spanWidth1.value=2
        spanWidth2.value=21
      }else{
        collapseMsg.value='点击收起'
        spanWidth1.value=4
        spanWidth2.value=19
      }
    };
    return {
      isRouterAlive,
      isCollapse,
      changeCollapse,
      collapseMsg,
      spanWidth1,
      spanWidth2
    };
  },
};
</script>

<style lang='scss' scoped>
.index {
  font-size: 14px;
  min-height: 800px;
  header {
    background-color: $global_green_color;
    border-bottom: 1px solid white;
  }
  footer{
    background-color: $global_green_color;
    height:100%;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>