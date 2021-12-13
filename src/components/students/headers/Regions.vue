<template>
<el-collapse style="width:100%;margin:0 auto">
    <el-collapse-item style="z-index: 999; background-color: white;opacity:1;margin:0">
        <template #title>
            <el-scrollbar>
                地点&ensp;
                    <span v-for="(item,index) in location" :key="index">
                        <el-link @click.stop="wordContact('location',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in salary" :key="index">
                        <el-link @click.stop="wordContact('salary',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in education" :key="index">
                        <el-link @click.stop="wordContact('education',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in experience" :key="index">
                        <el-link @click.stop="wordContact('experience',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in kind" :key="index">
                        <el-link @click.stop="wordContact('kind',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in company" :key="index">
                        <el-link @click.stop="wordContact('company',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
                    <span v-for="(item,index) in scale" :key="index">
                        <el-link @click.stop="wordContact('scale',item)">{{item}}<el-icon><delete /></el-icon>&ensp;</el-link>
                    </span>
            </el-scrollbar>
             
        </template>
    <el-row >
        <el-col v-for="(item,index) in cities" :key="index" :span="2"  @click="wordContact('location',item)">
            <el-link>{{item}}</el-link>
        </el-col>
    </el-row>
    <el-row style="align-items: center; margin:10px 0 0  0;" class="el-menu-demo">
        <el-col :span="4">其他国家或者地区：</el-col>
        <el-col :span="10"><el-input placeholder="请输入地区"></el-input></el-col>
        <el-col :span="10"></el-col>
    </el-row>
    </el-collapse-item>
</el-collapse>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {Delete} from '@element-plus/icons'
export default{
    
    name:'Regions',
    props:{

    },
    components:{
        Delete
    },
    setup(props,ctx){
        let store=useStore()
        let location=store.state['location']
        let salary=store.state['salary']
        let education=store.state['education']
        let experience=store.state['experience']
        let kind=store.state['kind']
        let company=store.state['company']
        let scale=store.state['scale']
        // console.log(location)
        let cities=ref([
        '北京','上海','广州','深圳','杭州','苏州','武汉','南京','重庆','成都',
        '天津','无锡','长沙','郑州','宁波','北京','上海','广州','深圳','杭州',
        '苏州','武汉','南京','重庆','成都','天津','无锡','长沙','郑州','宁波'
        ])
        let wordContact=(types,word)=>{
            let params={
            'param1':types,
            'param2':word
            }
            // console.log(params)
            if(!store.state[types].includes(word)){
            store.commit('addList',params)
            }else{
            store.commit('deleteList',params)
            }
        }
        let test=()=>alert(999)
        return{
            cities,wordContact,test,
            location,salary,education,experience,kind,company,scale
        }
    }
}
</script>

<style lang='scss' scoped>
.el-menu-demo{
  z-index: 999;
  background-color: white;
  opacity: 1;
}
</style>