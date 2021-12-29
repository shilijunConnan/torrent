<template>
    <el-row style="align-items: center; ">
        <h1>项目经历</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <div v-if="projectLists.length > 0 ">
        <project-one v-for="(item,index) in projectLists" :key="index" :infoProject='item' :isNull=1></project-one>
    </div>
    <div>
        <el-button @click="newProject">新建</el-button>
    </div>
    <el-dialog v-model="visible" title="添加" width="80%"  @close='closeDialog'>
        <project-one :isNull=0></project-one>
    </el-dialog>
    <br><br><hr>
</template>

<script>
import {onMounted,ref,inject} from 'vue'
import axios from 'axios'
import ProjectOne from './mainResumeComponents/ProjectOne.vue'
export default{
    name:'MainResumeProject',
    props:{

    },
    components:{
ProjectOne
    },
    setup(props,ctx){
        console.log('init')
        // 初始化页面
        let projectLists=ref([])
        onMounted(() => {
            axios({
                method: "get",
                url: "/user/torrent-zuel-recruitment/api/resume/get/project/history",
                params: { stuUniCode: "202112200001" },
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                },
            }).then((response) => {
                if(response.status==200){
                    projectLists.value=response.data.data
                    console.log(projectLists)
                }
                
            }).catch(function (error) {
                console.log(error);
            });
        });
        // 局部刷新
        const refresh = inject("reload")
        // 控制弹窗
        let visible=ref(false);
        let newProject=()=>{
            visible.value=true
        }
        let closeDialog=()=>{
            console.log('关闭弹窗')
            refresh()
        }

        return{
            projectLists,visible,
            newProject,closeDialog,refresh
        }
    }
}
</script>

<style lang='scss' scoped>

</style>