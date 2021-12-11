<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="item,index in comps" :key="index">
        <el-card shadow="always" style='margin:10px 0;' class="card_my globa_text_font">
          {{item.job}}<br>
          {{item.salary}}<br>
          {{item.name}}<br>
          {{item.address}}<br>
          <div class=" globa_text_font globa_text_link global_right">查看详情>></div>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'MainMaybePosition',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let comps=ref([
            {name:'bbb有限公司',job:'ccc职位',salary:'1w-1.4w',address:'中南财经政法大学',position_id:1},
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
.globa_text_font{
    font-size: 1.4*$global_font;
    line-height: 25px;
    
}
.globa_text_margin{
    margin-top: 20px;
    
}
.global_right{
    text-align: right;
}
.card_my{
    &:hover{
        transform: scale(1.1, 1.1);
    }
}
</style>