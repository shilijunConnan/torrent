<template>
    <el-container class="resume">
      <el-main>
          <main-resume-person></main-resume-person>
          <main-resume-status></main-resume-status>
          <main-resume-intention></main-resume-intention>
          <main-resume-education></main-resume-education>
          <main-resume-work></main-resume-work>
          <main-resume-project></main-resume-project>
          <main-resume-language></main-resume-language>
          <main-resume-skill></main-resume-skill>
          <main-resume-price></main-resume-price>
          <main-resume-leader></main-resume-leader>
          <main-resume-self></main-resume-self>
      </el-main>
    </el-container>
</template>

<script>
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
import MainResumePerson from '@/components/students/mains/MainResumePerson.vue'
import MainResumeStatus from '@/components/students/mains/MainResumeStatus.vue'
import MainResumeIntention from '@/components/students/mains/MainResumeIntention.vue'
import MainResumeEducation from '@/components/students/mains/MainResumeEducation.vue'
import MainResumeWork from '@/components/students/mains/MainResumeWork.vue' 
import MainResumeProject from '@/components/students/mains/MainResumeProject.vue' 
import MainResumeLanguage from '@/components/students/mains/MainResumeLanguage.vue' 
import MainResumeSkill from '@/components/students/mains/MainResumeSkill.vue' 
import MainResumePrice from '@/components/students/mains/MainResumePrice.vue' 
import MainResumeLeader from '@/components/students/mains/MainResumeLeader.vue' 
import MainResumeSelf from '@/components/students/mains/MainResumeSelf.vue' 
export default{
    name:'Resume',
    props:{
        
    },
    components:{
        Header1,Bottom1,MainResumePerson,MainResumeEducation,MainResumeStatus,MainResumeIntention,
        MainResumeEducation,MainResumeWork,MainResumeProject,MainResumeLanguage,MainResumeSkill,
        MainResumePrice,MainResumeLeader,MainResumeSelf
        
    },
    setup(props,ctx){
        return{
        }
    }
}
</script>

<style lang='scss' scoped>

</style>