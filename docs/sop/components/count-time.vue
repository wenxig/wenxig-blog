<script setup lang="ts">
import { ref } from 'vue'
import { random } from 'lodash-es'
import { ElButton, ElSpace } from 'element-plus'
import { useData } from 'vitepress';

const count = ref(0)
let maxTime = 60
const time = ref(0)
const clickCount = ref(0)
const add = () => {
  clickCount.value++
  count.value += random(0, 1)
}
const isStart = ref(false)
let siv: number
const start = () => {
  count.value = time.value = clickCount.value = 0
  isStart.value = true
  siv = setInterval(() => {
    if ((maxTime - time.value) == 0) {
      isStart.value = false
      return clearInterval(siv)
    }
    time.value++
  }, 1000)
}
const reset = () => {
  count.value = time.value = clickCount.value = 0
  isStart.value = false
  clearInterval(siv)
}
const { isDark } = useData()
</script>
<template>
  <span style="display: block;margin-bottom: 1rem;">当前计数: {{ count }} 点击计数: {{ clickCount }} 剩余时间:
    {{ maxTime - time }}</span>
  <ElSpace>
    <ElButton @click="add" color="#dc143c" plain :disabled="!isStart" :dark="isDark">增加</ElButton>
    <ElButton @click="isStart ? reset() : start()" color="#6cc8ac" plain :dark="isDark">{{ isStart ? "重置" : "开始" }}
    </ElButton>
  </ElSpace>
</template>