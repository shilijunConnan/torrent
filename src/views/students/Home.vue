<template>
    <el-container class="home">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <el-row>
              <el-col :span="3">
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    >
                    <el-menu-item index="1" @click="goto('resume')">
                            <el-icon><postcard /></el-icon>
                            <span>我的简历</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="goto('post')">
                            <el-icon><icon-menu /></el-icon>
                            <span>投递记录</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="goto('process')">
                        <el-icon><document /></el-icon>
                        <span>面试进程</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon><star-filled /></el-icon>
                        <span>我的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <el-icon><magic-stick /></el-icon>
                        <span>猜你想看</span>
                    </el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="1">
              </el-col>
              <el-col :span="20">
                  <router-view></router-view>
              </el-col>
          </el-row>
      </el-main>
      <el-footer><bottom-1></bottom-1></el-footer>
    </el-container>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from "vue-router"
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
import Mains1 from '@/components/students/mains/Mains1.vue'
import {Postcard,MagicStick,StarFilled ,Menu as IconMenu,Document} from '@element-plus/icons'
export default{
    name:'Home',
    props:{
    },
    components:{
        Header1,Bottom1,Mains1
        ,Postcard,StarFilled,MagicStick,Document,IconMenu,

    },
    setup(props,ctx){
        const router = useRouter()
        // console.log(router)
        let goto=(paths)=>{
           return router.push('/students/'+paths)
        }
        // console.log('home')
        return{
        goto
        }
    }
}
</script>

<style lang='scss' scoped>
.home {
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        position: fixed;
        z-index: 99;
        background-color: #000000;
    }
    main{
        margin-top: 60px;
        min-height : 500px;
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}
</style>