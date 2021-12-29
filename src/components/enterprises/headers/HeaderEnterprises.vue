<template>
<el-row style="align-items:center;margin:10px auto;">
    <el-col :span="1" style="text-align: center"><img src="@/assets/logo2.png" class="logo"/></el-col>
    <el-col :span="3" style="text-align: center;" class="slogan" >TORRENT</el-col>
    <el-col :span="17" style="text-align: right;">
        <el-dropdown trigger="click"
        >
            <el-icon color='white' :size='25' v-if="msgNum==0"><bell/></el-icon>
            <el-icon color='yellow' :size='25' v-else><bell-filled/></el-icon>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item class="clearfix">
                简历消息
                <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                签约消息
                <el-badge class="mark" :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-col>
    <el-col :span="3" style="text-align: center;">
    <el-dropdown>
        <span class="el-dropdown-link">
        test有限公司
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
  </el-dropdown>
    </el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
import {ArrowDown ,Bell,BellFilled} from '@element-plus/icons'
export default{
    name:'HeaderEnterprises',
    props:{

    },
    components:{
ArrowDown,Bell,BellFilled
    },
    setup(props,ctx){
        let msgNum=ref(1)
        return{
msgNum
        }
    }
}
</script>

<style lang='scss' scoped>
.logo{
    width: 40px;
    height:40px;
}
.slogan {
    color:$global_yellow_color;
    font-size: 3 * $global_font;
    font-family: $global_family;
}
.el-dropdown-link{
    cursor: pointer;
    color:white;
    font-size:14px
}
</style>