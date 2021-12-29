<template>
  <div class="login">
    <el-container>
      <el-header>
        <el-row style="align-items: center; padding: 20px 0">
          <el-col :span="4" style="text-align: right"
            ><img src="@/assets/logo2.png"
          /></el-col>
          <el-col :span="1"></el-col>
          <el-col :span="4" style="text-align: left"
            ><div class="slogan">TORRENT</div></el-col
          >
          <el-col :span="15"></el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="form-box" v-if="logType==1">
          <el-row class="row-item">
            <el-col :span="6">公司账号： </el-col>
            <el-col :span="18">
              <el-input
                type="text"
                placeholder="请输入授权手机号码接收验证码"
              ></el-input>
            </el-col>
          </el-row>
          <el-row class="row-item">
            <el-col :span="6">验证码：</el-col>
            <el-col :span="12"
              ><el-input type="text" placeholder="请输入验证码"></el-input
            ></el-col>
            <el-col :span="6" style="text-align: right">
              <el-button
                :disabled="disable"
                @click="getVerifyCode"
                plain
                >{{getCode}}</el-button
              >
            </el-col>
          </el-row>
          <el-row class="row-item">
            <el-col :span="6"></el-col>
            <el-col :span="12"></el-col>
            <el-col :span="6" style="text-align: right">
              <el-link href="http://baidu.com">密码登录</el-link>
            </el-col>
          </el-row>
          <el-row class="row-item">
            <el-button color="#003366" type="primary" style="width: 100%"
              >登录</el-button
            >
          </el-row>
        </div>
        <!-- 密码登录 -->
        <div class="form-box" v-else>
          <el-row class="row-item">
            <el-col :span="6">公司账号： </el-col>
            <el-col :span="18">
              <el-input
                type="text"
                placeholder="请输入注册手机号"
              ></el-input>
            </el-col>
          </el-row>
          <el-row class="row-item">
            <el-col :span="6">密码：</el-col>
            <el-col :span="18"
              ><el-input type="text" placeholder="请输入密码"></el-input
            ></el-col>
          </el-row>
          <el-row class="row-item">
            <el-col :span="6">
                 <el-checkbox v-model="checked1" label="记住账号"></el-checkbox>
            </el-col>
            <el-col :span="12"></el-col>
            <el-col :span="6" style="text-align: right">
              <el-link href="http://baidu.com">短信登录</el-link>
            </el-col>
          </el-row>
          <el-row class="row-item">
            <el-button color="#003366" type="primary" style="width: 100%"
              >登录</el-button
            >
          </el-row>
        </div>
      </el-main>
      <br /><br />
      <el-footer>
        <bottom-1></bottom-1>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import Bottom1 from "@/components/students/bottoms/Bottom1.vue";
export default {
  name: "Login",
  props: {},
  components: { Bottom1 },
  setup(props, ctx) {
    //   短信登录
    let getCode = ref("获取验证码");
    let counts = ref(6);
    let disable = ref(false);
    function getVerifyCode(){
        let countDown = setInterval(()=>{
            if(counts.value < 1){
                disable.value = false;
                getCode.value = '获取验证码';
                counts.value  = 6;
                clearInterval(countDown);
            }else{
                disable.value = true;
                counts.value --;
                getCode.value = counts.value  + 's后重发';
            }
        },1000);

    }
    //密码登录
    let checked1=ref(false)
    let logType=ref(0)
    return {
      getCode,
      logType,
      checked1,
      counts,
      disable,
      getVerifyCode,
    };
  },
};
</script>

<style lang='scss' scoped>
.login {
  background-color: $global_blue_color;
  header {
    width: 100%;
    height: 100%;
    color: $global_yellow_color;
  }
  .slogan {
    font-size: 3 * $global_font;
    font-family: $global_family;
  }
  .form-box {
    margin: 50px auto;
    padding: 50px;
    background-color: white;
    width: 40%;
    font-size: 14px;
  }
  .row-item {
    align-items: center;
    margin: 0 0 50px 0;
  }
  footer {
    height: 100%;
  }
}
</style>