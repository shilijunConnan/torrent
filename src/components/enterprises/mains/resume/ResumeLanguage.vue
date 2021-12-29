<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>语言能力</h3></el-col>
</el-row>
<div v-for="(item,index) in language" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">语种：</el-col>
    <el-col :span="3">{{item.name}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">听说能力：</el-col>
    <el-col :span="3">{{item.listen}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">读写能力：</el-col>
    <el-col :span="3">{{item.write}}</el-col>
    <el-col :span="4"></el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeLanguage',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let language=[
            {name:'英语',listen:'良好',write:'良好'},
            {name:'德语',listen:'良好',write:'良好'}
        ]
        return{
language
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>