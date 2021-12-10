<template>
<el-row v-for="(item,index) in comps" :key="index" class='globa_text_font globa_text_margin'>
    <el-col :span="22">{{item.name}}{{item.job}}</el-col>
    <el-col :span="2" class="global_right globa_text_font globa_text_link">{{item.stat}}</el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'MainInterviewEd',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let comps=ref([
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9,stat:'签约成功'},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9,stat:'签约失败'},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9,stat:'签约失败'}
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