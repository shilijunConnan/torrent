<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>工作经历</h3></el-col>
</el-row>
<div v-for="(item,index) in work" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.timestart}} &ensp;&ensp;—&ensp;&ensp; {{item.timeend}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="4">{{item.company}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">{{item.industry}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">{{item.salary}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">{{item.position}}</el-col>
    <el-col :span="1"></el-col>
</el-row>
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">工作描述：</el-col>
    <el-col :span="20">{{item.desc}}</el-col>
    <el-col :span="1"></el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeWork',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let work=[
            {timestart:'2016-09-01',timeend:'2020-06-30',company:'华为有限公司',position:'java开发',salary:'10k',industry:'互联网',desc:'好耍问哈傻傻的就发数据'},
            {timestart:'2017-09-01',timeend:'2022-06-30',company:'华为有限公司',position:'前端开发',salary:'10k',industry:'互联网',desc:'好耍问哈傻傻的就发数据'}
        ]
        return{
work
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>