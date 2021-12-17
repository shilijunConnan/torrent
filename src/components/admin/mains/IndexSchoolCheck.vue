<template>
  <el-row>
    <el-col :span="2"> </el-col>
    <el-col :span="20">
      <h2>中南财经政法大学 (ZUEL)</h2>
      <p>Zhongnan University of Economics and Law</p>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 创办时间： </el-col>
        <el-col :span="20" class="p-end"> 1948年 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 学校类别： </el-col>
        <el-col :span="20" class="p-end"> 财经政法类 </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 学校特色： </el-col>
        <el-col :span="20" class="p-end">
          教育部直属重点大学、世界一流学科建设高校、985工程优势学科创新平台、211工程、2011计划
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 地址： </el-col>
        <el-col :span="20" class="p-end">
          湖北省武汉市东湖高新技术开发区南湖大道182号
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="p-start"> 院校代码： </el-col>
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
        <el-col :span="4" class="p-start"> 事业单位法人证书： </el-col>
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
  name: "IndexSchoolCheck",
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