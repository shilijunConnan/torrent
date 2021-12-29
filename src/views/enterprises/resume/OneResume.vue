<template>
  <div class="oneResume">
    <br><br><br>
    <div class="box">
      <!-- 基本信息 -->
      <br><br><br>
      <resume-person></resume-person>
      <br><br>
      <!-- 教育经历 -->
      <resume-education></resume-education>
      <br><br>
      <!-- 工作经历 -->
      <resume-work></resume-work>
      <br><br>
      <!-- 项目经历 -->
      <resume-project></resume-project>
      <br><br>
      <!-- 语言技能 -->
      <resume-language></resume-language>
      <br><br>
      <!-- 专业技能 -->
      <resume-skill></resume-skill>
      <br><br>
      <!-- 能力证书 -->
      <resume-certificate></resume-certificate>
      <br><br>
      <!-- 学生干部经历 -->
      <resume-cadre></resume-cadre>
      <br><br>
      <!-- 自我评价 -->
      <resume-self></resume-self>
      <br><br>
    </div>
    <br><br><br>
  </div>
</template>

<script>
import { ref } from "vue";
import ResumePerson from '@/components/enterprises/mains/resume/ResumePerson.vue'
import ResumeEducation from '@/components/enterprises/mains/resume/ResumeEducation.vue'
import ResumeWork from '@/components/enterprises/mains/resume/ResumeWork.vue'
import ResumeProject from '@/components/enterprises/mains/resume/ResumeProject.vue'
import ResumeLanguage from '@/components/enterprises/mains/resume/ResumeLanguage.vue'
import ResumeSkill from '@/components/enterprises/mains/resume/ResumeSkill.vue'
import ResumeCertificate from '@/components/enterprises/mains/resume/ResumeCertificate.vue'
import ResumeCadre from '@/components/enterprises/mains/resume/ResumeCadre.vue'
import ResumeSelf from '@/components/enterprises/mains/resume/ResumeSelf.vue'
export default {
  name: "OneResume",
  props: {},
  components: {
    ResumePerson,ResumeEducation,ResumeWork,ResumeProject,ResumeLanguage,ResumeSkill,
    ResumeCertificate,ResumeCadre,ResumeSelf
  },
  setup(props, ctx) {
    return {
    };
  },
};
</script>

<style lang='scss' scoped>
.oneResume{
    padding:0;
    margin: 0;
    background-color: $global_blue_color;
    .box{
      width: 80%;
      font-size: 14px;
      background-color: white;
      margin:0 auto;
    }
}
</style>