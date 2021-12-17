<template>
  <el-row>
    <el-col :span="2"> </el-col>
    <el-col :span="20">
      <h2>华为技术有限公司</h2>
      <p>HUAWEI TECHNOLOGIES CO., LTD.</p>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 成立时间： </el-col>
        <el-col :span="20" class="p-end"> 1987年9月15日 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 总部地点： </el-col>
        <el-col :span="20" class="p-end">
          中国广东省深圳市龙岗区坂田华为总部办公楼
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 公司类型： </el-col>
        <el-col :span="20" class="p-end"> 财经政法类 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 经营范围： </el-col>
        <el-col :span="20" class="p-end">
          教育部直属重点大学、世界一流学科建设高校、985工程优势学科创新平台、211工程、2011计划
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 员工数： </el-col>
        <el-col :span="20" class="p-end"> 10520 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 注册号： </el-col>
        <el-col :span="20" class="p-end"> 10520 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 登记机关 </el-col>
        <el-col :span="20" class="p-end"> 10520 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 简介： </el-col>
        <el-col :span="20" class="p-end">
          中南财经政法大学（Zhongnan University of Economics and
          Law），位于武汉市，是中华人民共和国教
          育部直属的一所以经济学、法学、管理学为主干，兼有哲学、文学、历史学、理学、工学、艺术学等九大学科门类的
          全日制普通高等本科院校，由教育部、财政部和湖北省人民政府三方共建，
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 官网： </el-col>
        <el-col :span="20" class="p-end"> http://www.zuel.edu.cn/ </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 联系电话： </el-col>
        <el-col :span="20" class="p-end"> 3748843834 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 注册手机号： </el-col>
        <el-col :span="20" class="p-end"> 1763748768 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 营业执照： </el-col>
        <el-col :span="20" class="p-end">
          <el-image
          style='width:400px;height:300px;'
            src='https://tse4-mm.cn.bing.net/th/id/OIP-C.TnJE_j0fP9PKmBcjSGC-EwHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7'
            :preview-src-list="srcList"
            :initial-index="1"
          >
          </el-image>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 公司照片： </el-col>
        <el-col :span="20" class="p-end">
          <el-image
          style='width:400px;height:300px;'
            src='https://tse4-mm.cn.bing.net/th/id/OIP-C.TnJE_j0fP9PKmBcjSGC-EwHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7'
            :preview-src-list="srcList"
            :initial-index="1"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"> </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
export default {
  name: "IndexCompanyCheck",
  props: {},
  components: {},
  setup(props, ctx) {
    const srcList = ref([
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.TnJE_j0fP9PKmBcjSGC-EwHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7",
    ]);
    return {
      srcList,
    };
  },
};
</script>

<style lang='scss' scoped>
.row {
  margin: 20px 0;
}
.p-start {
  line-height: 20px;
  letter-spacing: 2px;
  text-align: justify;
}
.p-end {
  line-height: 20px;
  letter-spacing: 2px;
  text-align: justify;
}
</style>