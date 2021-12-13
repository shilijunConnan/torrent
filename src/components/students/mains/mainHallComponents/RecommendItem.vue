<template>
  <el-row :gutter="-50">
        <el-card shadow="always" style='margin:10px 30px;width:150px;height:180px;text-align:left' class="card_my globa_text_font">
          <span class='card-one'>{{items.job}}<br></span>
          <span class='card-one'>{{items.salary}}<br></span>
          <span class='card-one'> {{items.name}}<br><br></span>
          <span class='card-one'>{{items.address}}<br><br></span>
          <div class=" globa_text_font globa_text_link global_right">查看详情>></div>
        </el-card>
  </el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'RecommendItem',
    props:{
        items:{
            type:Object
        }
    },
    components:{

    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.globa_text_font{
    font-size: 1.2*$global_font;
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
    .card-one{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
}

</style>