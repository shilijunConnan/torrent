<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index='/enterprises/index/resume/unchecked'>
            未查看
    </el-menu-item>
    <el-menu-item index='/enterprises/index/resume/passed'>通过</el-menu-item>
    <el-menu-item index='/enterprises/index/resume/failed'>淘汰</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Resume',
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