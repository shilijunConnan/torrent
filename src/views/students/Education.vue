<template>
    <el-container class="education">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <!-- part1 -->
         <el-row class="row_items">
             <el-col :span="10"><hr></el-col>
             <el-col :span="4" style="text-align:center">学籍信息</el-col>
             <el-col :span="10"><hr></el-col>
         </el-row>
         <br>
         <el-row style="align-items: flex-start;">
             <el-col :span="1"></el-col>
             <el-col :span="19">
                 <el-row class="row_items">
                        <el-col :span="2">学号：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">姓名：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">性别：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>
                 </el-row>
                 <el-row class="row_items">
                        <el-col :span="2">民族：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">出生日期：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">籍贯：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>
                 </el-row>
                 <el-row class="row_items">
                        <el-col :span="2">政治面貌：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">所在院系：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">专业：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>
                 </el-row>
                 <el-row class="row_items">
                        <el-col :span="2">所在年级：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">培养层次：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>

                        <el-col :span="2">学生类别：</el-col>
                        <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="2"></el-col>
                 </el-row>
                 <el-row class="row_items">
                        <el-col :span="3">预计毕业时间：</el-col>
                        <el-col :span="4"><el-input :disabled='edu1_status' placeholder="请联系学校修改"></el-input></el-col>
                        <el-col :span="17"></el-col>
                 </el-row>
                 <br>
                 <el-row class="row_items">
                        <el-col :span="4"></el-col>
                        <el-col :span="6"><el-button type="primary" plain>申请变更</el-button></el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="6"><el-button type="success" plain>提交审核</el-button></el-col>
                        <el-col :span="4"></el-col>
                 </el-row>
             </el-col>

             <el-col :span="3"><img src='https://tse3-mm.cn.bing.net/th/id/OIP-C.VMgGW9LHGwME1RucKlGmhwHaKd?w=125&h=180&c=7&r=0&o=5&pid=1.7'>
             
            <br><br><el-button :disabled='edu1_status'>上传</el-button>
             </el-col>
             <el-col :span="1"></el-col>
             
        </el-row>
        <br><br>
        <!-- part2 -->
        <el-row class="row_items">
             <el-col :span="10"><hr></el-col>
             <el-col :span="4" style="text-align:center">联系方式</el-col>
             <el-col :span="10"><hr></el-col>
         </el-row>
         <br>
        <el-row class="row_items">
            <el-col :span="1"></el-col>
            <el-col :span="2">联系电话：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>

            <el-col :span="1"></el-col>
            <el-col :span="2">联系邮箱：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
            
            <el-col :span="1"></el-col>
            <el-col :span="2">家庭电话：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <el-row class="row_items">
            <el-col :span="1"></el-col>
            <el-col :span="2">家庭地址：</el-col>
            <el-col :span="8"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>

            <el-col :span="13"></el-col>
        </el-row>
        <br>
        <el-row class="row_items">
            <el-col :span="4"></el-col>
            <el-col :span="6"><el-button type="primary" plain>申请变更</el-button></el-col>
            <el-col :span="4"></el-col>
            <el-col :span="6"><el-button type="success" plain>提交审核</el-button></el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <br><br>
        <!-- part3 -->
        <el-row class="row_items">
             <el-col :span="10"><hr></el-col>
             <el-col :span="4" style="text-align:center">工作信息</el-col>
             <el-col :span="10"><hr></el-col>
         </el-row>
         <br>
        <el-row class="row_items">
            <el-col :span="1"></el-col>
            <el-col :span="2">工作单位：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>

            <el-col :span="1"></el-col>
            <el-col :span="2">单位电话：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
            
            <el-col :span="1"></el-col>
            <el-col :span="2">单位地址：</el-col>
            <el-col :span="4"><el-input disabled placeholder="请联系学校修改"></el-input></el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <br>
        <el-row class="row_items">
            <el-col :span="4"></el-col>
            <el-col :span="6"><el-button type="primary" plain>申请变更</el-button></el-col>
            <el-col :span="4"></el-col>
            <el-col :span="6"><el-button type="success" plain>提交审核</el-button></el-col>
            <el-col :span="4"></el-col>
        </el-row>
      </el-main>
      <el-footer><bottom-1></bottom-1></el-footer>
    </el-container>
</template>

<script>
import {ref} from 'vue'
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'

export default{
    name:'Education',
    props:{
        
    },
    components:{
        Header1,Bottom1
    },
    setup(props,ctx){
        let edu1_status=ref(false)
        return{
            edu1_status
        }
    }
}
</script>

<style lang='scss' scoped>
.education {
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        background-color: #000000;
    }
    main{
        color: black;
        margin-top: 60px;
        .input_item{
            width: 100%;margin: 20px;
            line-height: 50px;
            input,select,option,button{
                width: 100%;
            }
        }
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}
.row_items{
        align-items: center;
        margin-bottom: 30px ;
        
    }
img{
            // width:160px;
            // height: 240px;
    width:100%;
    height: 100%;
}   
button{
    width: 100%;
} 
</style>