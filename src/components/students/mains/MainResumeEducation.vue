<template>
    <el-row style="align-items: center; ">
        <h1>教育经历</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <education-one></education-one>
    <education-one></education-one>
    <br><br><hr>
</template>

<script>
import EducationOne from './mainResumeComponents/EducationOne.vue'
import axios from 'axios'
import {onMounted,ref} from 'vue'
export default{
    name:'MainResumeEducation',
    props:{

    },
    components:{
EducationOne
    },
    setup(props,ctx){
        onMounted(() => {
            axios({
                method: "get",
                url: "/user/torrent-zuel-recruitment/api/resume/get/history/education",
                params: { stuUniCode: "202112200001" },
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                },
            }).then((response) => {
                if(response.status==200){
                    console.log(response.data)
                }
                
            }).catch(function (error) {
                console.log(error);
            });
        });
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>