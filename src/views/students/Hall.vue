<template>
    <el-container class="hall">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <el-row>
              <el-col :span="4">
                  <div style="margin-top:20px" :class="{'fix-nav': navBarFixed}">
                        <main-hall-side></main-hall-side>
                  </div>

              </el-col>
              <el-col :span="16">
                    <div id='nav' class="nav" :class="{'fix-nav': navBarFixed}">
                        <search-input></search-input>
                        <regions></regions>
                        <main-hall-filters></main-hall-filters>
                    </div>
                    <div style="height:80px"></div>
                    <el-tabs>
                        <el-tab-pane label="智能匹配"><main-hall-job :sort='sortParam.auto'></main-hall-job></el-tab-pane>
                        <el-tab-pane label="薪资最高"><main-hall-job :sort='sortParam.salary'></main-hall-job></el-tab-pane>
                        <el-tab-pane label="最新发布"><main-hall-job :sort='sortParam.latest'></main-hall-job></el-tab-pane>
                    </el-tabs>
              </el-col>
              <el-col :span="4" style="text-align:center">
                  <h3 style="position:relative;right:50px;text-align:right;">为您推荐</h3>
                  <main-hall-recommend></main-hall-recommend>
              </el-col>
          </el-row>
         
      </el-main>
      <el-footer><bottom-1></bottom-1></el-footer>
    </el-container>
   <el-backtop  style="text-align: center;bottom: 150px;left: 40px; color:#409eff;width:50px;height:50px;border-radius:50%">
      <el-icon size="50px"><top/></el-icon>
  </el-backtop>
</template>

<script>
import {ref,onMounted} from 'vue'
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
import SearchInput from '@/components/students/headers/SearchInput.vue'
import Regions from '@/components/students/headers/Regions.vue'
import MainHallSide from '@/components/students/mains/MainHallSide.vue'
import MainHallRecommend from '@/components/students/mains/MainHallRecommend.vue'
import MainHallFilters from '@/components/students/mains/MainHallFilters.vue'
import MainHallJob from '@/components/students/mains/MainHallJob.vue'

import {Top} from '@element-plus/icons'
export default{
    name:'Hall',
    props:{
    },
    components:{
        // components
        Header1,Bottom1,SearchInput,Regions,MainHallSide,MainHallRecommend,MainHallFilters,MainHallJob,
        
        // element icon
        Top
    },
    setup(props,ctx){
        let sortParam={
            salary:2,
            auto:1,
            latest:3
        }
        let navBarFixed=ref(false)

        function watchScroll(){
            // 滚动的距离
            var scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;

            // 容器的高度
            // var offsetTop = document.querySelector("#nav").offsetHeight;
            var offsetTop = 100
            // console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);

            //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
            if (scrollTop > offsetTop) {
              navBarFixed.value = true;
            //   console.log('1')
            } else {
              navBarFixed.value = false;
            //   console.log('0')
            }
        }
        function destroyed(){
          // 移除事件监听
          window.removeEventListener("scroll", watchScroll);
        }
        let roll=onMounted(()=>{
            window.addEventListener("scroll", watchScroll)
        })
        
        
        return{
        watchScroll,destroyed,roll,navBarFixed,
        sortParam
        }
    }
}
</script>

<style lang='scss' scoped>
.hall {
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        background-color: #000000;
        
    }
    main{
        min-height : 900px;
        padding: 0; 
        margin:0;
        font-size: 14px;
        
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}
.nav{
    width: 100%;
    height: 90px;
    position: relative;
}
.fix-nav{
    width: 66%;
    height: 90px;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    opacity:1
}
</style>