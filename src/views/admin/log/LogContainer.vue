<template>
<div class="log-container">
    <div class="box">
        <el-row class="item-row">
            <el-col :span="2"></el-col>
            <el-col :span="2"> 学校日志</el-col>
            <el-col :span="1">|</el-col>
            <el-col :span="3">中南财经政法大学</el-col>
            <el-col :span="16"></el-col>
        </el-row>
        <br><br>
        <el-row class="item-row">
            <el-col :span="2"></el-col>
            <el-col :span="7"> 
                <el-select v-model="timeSelect" placeholder="请选择查询日志时间" style="width:100%">
                    <el-option v-for="(item,index) in optionTime" :key="index" :label="item" :value="item">{{item}}</el-option>
                </el-select>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="7"> 
                <el-select v-model="eventSelect" placeholder="请选择查询日志内容" style="width:100%">
                    <el-option v-for="(item,index) in optionEvent" :key="index" :label="item" :value="item">{{item}}</el-option>
                </el-select>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="4"><el-button type="primary" style="width:100%" @click="queryLog">查询</el-button></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</div>
</template>

<script>
import { ref, watch } from "vue";
import {useRouter,useRoute} from 'vue-router'
export default {
  name: "LogContainer",
  props: {},
  components: {},
  setup(props, ctx) {
      let route=useRoute()
      console.log(route.query)
      let timeSelect=ref('')
      let eventSelect=ref('')
      let optionTime=[
          '近7天','近15天','近30天','近半年','近1年'
      ]
      let optionEvent=[
          '点击日志','删除日志','修改日志'
      ]
      let router=useRouter()
      let queryLog=() => {
            router.push({
                path:'/admin/log/check/click',
                query:{
                    uid:timeSelect.value
                }
            })
        }
    return {
        timeSelect,eventSelect,optionTime,optionEvent,queryLog
    };
  },
};
</script>

<style lang='scss' scoped>
.log-container{
    padding:50px;
    margin:0;
    background-color: #ffff00;
    .box{
        background-color: white;
        box-shadow: 0 0 5px 2px rgb(224, 211, 211);
        padding:50px 30px;
        min-height: 500px;
    }
}
.item-row{
    align-items: center;
}
</style>