/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-06 15:15:29
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-06 16:22:20
 * @FilePath: \ppt-model\src\views\editor\canvas\hooks\useViewportSize.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, ref, Ref, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSlidesStore, useMainStore } from '@/stores';
import { VIEWPORT_SIZE } from '@/configs/canvas';

export default (canvasRef: Ref<HTMLElement | undefined>) => {
  const viewportLeft = ref(0);
  const viewportTop = ref(0);

  const slideStore = storeToRefs(useSlidesStore());
  const mainStore = useMainStore();
  const { viewportRatio } = slideStore;
  const { canvasPercentage } = storeToRefs(mainStore);
  // 计算画布可视区域的位置
  const setViewportPosition = () => {
    if (!canvasRef.value) return;
    const canvasWidth = canvasRef.value.clientWidth;
    const canvasHeight = canvasRef.value.clientHeight;

    if (canvasHeight / canvasWidth > viewportRatio.value) {
      const viewportActualWidth = canvasWidth * (canvasPercentage.value / 100);
      mainStore.setCanvasScale(viewportActualWidth / VIEWPORT_SIZE);
      viewportLeft.value = (canvasWidth - viewportActualWidth) / 2;
      viewportTop.value = (canvasHeight - viewportActualWidth * viewportRatio.value) / 2;
    } else {
      const viewportActualHeight = canvasHeight * (canvasPercentage.value / 100);
      mainStore.setCanvasScale(viewportActualHeight / (VIEWPORT_SIZE * viewportRatio.value));
      viewportLeft.value = (canvasWidth - viewportActualHeight / viewportRatio.value) / 2;
      viewportTop.value = (canvasHeight - viewportActualHeight) / 2;
    }
  };
  // 画布可视区域位置和大小的样式
  const viewportStyles = computed(() => ({
    width: VIEWPORT_SIZE,
    height: VIEWPORT_SIZE * viewportRatio.value,
    left: viewportLeft.value,
    top: viewportTop.value
  }));

  // 监听画布尺寸发生变化时，更新可视区域的位置
  const resizeObserver = new ResizeObserver(setViewportPosition);
  // 当Dom加载完成会回调监听画布尺寸发生变化时的函数setViewportPosition来更新可视区域的位置
  onMounted(() => {
    if (canvasRef.value) resizeObserver.observe(canvasRef.value);
  });
  onUnmounted(() => {
    if (canvasRef.value) resizeObserver.unobserve(canvasRef.value);
  });

  return {
    viewportStyles
  };
};
