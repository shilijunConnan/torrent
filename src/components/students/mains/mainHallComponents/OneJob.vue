<template>
<div class="hall-job" @click="toJob">
    <el-row class="one-item">
        <el-col :span="8" class="job-text">
            {{one.job}}
        </el-col>
        <el-col :span="8">      
        </el-col>
        <el-col :span="8" class="company-text" @click.stop="toCompany">
            {{one.company}}
        </el-col>
    </el-row>
    <el-row  class="two-item">
        <el-col :span="3" class="salary-text">
            15k-20k
        </el-col>
        <el-col :span="3">  {{one.local}}    
        </el-col>
        <el-col :span="1">|</el-col>
        <el-col :span="2">  {{one.exp}}   
        </el-col>
        <el-col :span="1">|</el-col>
        <el-col :span="2">  {{one.edu}}    
        </el-col>
        <el-col :span="9"></el-col>
        <el-col :span="3" class="text-right">{{one.kind}}</el-col>    
    </el-row>
    <el-row  class="three-item">
        <el-col :span="20">
            <span v-for="(item,index) in one.label" :key='index' class="one-label">
                {{item}}
            </span>
        </el-col>
        <el-col :span="4" class="text-right">
            <el-icon :size="20" ><star color='#409eff'/></el-icon>&ensp;
            <el-button type="primary">一键申请</el-button>
    
        </el-col>    
    </el-row>
</div>
<hr>
</template>

<script>
import {ref} from 'vue'
import {Star,StarFilled} from '@element-plus/icons'
export default{
    name:'OneJob',
    props:{
        one:{
            type:Object
        }

    },
    components:{
Star,StarFilled
    },
    setup(props,ctx){
        let toJob=()=>{
            window.open('/students/job','_blank')
        }
        let toCompany=()=>{
            window.open('/students/company','_blank')
        }
        
        // console.log(props.one)
        return{
            toJob,toCompany
        }
    }
}
</script>

<style lang='scss' scoped>
.hall-job{
    margin-bottom:10px;
    font-size: 14px;
    padding:10px 0;
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 5px 2px rgb(228, 224, 224);
    }
    .one-item{
         margin:10px 20px;
         align-items: center;
        .job-text{
            font-size: 16px;
            text-align: left;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .company-text{
            text-align: right;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            &:hover{
                color:#409eff ;
            }
        }
     }
    .two-item{
        color: rgb(85, 82, 82);
        margin:10px 20px;
        align-items: center;
        font-size: 12px;
        .salary-text{
        font-size: 20px;
        color: rgba(255, 0, 0, 0.801);
        text-align: left;
        }
    }
    .three-item{
        color: rgb(170, 162, 162);
        margin:10px 20px;
        align-items: center;     
        .one-label{
            margin: 0 15px 0 0;
            font-size: 10px;
        }
        
    }
    .text-right{
            text-align: right;
        }
    
}
</style>