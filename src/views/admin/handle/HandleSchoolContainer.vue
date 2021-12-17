<template>
  <span style="font-weight:bold">账号处理</span>&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;学校账号<br><br>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/admin/index/handle/schoolContainer/handleSchoolNormal">
            正常
    </el-menu-item>
    <el-menu-item index="/admin/index/handle/schoolContainer/handleSchoolRestricted">受限</el-menu-item>
    <el-menu-item index="/admin/index/handle/schoolContainer/handleSchoolBanned">封禁</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'HandleSchoolContainer',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>