<template>
  <el-container class="home">
    <el-header><header-1></header-1></el-header>
    <el-main>
      <el-row>
        <el-col :span="3">
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="this.$route.path"
            router
          >
            <el-menu-item index="/students/home/resume">
              <el-icon><postcard /></el-icon>
              <span>我的简历</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><postcard /></el-icon>
                <span>投递记录</span>
              </template>
              <el-menu-item index="/students/home/post/delivered"
                >已投递</el-menu-item
              >
              <el-menu-item index="/students/home/post/checked"
                >被查看</el-menu-item
              >
              <el-menu-item index="/students/home/post/refused"
                >被拒绝</el-menu-item
              >
              <el-menu-item index="/students/home/post/interview"
                >面试邀请</el-menu-item
              >
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><document /></el-icon>
                <span>面试进程</span>
              </template>
              <el-menu-item index="/students/home/process/pre"
                >待确认</el-menu-item
              >
              <el-menu-item index="/students/home/process/ing"
                >待签约</el-menu-item
              >
              <el-menu-item index="/students/home/process/ed"
                >已完成</el-menu-item
              >
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><document /></el-icon>
                <span>我的收藏</span>
              </template>
              <el-menu-item index="/students/home/favorite/position"
                >职位</el-menu-item
              >
              <el-menu-item index="/students/home/favorite/company"
                >公司</el-menu-item
              >
            </el-sub-menu>
            <el-menu-item index="/students/home/maybe">
              <el-icon><magic-stick /></el-icon>
              <span>猜你想看</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="1"> </el-col>
        <el-col :span="20">
          <router-view v-if="isRouterAlive"></router-view>
        </el-col>
      </el-row>
    </el-main>
    <el-footer><bottom-1></bottom-1></el-footer>
  </el-container>
  <el-backtop
    style="
      text-align: center;
      bottom: 150px;
      left: 40px;
      color: green;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    "
  >
    <el-icon size="50px"><top /></el-icon>
  </el-backtop>
</template>

<script>
import { ref, nextTick, provide } from "vue";
import { useRouter } from "vue-router";
import Header1 from "@/components/students/headers/Header1.vue";
import Bottom1 from "@/components/students/bottoms/Bottom1.vue";
import Mains1 from "@/components/students/mains/Mains1.vue";
import {
  Postcard,
  MagicStick,
  StarFilled,
  Menu as IconMenu,
  Document,
  Top,
} from "@element-plus/icons";

export default {
  name: "Home",
  props: {},
  components: {
    Header1,
    Bottom1,
    Mains1,
    Top,
    Postcard,
    StarFilled,
    MagicStick,
    Document,
    IconMenu,
  },
  setup(props, ctx) {

    const router = useRouter();
    // console.log(router)
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    return {
      isRouterAlive
    };
  },
};
</script>

<style lang='scss' scoped>
.home {
  header {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 99;
    background-color: #000000;
  }
  main {
    margin-top: 60px;
    min-height: 500px;
  }
  footer {
    background-color: #000000;
    height: auto;
  }
}
</style>