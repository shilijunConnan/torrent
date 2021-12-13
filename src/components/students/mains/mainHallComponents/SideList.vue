<template>
<div class="side-list-one">
   <el-popover
    placement="right"
    :title="items.level1"
    :width="600"
    trigger="hover"
  >
  <template #content>
        <slot>
            {{items.level2}}
        </slot>
    </template>
    <template #reference>
        <el-row style="width:120px;margin-left:20px">
            <el-col :span="22">{{items.level1}}</el-col>
            <el-col :span="2" class='text-right'><el-icon><arrow-right /></el-icon></el-col>
        </el-row>
    </template>
  </el-popover>
</div>
</template>

<script>
import {ref} from 'vue'
import {ArrowRight} from '@element-plus/icons'

export default{
    name:'SideList',
    props:{
       items:{
           type:Object
       }
     },
    components:{
        ArrowRight,
    },
    setup(props,ctx){
        
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.side-list-one{
    height: 3em;
    margin: 5px;
    font-size: 14px;
    &:hover{
        cursor: pointer;
        color: rgb(72, 154, 248);
    }
}
</style>