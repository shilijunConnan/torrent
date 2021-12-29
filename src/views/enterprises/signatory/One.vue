<template>
  <!-- 外部容器-->
  <div class="editorBox">
    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>
    <!-- 编辑器容器 -->
    <div id="editor" ></div>
  </div>
</template>

<script>
import CKEditor from "@/plugins/ckeditor5-build-decoupled-document";
import "@/plugins/ckeditor5-build-decoupled-document/build/translations/zh-cn.js";
import { reactive, onMounted } from "vue";
const CKEditor_Effect = () => {
  //创建一个编辑器对象数据
  let editorObj = reactive({});
  // 初始化编辑器
  const initCKEditor = () => {
    CKEditor.create(document.querySelector("#editor"), {
      language: "zh-cn",
    })
      .then((editor) => {
        const toolbarContainer = document.querySelector("#toolbar-container");
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        editorObj = editor; //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        // editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        //   return new MyUploadAdapter(loader); //自定义上传图片
        // };
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // 获取编辑器数据
  const getEditorData = () => {
    return editorObj.getData()
  };
  // 设置编辑器数据
  const setEditorData = (data) => {
    return editorObj.setData(data)
  };
  //在mounted初始化
  onMounted(() => {
    initCKEditor();
  });

  return { editorObj, getEditorData,setEditorData };
};

export default {
    name:'One',
    components:{
        CKEditor
    },
    setup(){
        const CKEditorEffect = CKEditor_Effect();
        return { 
            CKEditorEffect 
            };
    },

  }
</script> 
