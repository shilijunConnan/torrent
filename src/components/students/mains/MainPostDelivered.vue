<template>
<el-row v-for="(item,index) in comps" :key="index" class='globa_text_font globa_text_margin'>
    <el-col :span="24">{{item.name}}{{item.job}}</el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'MainPostDelivered',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let comps=ref([
            {name:'aaa有限公司',job:'aaa职位',name_id:1,job_id:9},
            {name:'aaa有限公司',job:'aaa职位',name_id:1,job_id:9},
            {name:'aaa有限公司',job:'aaa职位',name_id:1,job_id:9}
        ])
        return{
            comps
        }
    }
}
</script>

<style lang='scss' scoped>
// .global_row_items{
//     font-size: 14px;
//     align-items: center; 
//     // margin-top: 30px;   
// }
</style>