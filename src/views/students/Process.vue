<template>
  <el-tabs >
    <el-tab-pane label="待确认">
        <main-interview-pre></main-interview-pre>
    </el-tab-pane>
    <el-tab-pane label="待签约">
        <main-interview-ing></main-interview-ing>
    </el-tab-pane>
    <el-tab-pane label="已完成">
        <main-interview-ed></main-interview-ed>
    </el-tab-pane>
  </el-tabs>
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