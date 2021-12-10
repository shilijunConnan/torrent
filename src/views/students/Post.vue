<template>
  <el-tabs >
    <el-tab-pane label="已投递">
        <main-post-delivered></main-post-delivered>
    </el-tab-pane>
    <el-tab-pane label="被查看">
        <main-post-checked></main-post-checked>
    </el-tab-pane>
    <el-tab-pane label="被拒绝">
        <main-post-refused></main-post-refused>
    </el-tab-pane>
    <el-tab-pane label="面试邀请">
        <main-post-interview></main-post-interview>
    </el-tab-pane>
  </el-tabs>
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