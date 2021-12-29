<template>
<el-row>
        <el-col :span="1"></el-col>
        <el-col :span="4"><el-image :src="studentPerson.user" style="width:150px;height:200px"></el-image></el-col>
        <el-col :span="18">
          <h3>{{studentPerson.name}}</h3>
          <el-row>
            <el-col :span="2">{{studentPerson.sex}}</el-col>
            <el-col :span="1">|</el-col>
            <el-col :span="2">{{studentPerson.age}}</el-col>
            <el-col :span="1">|</el-col>
            <el-col :span="2">{{studentPerson.graduate}}</el-col>
            <el-col :span="1">|</el-col>
            <el-col :span="2">{{studentPerson.politics}}</el-col>
            <el-col :span="1">|</el-col>
            <el-col :span="3">{{studentPerson.address}}</el-col>
            <el-col :span="8"></el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="3">联系电话：</el-col>
            <el-col :span="20">{{studentPerson.phone}}</el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="3">邮箱：</el-col>
            <el-col :span="20">{{studentPerson.email}}</el-col>
          </el-row>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumePerson',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let studentPerson={
        user:'https://tse4-mm.cn.bing.net/th/id/OIP-C.twUmRNOeTHZwtyPqWWg_RQAAAA?w=166&h=236&c=7&r=0&o=5&pid=1.7',
        name:'卡Q因',
        sex:'男',
        age:'17',
        address:'日本东京',
        graduate:'1991',
        politics:'团员',
        phone:'15270987839'
        ,email:'2022@qq.com'
    }
        return{
studentPerson
        }
    }
}
</script>

<style lang='scss' scoped>

</style>