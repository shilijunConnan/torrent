<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>学生干部经历</h3></el-col>
</el-row>
<div v-for="(item,index) in cadre" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">职位：</el-col>
    <el-col :span="3">{{item.name}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="2">时间：</el-col>
    <el-col :span="14">{{item.timestart}} &ensp;&ensp;—&ensp;&ensp; {{item.timeend}}</el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeCadre',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let cadre=[
            {name:'英语',timestart:'2016-09-01',timeend:'2020-06-30'},
            {name:'德语',timestart:'2016-09-01',timeend:'2020-06-30' }
        ]
        return{
cadre
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>