<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index='/enterprises/index/signatory/under'>待签约</el-menu-item>
    <el-menu-item index='/enterprises/index/signatory/during'>签约中</el-menu-item>
    <el-menu-item index='/enterprises/index/signatory/passed'>签约成功</el-menu-item>
    <el-menu-item index='/enterprises/index/signatory/failed'>签约失败</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Signatory',
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