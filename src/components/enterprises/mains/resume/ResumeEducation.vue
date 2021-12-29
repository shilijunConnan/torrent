<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>教育经历</h3></el-col>
</el-row>
<el-row v-for="(item,index) in education" :key="index" class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.timestart}} &ensp;&ensp;—&ensp;&ensp; {{item.timeend}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.school}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.major}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="5">{{item.certificate}}</el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeEducation',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let education=[
            {timestart:'2016-09-01',timeend:'2020-06-30',school:'中南财经政法大学',major:'信管',certificate:'管理学学士'},
            {timestart:'2017-09-01',timeend:'2022-06-30',school:'中南财经政法大学',major:'电子信息',certificate:'硕士'}
        ]
        return{
education
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>