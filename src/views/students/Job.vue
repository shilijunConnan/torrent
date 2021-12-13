<template>
<el-container class="job">
    <el-header>
        <header-1></header-1>  
    </el-header>
    <el-main>
        <job-presentation></job-presentation>
    </el-main>
    <el-footer>
        <bottom-1></bottom-1>
    </el-footer>
</el-container>
</template>

<script>
import {ref} from 'vue'
import JobPresentation from '@/components/global/JobPresentation.vue'
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
export default{
    name:'Job',
    props:{

    },
    components:{
        JobPresentation,Header1,Bottom1
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.job {
    
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        background-color: #000000;
        
    }
    main{
        padding: 0; 
        margin:0;
        font-size: 14px;
        background-color: #f0f0e7;
        
    }
    footer{
        background-color: #000000;
        opacity: 1;
        height: auto;
    }
}
</style>