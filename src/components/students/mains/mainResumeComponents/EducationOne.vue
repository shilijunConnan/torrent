<template>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 学校：</el-col>
    <el-col :span="8">
        <el-input placeholder="请填写学校名称"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
    <el-col :span="2">最高学历：</el-col>
    <el-col :span="8">
        <el-input placeholder="最高学历"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 所学专业：</el-col>
    <el-col :span="8">
            <el-input placeholder="所学专业"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
    <el-col :span="2">学历证书：</el-col>
    <el-col :span="8">
            <el-input placeholder="学历证书名称"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 在校时间：</el-col>
    <el-col :span="8">
            <el-input placeholder="入学时间"></el-input>
    </el-col>
    <el-col :span="4"> <hr></el-col>
    <el-col :span="8">
            <el-input placeholder="毕业时间"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
        
        <el-col :span="18"></el-col>
        <el-col :span="2" class="global_right"><el-button >新增</el-button></el-col> 
        <el-col :span="2" class="global_right"><el-button type='danger'>删除</el-button></el-col> 
        <el-col :span="2" class="global_right"><el-button type='primary'>保存</el-button></el-col>  
    </el-row>
</template>

<script>
import {ref} from 'vue'

export default{
    name:'EducationOne',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        
        let level1=ref([
            1,2,3,4
        ])
        let val=ref()
        return{
level1,val
        }
    }
}
</script>

<style lang='scss' scoped>
.global_row_items{
    align-items: center; 
    margin-bottom: 30px;   
}
</style>