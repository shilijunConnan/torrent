<template>
    <el-container class="login">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <el-row  class="input_item">
              <el-col :span="8"></el-col>
              <el-col :span="1">学校：</el-col>
              <el-col :span="7">
                  <el-select v-model="val" placeholder="请选择学校" style="width:100%">
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
          <el-row  class="input_item">
              <el-col :span="8"></el-col>
              <el-col :span="1">学号：</el-col>
              <el-col :span="7">
                    <el-input v-model="userId" placeholder="请输入学号"/>
              </el-col>
              <el-col :span="8"></el-col>
            </el-row>
            <el-row  class="input_item">
                <el-col :span="8"></el-col>
                <el-col :span="1">密码：</el-col>
                <el-col :span="7">
                        <el-input v-model="userPassword"  placeholder="请输入密码，初始密码为身份证后六位"/>   
                </el-col>
                <el-col :span="8"></el-col>
            </el-row>
            <el-row  class="input_item">
                <el-col :span="9"></el-col>
                <el-col :span="2">                   
                        <el-checkbox
                        v-model="checked_students"
                        label="记住登录"
                        size="medium"
                        ></el-checkbox>
                </el-col>
                <el-col :span="3"></el-col>
                <el-col :span="2"><router-link style="color:black;text-decoration: none;" to='/students/login'>忘记密码？</router-link></el-col>
                <el-col :span="8"></el-col>
            </el-row>
            <el-row  class="input_item">
                <el-col :span="9"></el-col>
                <el-col :span="7">                   
                        <el-button  type="primary">登录</el-button>
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
        let checked_students=ref(false)
        let userSchool=ref([
            '中南财经政法大学','武汉大学'
        ])
        return{
userId,userPassword,userSchool,val,checked_students
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
</style>