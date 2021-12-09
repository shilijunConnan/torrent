<template>
    <el-row style="align-items: center; ">
        <h1>专业技能</h1> &ensp;&ensp;&ensp;
    </el-row><br>
    <skill-one></skill-one>
    <br><br><hr>
</template>

<script>
import SkillOne from './mainResumeComponents/SkillOne.vue'
export default{
    name:'MainResumeSkill',
    props:{

    },
    components:{
SkillOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>