<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index='/enterprises/index/process/skill'>能力筛选</el-menu-item>
    <el-menu-item index='/enterprises/index/process/interview'>面试筛选</el-menu-item>
    <el-menu-item index='/enterprises/index/process/passed'>录取库</el-menu-item>
    <el-menu-item index='/enterprises/index/process/failed'>淘汰库</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Process',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>