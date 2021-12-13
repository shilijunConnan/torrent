<template>
<one-job v-for="(item,index) in jobList" :key="index" :one='item'>
</one-job>
</template>

<script>
import {ref} from 'vue'
import OneJob from './mainHallComponents/OneJob.vue'
export default{
    name:'MainHallJob',
    props:{
        sort:{
            type:Number
        }
    },
    components:{
OneJob
    },
    setup(props,ctx){
        console.log(props.sort)
        let jobList=[
            {
                job:'java开发'
                ,company:'中国和世界的和有限公司'
                ,salary:'10k-15k'
                ,local:'武汉'
                ,edu:'本科'
                ,exp:'1-3年'  
                ,kind:'国企'
                ,label:[
                    'java','编程','mysql'
                ]  
            },
            {
                job:'java开发'
                ,company:'中国和世界的和有限公司'
                ,salary:'10k-15k'
                ,local:'武汉'
                ,edu:'本科'
                ,exp:'1-3年'  
                ,kind:'国企'
                ,label:[
                    'java','编程','mysql'
                ]  
            }
        ]
        return{
jobList
        }
    }
}
</script>

<style lang='scss' scoped>

</style>