<template>
    <el-row style="align-items: center; ">
        <h1>自我评价</h1> &ensp;&ensp;&ensp;
    </el-row><br>
    <el-row class="global_row_items">
        <el-col :span="20">
            <el-input
            maxlength="300"
            placeholder="请输入自我评价"
            show-word-limit
            type="textarea"
        />
        </el-col>
        <el-col :span="2"> </el-col>
         <el-col :span="2" class="global_right" style="text-align:right"><el-button type='primary'>保存</el-button></el-col>
    </el-row>
    <br><br><br>
</template>

<script>
import EducationOne from './mainResumeComponents/EducationOne.vue'
export default{
    name:'MainResumeSelf',
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