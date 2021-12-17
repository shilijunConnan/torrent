<template>
  <span style="font-weight:bold">账号处理</span>&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;公司账号<br><br>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/admin/index/handle/companyContainer/handleCompanyNormal">
            正常
    </el-menu-item>
    <el-menu-item index="/admin/index/handle/companyContainer/handleCompanyRestricted">受限</el-menu-item>
    <el-menu-item index="/admin/index/handle/companyContainer/handleCompanyBanned">封禁</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'HandleCompanyContainer',
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