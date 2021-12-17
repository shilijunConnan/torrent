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
        <div class="form-box">
          <el-row class="row-item">
            <el-col :span="6">管理员账号： </el-col>
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
            <el-button color="#006633" type="success" style="width: 100%"
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
    return {
      getCode,
      counts,
      disable,
      getVerifyCode,
    };
  },
};
</script>

<style lang='scss' scoped>
.login {
  background-color: $global_green_color;
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
    height: 200px;
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