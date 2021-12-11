
<template>
    <el-row style="align-items: center;">
       <el-col :span="24"> <h3>为您推荐这些职位</h3></el-col>
    </el-row>
    <main-maybe-position></main-maybe-position> 
    <el-row>
        <el-col :span="22"></el-col>
       <el-col :span="2"> <h5 class="globa_text_link">更多职位>></h5></el-col>
    </el-row> 
    <el-row style="align-items: center;">
       <el-col :span="24"> <h3>为您推荐这些公司</h3></el-col>
    </el-row> 
    <main-maybe-company></main-maybe-company>
    <el-row>
        <el-col :span="22"></el-col>
       <el-col :span="2"> <h5 class="globa_text_link">更多公司>></h5></el-col>
    </el-row>  
    <br>
</template>

<script>
import {ref} from 'vue'
import MainMaybePosition from '@/components/students/mains/MainMaybePosition.vue' 
import MainMaybeCompany from '@/components/students/mains/MainMaybeCompany.vue' 
export default{
    name:'Maybe',
    props:{

    },
    components:{
MainMaybePosition,MainMaybeCompany
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.globa_text_link:hover{
    cursor: pointer;
}
</style>