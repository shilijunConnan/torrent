<template>
    <el-row style="align-items: center; ">
        <h1>学生干部经历</h1> &ensp;&ensp;&ensp;
    </el-row><br>
    <leader-one></leader-one>
    <br><br><hr>
</template>

<script>
import LeaderOne from './mainResumeComponents/LeaderOne.vue'
export default{
    name:'MainResumeLeader',
    props:{

    },
    components:{
LeaderOne
        
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>