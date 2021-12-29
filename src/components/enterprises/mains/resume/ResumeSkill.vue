<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>专业技能</h3></el-col>
</el-row>
<div v-for="(item,index) in skill" :key="index" >
<el-row class="row-item">
    <el-col :span="1"></el-col>
    <el-col :span="2">技能：</el-col>
    <el-col :span="3">{{item.name}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">使用时长：</el-col>
    <el-col :span="3">{{item.long}}</el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">熟练程度</el-col>
    <el-col :span="3">{{item.skilled}}</el-col>
    <el-col :span="4"></el-col>
</el-row>
<br>
</div>

</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeSkill',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let skill=[
            {name:'java',long:'2年',skilled:'良好'},
            {name:'vue',long:'2年',skilled:'良好'}
        ]
        return{
skill
        }
    }
}
</script>

<style lang='scss' scoped>
.row-item{
    margin:10px 0;
}
</style>