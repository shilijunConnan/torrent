<template>
<el-row v-for="(item,index) in comps" :key="index" class='globa_text_font globa_text_margin'>
    <el-col :span="20">{{item.name}}{{item.job}}</el-col>
    <el-col :span="4" class="globa_text_link global_right">去面试>></el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'MainPostInterview',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let comps=ref([
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9}
        ])
        return{
            comps
        }
    }
}
</script>

<style lang='scss' scoped>
.globa_text_font{
    font-size: 1.4*$global_font;
    
}
.globa_text_margin{
    margin-top: 20px;
    
}
.global_right{
    text-align: right;
}
</style>
