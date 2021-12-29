<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>项目经历</h3></el-col>
</el-row>
<div v-for="(item,index) in project" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.timestart}} &ensp;&ensp;—&ensp;&ensp; {{item.timeend}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="17">{{item.name}}</el-col>
</el-row>
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">项目描述：</el-col>
    <el-col :span="20">{{item.desc}}</el-col>
    <el-col :span="1"></el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeProject',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let project=[
            {timestart:'2016-09-01',timeend:'2020-06-30',name:'信息系统开发与设计',desc:'好耍问哈傻傻的就发数据'},
            {timestart:'2017-09-01',timeend:'2022-06-30',name:'信息系统开发与设计',desc:'好耍问哈傻傻的就发数据'}
        ]
        return{
project
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>