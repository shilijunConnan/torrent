<template>
    <el-row class="header">
        <el-col :span="1">
        </el-col>
        <el-col :span="2">
            <img src="@/assets/logo2.png">
        </el-col>
        <el-col :span="2">
            <div class='slogan'>TORRENT</div>
        </el-col>
        <el-col :span="14">
        </el-col>
        <el-col :span="1">
            <span v-if="status" class='pointer'>消息</span>
            <el-dropdown v-else>
                <span class="el-dropdown-link pointer">
                登录
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>学生登录</el-dropdown-item>
                        <el-dropdown-item>高校登录</el-dropdown-item>
                        <el-dropdown-item>企业登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="1">|</el-col>
        <el-col :span="2">
            <el-dropdown v-if="status">
                <span class="el-dropdown-link pointer">
                    欢迎回来{{userName}}
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>账号管理</el-dropdown-item>
                        <el-dropdown-item>消息设置</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown v-else>
                <span class="el-dropdown-link pointer">
                加入我们
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>企业入驻</el-dropdown-item>
                        <el-dropdown-item>高校入驻</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="1">
        </el-col>
    </el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Header1',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let status=ref(false)
        let userName=ref('卡Q因')
        return{
            status,userName
        }
    }
}
</script>

<style lang='scss' scoped>
.header{
    padding:8px;
    color:$global_yellow_color;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
    }
    .slogan{
        font-size: 3*$global_font;
        font-family: $global_family;
    }
    .pointer{
        font-size: 1.2*$global_font;
        color:$global_yellow_color;
        &:hover{
                cursor: pointer;
        }
    }
}
</style>
