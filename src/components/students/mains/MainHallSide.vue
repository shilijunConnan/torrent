<template>
<el-row  v-for="(item,index) in lists" :key="index">
   <side-list :items='item'></side-list>
</el-row>
</template>

<script>
import {ref} from 'vue'
import SideList from './mainHallComponents/SideList.vue'
export default{
    name:'MainHallSide',
    props:{
        
    },
    components:{
SideList
    },
    setup(props,ctx){
        let lists=ref([
            {level1:"互联网/hu联网、联网",level2:"计算机软件"},
            {level1:"互联网",level2:"计算机软件"},
            {level1:"互联网",level2:"计算机软件"},
            {level1:"互联网",level2:"计算机软件"},
        ])
        return{
lists,
        }
    }
}
</script>

<style lang='scss' scoped>

</style>