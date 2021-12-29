<template>
  <el-row>
    <h1>个人信息</h1> </el-row
  ><br />
  <el-row class="globa_text_font">
    <el-col :span="4">
      <img
        class="img_4_3"
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.GWiyWYsP5R68bbTJ24gbLgHaJc?w=143&h=182&c=7&r=0&o=5&pid=1.7"
      />
    </el-col>

    <el-col :span="20" v-if="edit_person">
      <el-row class="global_row_items">
        <el-col :span="2">姓名：</el-col>
        <el-col :span="5">
          <el-input placeholder="姓名"></el-input>
        </el-col>
        <el-col :span="1"></el-col>

        <el-col :span="2">年龄:</el-col>
        <el-col :span="5">
          <el-input placeholder="年龄"></el-input>
        </el-col>
        <el-col :span="1"></el-col>

        <el-col :span="2">性别：</el-col>
        <el-col :span="5">
          <el-radio v-model="info.sex" label="男">男</el-radio>
          <el-radio v-model="info.sex" label="女">女</el-radio>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row class="global_row_items">
        <el-col :span="2">地址：</el-col>
        <el-col :span="5">
          <el-input placeholder="地址"></el-input>
        </el-col>
        <el-col :span="1"></el-col>

        <el-col :span="2">政治面貌:</el-col>
        <el-col :span="5">
          <el-input placeholder="政治面貌"></el-input>
        </el-col>
        <el-col :span="1"></el-col>

        <el-col :span="2">毕业年份:</el-col>
        <el-col :span="5">
          <el-input placeholder="毕业年份"></el-input>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row class="global_row_items">
        <el-col :span="2">联系电话：</el-col>
        <el-col :span="5">
          <el-input placeholder="联系电话"></el-input>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="2">邮箱：</el-col>
        <el-col :span="5">
          <el-input placeholder="邮箱"></el-input>
        </el-col>
        <el-col :span="9"></el-col>
      </el-row>
      <el-row class="row_items">
        <el-col :span="20"></el-col>
        <el-col :span="2" class="global_right"
          ><el-button @click="edit_person_handle">取消</el-button></el-col
        >
        <el-col :span="2" class="global_right"
          ><el-button type="primary" @click="edit_person_handle"
            >保存</el-button
          ></el-col
        >
      </el-row>
    </el-col>
    <el-col :span="20" v-else>
      <h2>
        {{ info.name }}&ensp;<el-icon size="20px"
          ><edit class="globa_text_link" @click="edit_person_handle"></edit
        ></el-icon>
      </h2>
      {{ info.sex }}&ensp;&ensp;&ensp;| &ensp;&ensp;&ensp;{{
        info.age
      }}&ensp;&ensp;&ensp;| &ensp;&ensp;&ensp;{{
        info.address
      }}&ensp;&ensp;&ensp;| &ensp;&ensp;&ensp;{{
        info.graduate
      }}&ensp;&ensp;&ensp;| &ensp;&ensp;&ensp;{{ info.politics }}
      <br /><br />联系电话：{{ info.phone }} <br /><br />邮箱：{{ info.email }}
    </el-col>
  </el-row>

  <br /><br />
  <hr />
</template>

<script>
import { compile, onMounted, ref } from "vue";
import axios from "axios";
import { Edit } from "@element-plus/icons";
export default {
  name: "MainResumePerson",
  props: {},
  components: {
    Edit,
  },
  setup(props, ctx) {
    let mon = onMounted(() => {
      axios({
        method: "get",
        url: "/user/torrent-zuel-recruitment/api/resume/get/search/status",
        params: { stuUniCode: "202112200001" },
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((response) => {
          if(response.status==200){
              console.log('succ')
          }
        
      }).catch(function (error) {
        console.log(error);
      });
    });
    let info = ref({
      name: "卡Q因",
      sex: "男",
      age: 17,
      address: "tokyo",
      graduate: "2021",
      politics: "团员",
      phone: "15278908799",
      email: "2020525895@qq.com",
    });
    let edit_person = ref(true);
    let edit_person_handle = ref(() => {
      console.log(edit_person.value);
      edit_person.value = !edit_person.value;
      console.log(edit_person.value);
    });
    return {
      mon,
      info,
      edit_person,
      edit_person_handle,
    };
  },
};
</script>

<style lang='scss' scoped>
* {
  color: black;
}
</style>