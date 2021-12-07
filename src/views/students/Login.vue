<template>
    <el-container class="login">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <el-row>
              <el-col :span="8"></el-col>
              <el-col :span="1">学校：</el-col>
              <el-col :span="7">
                  <el-select v-model="val" placeholder="请选择学校" class=" input_item">
                        <el-option
                        v-for="item in userSchool"
                        :key="item"
                        :label="item"
                        :value="item"
                        >
                        </el-option>
                    </el-select>
              </el-col>
              <el-col :span="8"></el-col>
          </el-row>
          <el-row>
              <el-col :span="8"></el-col>
              <el-col :span="1">学号：</el-col>
              <el-col :span="7">
                    <el-input v-model="userId" placeholder="请输入学号"  class="input_item"/>
              </el-col>
              <el-col :span="8"></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"></el-col>
                <el-col :span="1">密码：</el-col>
                <el-col :span="7">
                        <el-input v-model="userPassword" placeholder="请输入密码"  class="input_item"/>   
                </el-col>
                <el-col :span="8"></el-col>
            </el-row>
            <el-row>
                <el-col :span="9"></el-col>
                <el-col :span="7">                   
                        <el-button  class="input_item">登录</el-button>
                </el-col>
                <el-col :span="8"></el-col>
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
    name:'Login',
    props:{
        
    },
    components:{
        Header1,Bottom1
    },
    setup(props,ctx){
        let userId=ref('')
        let userPassword=ref('')
        let val=ref('')
        let userSchool=ref([
            '中南财经政法大学','武汉大学'
        ])
        return{
userId,userPassword,userSchool,val
        }
    }
}
</script>

<style lang='scss' scoped>
.login {
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
        height: 500px;
        row{
            margin: 20px;
        }
        .input_item{
            width: 100%;
        }
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}
</style>