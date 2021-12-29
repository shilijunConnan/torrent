<template>
  <el-container class="index">
    <el-header>
      <header-enterprises></header-enterprises>
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
                    <span>招聘信息</span>
                  </template>
                  <el-menu-item index='/enterprises/index/recruitment/publishing'>发布中</el-menu-item>
                  <el-menu-item index="/enterprises/index/recruitment/published">已完成</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><histogram /></el-icon>
                    <span>学校信息</span>
                  </template>
                  <el-menu-item index="/enterprises/index/school/settled">合作企业</el-menu-item>
                  <el-menu-item index="/enterprises/index/school/unsettled">入驻高校</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><headset /></el-icon>
                    <span>简历信息</span>
                  </template>
                  <el-menu-item index="/enterprises/index/resume/unchecked">未查看</el-menu-item>
                  <el-menu-item index="/enterprises/index/resume/passed">通过</el-menu-item>
                  <el-menu-item index="/enterprises/index/resume/failed">淘汰</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><lock /></el-icon>
                    <span>招聘进程</span>
                  </template>
                  <el-menu-item index="/enterprises/index/process/skill">能力筛选</el-menu-item>
                  <el-menu-item index="/enterprises/index/process/interview">面试筛选</el-menu-item>
                  <el-menu-item index="/enterprises/index/process/passed">录取库</el-menu-item>
                  <el-menu-item index="/enterprises/index/process/failed">淘汰库</el-menu-item>

                </el-sub-menu>
                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><list /></el-icon>
                    <span>三方签约</span>
                  </template>
                  <el-menu-item index="/enterprises/index/signatory/under">待签约</el-menu-item>
                  <el-menu-item index="/enterprises/index/signatory/during">签约中</el-menu-item>
                  <el-menu-item index="/enterprises/index/signatory/passed">签约成功</el-menu-item>
                  <el-menu-item index="/enterprises/index/signatory/failed">签约失败</el-menu-item>

                </el-sub-menu>
                <el-menu-item index="/enterprises/index/maybe"><el-icon><list /></el-icon><span>为您推荐</span></el-menu-item>
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
import HeaderEnterprises from "@/components/enterprises/headers/HeaderEnterprises.vue";
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
    HeaderEnterprises,
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
    background-color: $global_blue_color;
    border-bottom: 1px solid white;
  }
  footer{
    background-color: $global_blue_color;
    height:100%;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>