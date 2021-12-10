<template>
<el-row v-for="(item,index) in comps" :key="index" class='globa_text_font globa_text_margin'>
    <el-col :span="20">{{item.name}}{{item.job}}</el-col>
    <el-col :span="4" class="globa_text_link global_right" @click="for_reason(index)">查看原因>></el-col>
</el-row>
 
<el-dialog v-model="visible" title="添加用户">
    <post-refused-detail @yourself='myself' :uid='uid'></post-refused-detail>
</el-dialog>
</template>

<script>
import {ref} from 'vue'
import PostRefusedDetail from './mainPostComponents/PostRefusedDetail.vue'

export default{
    name:'MainPostDelivered',
    props:{

    },
    components:{
        PostRefusedDetail
    },
    emits:['myself'],
    setup(props,ctx){
        let msg=ref('zheshimsg')
        let visible=ref(false);
        let uid=ref(0)
        function for_reason(u_id) {
            visible.value = true;
            uid.value=u_id
        }
        let myself=(val)=>{
            visible.value = val;
        }
        let comps=ref([
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9},
            {name:'bbb有限公司',job:'ccc职位',name_id:1,job_id:9}
        ])
        return{
            uid,visible,for_reason,myself,comps
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