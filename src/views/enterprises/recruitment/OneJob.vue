<template>
<div class="job">
    <el-row class="row-item">
        <el-col :span="6">岗位名</el-col>
        <el-col :span="18"><el-input placeholder="请输入职位名"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">工作地点</el-col>
        <el-col :span="18"><el-input placeholder="请输入工作地点"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">工作经验</el-col>
        <el-col :span="18"><el-input placeholder="请输入工作经验"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">学历要求</el-col>
        <el-col :span="18"><el-input placeholder="请输入要求"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">职位类型</el-col>
        <el-col :span="18"><el-input placeholder="请输入职位类型"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">招聘人数</el-col>
        <el-col :span="18"><el-input placeholder="请输入招聘人数"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">薪资下限</el-col>
        <el-col :span="18"><el-input placeholder="请输入薪资下限"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">薪资上限</el-col>
        <el-col :span="18"><el-input placeholder="请输入上限"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">岗位描述</el-col>
        <el-col :span="18"><el-input placeholder="请输入描述标签"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">岗位职责</el-col>
        <el-col :span="18"><el-input placeholder="请输入岗位职责" type="textarea"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">岗位要求</el-col>
        <el-col :span="18"><el-input placeholder="请输入岗位要求" type="textarea"/></el-col>
    </el-row>
    <el-row class="row-item">
        <el-col :span="6">岗位福利</el-col>
        <el-col :span="18"><el-input placeholder="请输入岗位福利" type="textarea"/></el-col>
    </el-row>
    <br><br>
    <el-row class="row-item">
        <el-col :span="24"><el-button type='primary' style="width:100%">保存</el-button></el-col>
    </el-row>
</div>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'OneJob',
    props:{
        editType:{
            type:Number
        }
    },
    components:{

    },
    emits:['yourself'],
    setup(props,ctx){
        let closeBox=()=>{
            ctx.emit('yourself',false)
        }
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    align-items: center;
    margin:10px 0;
}
</style>