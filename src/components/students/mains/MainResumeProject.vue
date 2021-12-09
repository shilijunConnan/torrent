<template>
    <el-row style="align-items: center; ">
        <h1>项目经历</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <project-one></project-one>
    <br><br><hr>
</template>

<script>
import ProjectOne from './mainResumeComponents/ProjectOne.vue'
export default{
    name:'MainResumeProject',
    props:{

    },
    components:{
ProjectOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>