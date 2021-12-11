<template>
  <div class='search-input-item'>
    <el-input
      v-model="input3"
      placeholder="请输入搜索内容"
      class="input-with-select"
      style="width: 80%"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="行业" style="width: 100px">
          <el-option label="不限" value="1"></el-option>
          <el-option label="政府/非营利组织/其他" value="2"></el-option>
          <el-option label="计算机/互联网/通信/电子" value="3"></el-option>
        </el-select>
        &ensp;&ensp;
        <el-select v-model="select" placeholder="职业" style="width: 100px">
          <el-option label="不限" value="1"></el-option>
          <el-option label="计算机硬件" value="2"></el-option>
          <el-option label="计算机硬件" value="3"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button ><el-icon><search /></el-icon></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import {ref} from 'vue'
import {Search} from '@element-plus/icons'
export default{
    name:'SearchInput',
    props:{

    },
    components:{
Search
    },
    setup(props,ctx){
        let input3,select=ref()
        return{
input3,select
        }
    }
}
</script>

<style lang='scss' scoped>
.search-input-item{
  margin: 0 auto;
  padding:0;
  width: 100%;
  text-align: center;
}
</style>