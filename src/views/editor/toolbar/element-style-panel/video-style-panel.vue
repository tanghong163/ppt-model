<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-18 09:09:32
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-24 14:52:00
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\video-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row class="p-b-10">视频预览封面</Row>
      <Row class="full">
        <Upload
          v-model:file-list="fileList"
          list-type="picture-card"
          :show-upload-list="false"
          :customRequest="uploadImage"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <IconLoadingOne v-if="loading"></IconLoadingOne>
            <IconPlus v-else></IconPlus>
            <!-- <div class="ant-upload-text">Upload</div> -->
          </div>
        </Upload>
      </Row>
      <!-- <Row class="full">
        <input type="file" id="file" @change="InputFileChange()" />
        <audio id="audio_id" controls autoplay loop>Your browser can't support HTML5 Audio</audio>
      </Row> -->
      <Row class="full">
        <Button @click="resetCover">重置封面</Button>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { uploadImageRequest } from '@/service/upload/upload';
import { getBase64 } from '@/utils/common';
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');
// 文件类型以及大小检测
/**
 * @description:
 * @param {*uid、lastModified、lastModifiedDate、name、size、webkitRelativePath、type} file
 * @return {*}
 */
const beforeUpload = (file: UploadProps['fileList'][number]): Boolean => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

/**
 * @description:
 * @param {*file{uid、lastModified、lastModifiedDate、name、originFileObj{file}、percent、size、status、webkitRelativePath、type}、fileList[{file}]} info
 * @return {*}
 */
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === 'error') {
    loading.value = false;
    message.error('upload error');
  }
};

const uploadImage = async data => {
  const formData = new FormData();
  formData.append('file', data.file);
  const {
    data: { data: webData, code, message: info }
  } = await uploadImageRequest(formData);
  if (code === 'ok') {
    const { url } = webData;
    imageUrl.value = url;
    message.success(info);
  }
  loading.value = false;
};

const resetCover = () => {
  imageUrl.value = '';
};

const InputFileChange = () => {
  var file = document.getElementById('file').files[0];

  var url = URL.createObjectURL(file);

  console.log(url);

  var videos = document.getElementById('audio_id');

  videos.src = url;

  setTimeout(function () {
    if (videos.readyState > 0) {
      var minutes = parseInt(videos.duration / 60, 10);

      var seconds = videos.duration % 60;

      console.log(minutes);

      alert(seconds);
    }
  }, 500);
};
</script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
  }
  :deep .ant-upload {
    width: 100%;
    img {
      width: inherit;
      height: inherit;
      padding: 10px;
      // 保持原有尺寸比例。内容被缩放。
      object-fit: contain;
    }
  }
}
</style>
