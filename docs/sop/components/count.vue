<script setup lang="ts">
import { ref } from 'vue'
import { random } from 'lodash-es'
import { ElButton } from 'element-plus'
import { useData } from 'vitepress';

const count = ref(0)
const clickCount = ref(0)
const add = () => {
  clickCount.value++
  count.value += random(0, 1)
}
const { isDark } = useData()
</script>
<template>
  <p>当前计数: {{ count }} 点击计数: {{ clickCount }}</p>
  <ElButton @click="add" color="#dc143c" plain :dark="isDark">增加</ElButton>
</template>