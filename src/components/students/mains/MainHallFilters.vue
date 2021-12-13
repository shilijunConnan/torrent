<template>
<!-- :default-active="activeIndex" -->
 <!-- @select="handleSelect" -->
 <el-menu
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-sub-menu index="1">
      <template #title>薪资要求</template>
      <el-menu-item v-for="(item,index) in salary" :key='index'  :index="'1-'+index" @click="wordContact('salary',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>学历要求</template>
      <el-menu-item v-for="(item,index) in education" :key='index'  :index="'2-'+index" @click="wordContact('education',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>经验要求</template>
      <el-menu-item v-for="(item,index) in experience" :key='index'  :index="'3-'+index" @click="wordContact('experience',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>职位类型</template>
      <el-menu-item v-for="(item,index) in kind" :key='index'  :index="'4-'+index" @click="wordContact('kind',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>公司性质</template>
      <el-menu-item v-for="(item,index) in company" :key='index'  :index="'5-'+index" @click="wordContact('company',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>公司规模</template>
      <el-menu-item v-for="(item,index) in scale" :key='index'  :index="'6-'+index" @click="wordContact('scale',item)">{{item}}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="6" @click="clear">
      清空筛选条件
    </el-menu-item>
  </el-menu>
</template>

<script>
import {ref,computed} from 'vue'
import {useStore} from 'vuex'
export default{
    name:'MainHallFilters',
    props:{

    },
    components:{

    },
    setup(props,ctx){
      let store=useStore()
      let salary=ref([
        '不限','<4k','4k-6k','6k-8k','8k-10k','10k-15k','15k-25k','25k-35k','35k-50k'
      ])
      let education=ref([
        '不限','大专','本科','硕士','MBA/EMBA','博士'
      ])
      let experience=ref([
        '不限','无经验','1年以下','1年-3年','3年-5年','5年-10年','10年以上'
      ])
      let kind=ref([
        '不限','全职','兼职\临时','实习','校园'
      ])
      let company=ref([
        '不限','国企','外企','合资','民营','上市公司','股份制企业','事业单位'
      ])
      let scale=ref([
        '不限','20人以下','20-99人','100-299人','300-499人','500-999人','1000-9999人','10000人以上'
      ])
      
      let wordContact=(types,word)=>{
        let params={
          'param1':types,
          'param2':word
        }
        // console.log(params)
        if(!store.state[types].includes(word)){
          store.commit('addList',params)
        }else{
          store.commit('deleteList',params)
        }
      }
      let clear=()=>{
        store.commit('clearList')
        location.reload()
      }
    return {
      wordContact,clear,
      salary,education,experience,kind,company,scale
    }
  }
}
</script>

<style lang='scss' scoped>
.el-menu-demo{
  z-index: 999;
  background-color: white;
  opacity: 1;
  margin:0;
}
</style>