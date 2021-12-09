<template>
    <el-row style="align-items: center; ">
        <h1>教育经历</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <education-one></education-one>
    <education-one></education-one>
    <br><br><hr>
</template>

<script>
import EducationOne from './mainResumeComponents/EducationOne.vue'
export default{
    name:'MainResumeEducation',
    props:{

    },
    components:{
EducationOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>