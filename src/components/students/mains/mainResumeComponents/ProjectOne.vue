<template>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 项目名称：</el-col>
    <el-col :span="20">
        <el-input placeholder="请填写项目名称" v-model="nameProject"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 项目时间：</el-col>
    <el-col :span="8">
        <el-date-picker 
        v-model="startProject" 
        type="date" 
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD" 
        placeholder="开始时间">
        </el-date-picker>
    </el-col>
    <el-col :span="4"> <hr></el-col>
    <el-col :span="8">
            <el-date-picker 
            v-model="endProject" 
            type="date" 
            placeholder="结束时间" 
            format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"></el-date-picker>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 项目描述:</el-col>
    <el-col :span="20">
        <el-input
        maxlength="300"
        placeholder="请输入职位描述"
        show-word-limit
        type="textarea"
        v-model="descProject"
    />
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">    
        <el-col :span="20"></el-col>
        <el-col :span="2" class="global_right"><el-button type='danger' @click="deleteProject">删除</el-button></el-col> 
        <el-col :span="2" class="global_right"><el-button type='primary' @click="saveProject">保存</el-button></el-col>  
</el-row>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
import {ElMessage} from 'element-plus'
export default{
    name:'ProjectOne',
    props:{
        infoProject:{
            type:Object,
            required:false
        },
        isNull:{
            type:Number,
            required:true
        }
    },
    components:{
        ElMessage
    },
    setup(props,ctx){
        // 初始化页面
        let nameProject=ref('');
        let startProject=ref('');
        let endProject=ref('');
        let descProject=ref('');
        let idProject=ref();
        let stuUniCode=ref();
        if (props.isNull!=0){
            let info=props.infoProject;
            nameProject.value=info.projectName;
            startProject.value=info.projectBeginTime;
            endProject.value=info.projectEndTime;
            descProject.value=info.projectDetail;
            idProject.value=info.id;
        }
        // /api/resume/update/project/history
        // 删除项目
        let deleteProject=()=>{

        }
        // 保存项目
        let saveProject=()=>{
            let param={
                stuUniCode:20211220001,
                projectName:nameProject.value,
                projectBeginTime:startProject.value,
                projectEndTime:endProject.value,
                projectDetail:descProject.value
            }
            console.log(param)
            axios({
                method: "get",
                url: "http://localhost:9001/torrent-zuel-recruitment/api/resume/insert/project/history",
                params: param,
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                }
            }).then((response) => {
                if(response.status==200){
                      ElMessage.success('Oops, this is a error message.')
                }
                else{
                    ElMessage({
                        message: '保存失败！',
                        type: 'erro',
                    })
                }
                
            }).catch(function (error) {
                console.log(error)
            });
        }
        return{
            // vars
            nameProject,startProject,endProject,descProject,idProject,stuUniCode,
            // function
            deleteProject,saveProject
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