<template>
<el-container class="check">
    <el-header><header-admin></header-admin></el-header>
    <el-main>
        <index-company-check></index-company-check>
        <br><br><br><br>
        <el-row v-if="check_status==0">
            <el-col :span="16"></el-col>
            <el-col :span="3"><el-button type='primary'>通过</el-button></el-col>
            <el-col :span="3"><el-button disabled type='danger'>已否决</el-button></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <el-row v-else-if="check_status==1">
            <el-col :span="16"></el-col>
            <el-col :span="3"><el-button disabled type='primary'>已通过</el-button></el-col>
            <el-col :span="3"><el-button @click="dialog_status = true" type='danger'>否决</el-button></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <el-row v-else>
            <el-col :span="16"></el-col>
            <el-col :span="3"><el-button type='primary'>通过</el-button></el-col>
            <el-col :span="3"><el-button @click="dialog_status = true" type='danger'>否决</el-button></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <br><br><br><br>
    </el-main>
    <el-footer><bottom-1></bottom-1></el-footer>
    <el-dialog v-model="dialog_status" title="否决原因" width="40%" center>
        <el-input placeholder="请输入原因" show-password v-model="reason" type="textarea" rows="4"/><br><br>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialog_status = false">取消</el-button>
            <el-button type="primary" @click="dialog_status = false">确定</el-button>
        </span>
        </template>
    </el-dialog>
</el-container>

</template>

<script>
import {ref} from 'vue'
import IndexCompanyCheck from '@/components/admin/mains/IndexCompanyCheck'
import HeaderAdmin from "@/components/admin/headers/HeaderAdmin.vue";
import Bottom1 from "@/components/students/bottoms/Bottom1.vue";
import { useRouter,useRoute} from 'vue-router' 
export default{
    name:'Check',
    props:{
    },
    components:{
        IndexCompanyCheck,HeaderAdmin,Bottom1
    },
    setup(props,ctx){
        
        let route=useRoute()
        let data=route.query
        console.log(data)
        let check_status=data.check_status
        let dialog_status=ref(false)
        let reason=ref('')

        return{
            check_status,dialog_status,reason
        }
    }
}
</script>

<style lang='scss' scoped>
.check {
  font-size: 14px;
  header {
    background-color: $global_green_color;
    border-bottom: 1px solid white;
  }
  footer{
    background-color: $global_green_color;
    height:100%;
  }
}
</style>