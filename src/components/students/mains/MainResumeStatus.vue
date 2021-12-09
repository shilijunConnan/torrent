<template>
    <el-row style="align-items: center; ">
        <h1>求职状态</h1>   &ensp;&ensp;&ensp;必填
    </el-row><br>
     <!-- style="align-items: center;" -->
    <el-row class="global_row_items globa_text_font">
        <el-col :span="2">求职状态:</el-col>
        <el-col :span="10">
            <el-select v-model="val" placeholder="请选择求职状态" style="width:100%">
                <el-option
                v-for="item in findStatus"
                :key="item"
                :label="item"
                :value="item"
                >
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="10"></el-col>
        <el-col :span="2" class="global_right"><el-button type='primary'>保存</el-button></el-col>  
    </el-row>
    <br><br><hr>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'MainResumeStatus',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let findStatus=ref([
            '在校-找工作中','在校-暂不找工作','在校-看看机会'
        ])
        let val=ref()
        return{
findStatus,val
        }
    }
}
</script>

<style lang='scss' scoped>
// .global_right{
//     text-align: right;
// }
</style>