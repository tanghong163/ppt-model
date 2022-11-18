<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-17 09:30:42
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-17 15:32:31
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\chart-style-panel\chart-data-editor.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="refModal" ref="refModal">
    <Modal v-model:visible="modalVisible" centered :closable="false" :getContainer="() => $refs.refModal" :width="700">
      <template #footer>
        <Button key="clear">清空</Button>
        <Button key="back" @click="handleCancel">取消</Button>
        <Button key="submit" type="primary" :loading="loading" @click="handleOk">确认</Button>
      </template>
      <!-- <Table :dataSource="dataSource" :columns="columns" :show-header="false" bordered :pagination="false" /> -->
      <div class="table-scroll">
        <table align="center" cellspacing="0">
          <tbody>
            <tr v-for="{ key, name, money, address } in dataSource" :key="key">
              <td>{{ name }}</td>
              <td>{{ money }}</td>
              <td>{{ address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref<boolean>(false);
const props = defineProps({
  modalVisible: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['handle-modal-visibel']);

const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    emit('handle-modal-visibel', false);
  }, 2000);
};

const handleCancel = () => {
  emit('handle-modal-visibel', false);
};

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
];
</script>
<style lang="scss" scoped>
.refModal {
  :deep .ant-modal-footer {
    button:first-child {
      float: left;
    }
  }
  :deep .ant-modal-body {
    table,
    table td,
    table th {
      // border: 1px solid #d8d8d8;
      border-top: 1px solid #d8d8d8;
      border-left: 1px solid #d8d8d8;
    }
  }
  :deep .ant-modal-body {
    table td {
      padding: 10px;
      min-width: 80px;
    }
  }
  :deep .ant-modal-body {
    table {
      width: 100%;
      text-align: center;
    }
  }
  :deep .table-scroll {
    border-right: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    max-height: 300px;
    overflow-x: auto;
    overflow-y: auto;
  }
}
</style>
