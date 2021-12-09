<template>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 证书名称：</el-col>
    <el-col :span="20">
        <el-input placeholder="证书名称"></el-input>
    </el-col>
    <el-col :span="2"> </el-col>
</el-row>
<el-row class="global_row_items globa_text_font">
    <el-col :span="2"> 证书时间：</el-col>
    <el-col :span="8">
        <el-select v-model="val" placeholder="证书时间" style="width:100%">
            <el-option
            v-for="item in level1"
            :key="item"
            :label="item"
            :value="item"
            >
            </el-option>
        </el-select>
    </el-col>
    <el-col :span="2"> </el-col>
    <el-col :span="2">证书级别：</el-col>
    <el-col :span="8">
        <el-select v-model="val" placeholder="获奖级别" style="width:100%">
            <el-option
            v-for="item in level1"
            :key="item"
            :label="item"
            :value="item"
            >
            </el-option>
        </el-select>
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
    name:'PriceOne',
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