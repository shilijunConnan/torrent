<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/admin/index/log/student">
            学生日志
    </el-menu-item>
    <el-menu-item index="/admin/index/log/company">公司日志</el-menu-item>
    <el-menu-item index="/admin/index/log/school">学校日志</el-menu-item>
  </el-menu>
  <router-view></router-view>
  
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Log',
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