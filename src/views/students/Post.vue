<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/students/home/post/delivered">已投递</el-menu-item>
    <el-menu-item index="/students/home/post/checked">被查看</el-menu-item>
    <el-menu-item index="/students/home/post/refused">被拒绝</el-menu-item>
    <el-menu-item index="/students/home/post/interview">面试邀请</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref,onMounted} from 'vue'
import MainPostDelivered from '@/components/students/mains/MainPostDelivered.vue' 
import MainPostChecked from '@/components/students/mains/MainPostChecked.vue' 
import MainPostRefused from '@/components/students/mains/MainPostRefused.vue' 
import MainPostInterview from '@/components/students/mains/MainPostInterview.vue'
export default{
    name:'Post',
    props:{

    },
    components:{
        MainPostDelivered,
        MainPostChecked,
        MainPostRefused,
        MainPostInterview
    },
    setup(props,ctx){
        return{
            MainPostChecked
        }
    }
}
</script>

<style lang='scss' scoped>

</style>