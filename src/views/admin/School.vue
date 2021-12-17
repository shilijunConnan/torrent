<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/admin/index/school/under">
        <el-badge :value="200" :max="99" class="item" style="z-index:999">
            待审核
        </el-badge>
    </el-menu-item>
    <el-menu-item index="/admin/index/school/pass">审核通过</el-menu-item>
    <el-menu-item index="/admin/index/school/failed">审核未通过</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'School',
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