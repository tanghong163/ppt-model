<template>
  <div>
    <Row v-for="{ id, children } in animationType" :key="id">
      <Col span="12" v-for="{ c_id, label, type, isActive } in children" :key="c_id">
        <div class="check-out-item flex-col-sb-center p-b-10-20" :class="{ active: isActive }" @click.native="handleBorderColor(c_id)">
          <div class="check-out-item-form" :class="[type]"></div>
          <p class="p-t-30">{{ label }}</p>
        </div>
      </Col>
    </Row>
    <Row class="all-backgroud">
      <Button>应用到全部</Button>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const animationType = reactive([
  {
    id: 0,
    children: [
      {
        c_id: 0,
        label: '无',
        isActive: ref(false)
      },
      {
        c_id: 1,
        type: ref('form-two'),
        label: '淡入淡出',
        isActive: ref(false)
      }
    ]
  },
  {
    id: 1,
    children: [
      {
        c_id: 2,
        label: '左右推移',
        type: ref('form-three'),
        isActive: ref(false)
      },
      {
        c_id: 3,
        label: '上下推移',
        type: ref('form-four'),
        isActive: ref(false)
      }
    ]
  }
]);
const handleBorderColor = c_id => {
  animationType.forEach(p => {
    p.children.forEach((c, index) => {
      if (c_id === c.c_id) {
        c.isActive = true;
      } else {
        c.isActive = false;
      }
    });
  });
};
</script>
<style lang="scss" scoped>
.check-out-item {
  border: 1px solid #d8d8d8;
  cursor: pointer;
  .check-out-item-form {
    width: 90%;
    height: 35px;
    background-color: #585858;
    position: relative;
    overflow: hidden;
  }
  .form-two {
    &:hover {
      &::after {
        @include elAnimation(fade);
      }
    }
  }
  .form-three {
    &:hover {
      &::after {
        @include elAnimation(translateX);
      }
    }
  }
  .form-four {
    &:hover {
      &::after {
        @include elAnimation(slideY);
      }
    }
  }
}
.active {
  border: 1px solid #f00;
}
</style>
