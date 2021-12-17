<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="this.$route.path"
    router
  >
    <el-menu-item index="/admin/index/complaints/checking">
        <el-badge :value="200" :max="99" class="item" style="z-index:999">
            待处理
        </el-badge>
    </el-menu-item>
    <el-menu-item index="/admin/index/complaints/checked">已处理</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Complaints',
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