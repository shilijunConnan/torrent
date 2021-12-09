<template>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 公司名称：</el-col>
    <el-col :span="8">
        <el-input placeholder="请填写公司名称"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
    <el-col :span="2">所属行业：</el-col>
    <el-col :span="8">
        <el-input placeholder="所属行业"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 职位：</el-col>
    <el-col :span="8">
            <el-input placeholder="职位关键字"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
    <el-col :span="2">月薪：</el-col>
    <el-col :span="8">
            <el-input placeholder="月薪"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 在职时间：</el-col>
    <el-col :span="8">
            <el-input placeholder="开始时间"></el-input>
    </el-col>
    <el-col :span="4"> <hr></el-col>
    <el-col :span="8">
            <el-input placeholder="结束时间"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 职位描述:</el-col>
    <el-col :span="20">
        <el-input
        maxlength="100"
        placeholder="请输入职位描述"
        show-word-limit
        type="textarea"
    />
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
    name:'WorkOne',
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