
<template>
  <div class="login">
    <el-container>
      <el-header>
        <el-row style="align-items: center; padding: 20px 0">
          <el-col :span="5" style="text-align: right"
            ><img src="@/assets/logo2.png"
          /></el-col>
          <el-col :span="1"></el-col>
          <el-col :span="5" style="text-align: left"
            ><div class="slogan">TORRENT</div></el-col
          >
          <el-col :span="15"></el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="form-box">
             <el-row class="row-item">
                <el-col :span="5">公司名称：</el-col>
                <el-col :span="19"><el-input placeholder="请输入公司名称"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">英文名：</el-col>
                <el-col :span="19"><el-input placeholder="请输入英文名"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">成立时间：</el-col>
                <el-col :span="19"><el-input placeholder="请输入成立时间"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">总部地点：</el-col>
                <el-col :span="19"><el-input placeholder="请输入总部地点"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">公司类型：</el-col>
                <el-col :span="19"><el-input placeholder="请输入公司类型"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">经营范围</el-col>
                <el-col :span="19"><el-input placeholder="请输入经营范围"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">员工数：</el-col>
                <el-col :span="19"><el-input placeholder="请输入员工数"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">注册号：</el-col>
                <el-col :span="19"><el-input placeholder="请输入注册号"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">登记机关：</el-col>
                <el-col :span="19"><el-input placeholder="请输入登记机关"> </el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">简介：</el-col>
                <el-col :span="19"><el-input type="textarea" rows="5" placeholder="请输入简介"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">官网：</el-col>
                <el-col :span="19"><el-input placeholder="请输入企业官网"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">联系电话：</el-col>
                <el-col :span="19"><el-input placeholder="请输入企业系电话"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">营业执照：</el-col>
                <el-col :span="19">
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        :show-file-list="true"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">公司照片：</el-col>
                <el-col :span="19">
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        :show-file-list="true"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">注册电话：</el-col>
                <el-col :span="19"><el-input placeholder="请输入注册手机号"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">输入密码：</el-col>
                <el-col :span="19"><el-input placeholder="请输入密码"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-col :span="5">确认密码：</el-col>
                <el-col :span="19"><el-input placeholder="请确认密码"></el-input></el-col>
            </el-row>
            <el-row class="row-item">
                <el-button style="width:100%" type="primary">提交审核</el-button>
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
import { Plus } from '@element-plus/icons'
export default {
  name: "EnterprisesRegister",
  props: {},
  components: { Bottom1 ,Plus},
  setup(props, ctx) {
        let imageUrl=ref('')
        let handleAvatarSuccess=(res, file) =>{
            // imageUrl = URL.createObjectURL(file.raw)
            imageUrl = file.raw
        }
        

        let beforeAvatarUpload=(file) =>{
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('Avatar picture must be JPG format!')
            }
            if (!isLt2M) {
                this.$message.error('Avatar picture size can not exceed 2MB!')
            }
            return isJPG && isLt2M
        }
    return {
        imageUrl,handleAvatarSuccess,beforeAvatarUpload
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
    width: 50%;
    font-size: 14px;
  }
  .row-item {
    align-items: center;
    margin: 0 0 20px 0;
  }
  footer {
    height: 100%;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar-uploader-icon svg {
  margin-top: 74px; /* (178px - 28px) / 2 - 1px */
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>