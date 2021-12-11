<template>
<el-collapse style="width:80%;margin:0 auto">
    <el-collapse-item title="地点">
    <el-row>
        <el-col v-for="(item,index) in cities" :key="index" :span="1" >
            <el-link>{{item}}</el-link>
        </el-col>
    </el-row>
    <el-row style="align-items: center; margin:10px 0;">
        <el-col :span="4">其他国家或者地区：</el-col>
        <el-col :span="10"><el-input placeholder="请输入地区"></el-input></el-col>
        <el-col :span="10"></el-col>
    </el-row>
    </el-collapse-item>
</el-collapse>
</template>

<script>
import {ref} from 'vue'
export default{
    
    name:'Regions',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let cities=ref([
        '北京','上海','广州','深圳','杭州','苏州','武汉','南京','重庆','成都',
        '天津','无锡','长沙','郑州','宁波','北京','上海','广州','深圳','杭州',
        '苏州','武汉','南京','重庆','成都','天津','无锡','长沙','郑州','宁波'
        ])
        return{
            cities
        }
    }
}
</script>

<style lang='scss' scoped>
// *{
//     align-items: center;
// }
</style>