<template>
    <el-row style="align-items: center; ">
        <h1>语言能力</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <language-one></language-one>
    <br><br><hr>
</template>

<script>
import LanguageOne from './mainResumeComponents/LanguageOne.vue'
export default{
    name:'MainResumeLanguage',
    props:{

    },
    components:{
LanguageOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>