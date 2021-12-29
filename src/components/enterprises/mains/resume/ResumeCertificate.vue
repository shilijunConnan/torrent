<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>能力证书</h3></el-col>
</el-row>
<div v-for="(item,index) in certificate" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">证书名称：</el-col>
    <el-col :span="3">{{item.name}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">获得时间：</el-col>
    <el-col :span="3">{{item.long}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">证书级别：</el-col>
    <el-col :span="3">{{item.certificateed}}</el-col>
    <el-col :span="4"></el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeCertificate',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let certificate=[
            {name:'四级证书',long:'2017年',certificateed:'国家级'},
            {name:'六级证书',long:'2017年',certificateed:'国家级'}
        ]
        return{
certificate
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>