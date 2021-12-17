<template>
  <el-row>
    <el-col :span="2"> </el-col>
    <el-col :span="20"> 
        <h2>中南财经政法大学 (ZUEL)</h2>
        <p>Zhongnan University of Economics and Law</p>
        <p>创办时间：1948年</p>
        <p>学校类别：财经政法类</p>
        <p>学校特色：教育部直属重点大学、世界一流学科建设高校、985工程优势学科创新平台、211工程、2011计划</p>
        <p>地址：湖北省武汉市东湖高新技术开发区南湖大道182号</p>
        <p>院校代码：10520</p>
        <p>简介：中南财经政法大学（Zhongnan University of Economics and Law），位于武汉市，是中华人民共和国教
            育部直属的一所以经济学、法学、管理学为主干，兼有哲学、文学、历史学、理学、工学、艺术学等九大学科门类的
            全日制普通高等本科院校，由教育部、财政部和湖北省人民政府三方共建，是国家“211工程”、“985工程优势学科创
            新平台”项目重点建设高校，国家“世界一流学科建设高校”，入选国家“2011计划”、“111计划”、教育部人文社会科学
            重点研究基地、国家建设高水平大学公派研究生项目、卓越法律人才教育培养计划、国家级大学生创新创业训练计划、
            新工科研究与实践项目、中国政府奖学金来华留学生接收院校、全国毕业生就业典型经验高校、全国高校实践育人创新
            创业基地、湖北省2011计划，财经一流学科建设联盟理事长单位，立格联盟、中国—俄罗斯经济类大学联盟、“长江—
            伏尔加河”高校联盟成员，AMBA、CFA协会认证院校。
        </p>
        <p style="text-align:right"><a href="http://www.zuel.edu.cn/">进入学校官网>></a></p>
    </el-col>
    <el-col :span="2"> </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
export default {
  name: "OneSchool",
  props: {},
  components: {},
  setup(props, ctx) {
    return {};
  },
};
</script>

<style lang='scss' scoped>
p{
    line-height: 20px;
    letter-spacing: 2px;
    text-align: justify;
}
</style>