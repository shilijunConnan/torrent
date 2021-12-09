<template>
    <el-row style="align-items: center; ">
        <h1>工作|实习经历</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <work-one></work-one>
    <br><br><hr>
</template>

<script>
import WorkOne from './mainResumeComponents/WorkOne.vue'
export default{
    name:'MainResumeWork',
    props:{

    },
    components:{
WorkOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>