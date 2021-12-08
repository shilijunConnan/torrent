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
                        <el-dropdown-item><router-link to='/students/education' class="goto"> 学籍管理</router-link></el-dropdown-item>
                        <el-dropdown-item @click="password_msg = true">消息设置</el-dropdown-item>
                        <el-dropdown-item @click="password_set = true">修改密码</el-dropdown-item>
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
    <!-- 修改密码 -->
    <el-dialog v-model="password_set" title="修改密码" width="30%" center>
        <el-input placeholder="请输入新密码" show-password v-model="newpass"/><br><br>
        <el-input placeholder="请确认新密码" show-password v-model="newpass"/>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="password_set = false">取消</el-button>
        
            <el-button type="primary" @click="password_set = false">确定</el-button>
        </span>
        </template>
    </el-dialog>
    <!-- 消息设置 -->
    <el-dialog v-model="password_msg" title="推送设置" width="40%" center>
        <el-row class="row_items">
            <el-col :span="2"></el-col>
            <el-col :span="18"><h3>允许学校推送招聘信息</h3></el-col>
            <el-col :span="2"><el-switch v-model="status" /></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <el-row class="row_items">
            <el-col :span="2"></el-col>
            <el-col :span="18"><h3>允许网站智能推送招聘信息</h3></el-col>
            <el-col :span="2"><el-switch v-model="status" /></el-col>
            <el-col :span="2"></el-col>
        </el-row>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="password_msg = false">取消</el-button>
        
            <el-button type="primary" @click="password_msg = false">确定</el-button>
        </span>
        </template>
    </el-dialog>
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
        let status=ref(true)
        let userName=ref('卡Q因')
        let password_set=ref(false)
        let password_msg=ref(false)
        let newpass=ref()
        return{
            status,userName,password_set,password_msg,newpass
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
.row_items{
        align-items: center;
    }
.goto{
text-align: center;
color: #606266;
text-decoration: none;
}
</style>
