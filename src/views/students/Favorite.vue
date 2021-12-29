<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/students/home/favorite/position">职位</el-menu-item>
    <el-menu-item index="/students/home/favorite/company">公司</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
import MainFavoritePosition from '@/components/students/mains/MainFavoritePosition.vue' 
import MainFavoriteCompany from '@/components/students/mains/MainFavoriteCompany.vue' 
export default{
    name:'Favorite',
    props:{

    },
    components:{
MainFavoritePosition,MainFavoriteCompany
    },
    setup(props,ctx){
    
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>