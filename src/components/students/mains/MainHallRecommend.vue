<template>
<el-row  v-for="(item,index) in comps" :key="index">
   <recommend-item :items='item'></recommend-item>
</el-row>
</template>

<script>
import {ref} from 'vue'
import RecommendItem from './mainHallComponents/RecommendItem.vue'
export default{
    name:'MainHallRecommend',
    props:{
        
    },
    components:{
RecommendItem
    },
    setup(props,ctx){
        let comps=ref([
            {name:'bbb有限公司',job:'ccc职位',salary:'1w-1.4w',address:'中南财经政法大学中南财经政法大学中南财经政法大学',position_id:1},
            {name:'bbb有限公司',job:'ccc职位',salary:'1w-1.4w',address:'中南财经政法大学',position_id:2},
            {name:'bbb有限公司',job:'ccc职位',salary:'1w-1.4w',address:'中南财经政法大学',position_id:3},
            {name:'bbb有限公司',job:'ccc职位',salary:'1w-1.4w',address:'中南财经政法大学',position_id:4},
        ])
        return{
comps
        }
    }
}
</script>

<style lang='scss' scoped>

</style>