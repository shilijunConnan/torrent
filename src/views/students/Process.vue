<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/students/home/process/pre">待确认</el-menu-item>
    <el-menu-item index="/students/home/process/ing">待签约</el-menu-item>
    <el-menu-item index="/students/home/process/ed">已完成</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>
<script>
import {ref} from 'vue'
import MainInterviewPre from '@/components/students/mains/MainInterviewPre.vue' 
import MainInterviewIng from '../../components/students/mains/MainInterviewIng.vue'
import MainInterviewEd from '../../components/students/mains/MainInterviewEd.vue'
export default{
    name:'Process',
    props:{

    },
    components:{
        MainInterviewPre,
        MainInterviewIng,
        MainInterviewEd,
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>