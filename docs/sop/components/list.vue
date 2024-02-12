<script setup lang='ts'>
import { ref } from 'vue';
import { ElButton, ElSpace } from 'element-plus'
import { useData } from 'vitepress';
import { random } from 'lodash-es'

const list = ref<string[]>([])
const { isDark } = useData()
const add = () => list.value.push('输入内容...')
const p = ref(0)
const reset = () => {
  list.value = []
  p.value = 0
}
const next = () => {
  if (list.value.length - 1 >= p.value) {
    p.value += random(1, 2)
    console.log(list.value.length, p.value)
    if (list.value.length <= p.value) p.value = 0
    return
  }
  p.value = 0
}
</script>

<template>
  <ClientOnly>
    <div
      style="width: 90%; border-radius: 2rem;min-height: 50rem; width: 90%;background-color:rgba(233, 233, 233, 0.7);justify-content: center;padding: 1rem;flex-direction: column;">
      <ElSpace>
        <ElButton color="rgba(220, 220, 220,0.9)" :dark="isDark" @click="add">添加事件</ElButton>
        <ElButton color="rgba(220, 220, 220,0.9)" :dark="isDark" @click="next">下一项</ElButton>
        <ElButton color="rgba(220, 220, 220,0.9)" :dark="isDark" @click="reset">重置</ElButton>
      </ElSpace>
      <div
        style="width: 100%;height: 3rem;border-radius: 3rem;position: relative;display: flex;align-items: center;padding-left: 1rem;outline: none;margin-top: 1rem;transition: background ease-in-out;"
        :style="{ 'background-color': p == index ? '#f8c9b5' : 'rgba(233, 233, 233, 0.7)' }" v-for="(row, index) of list"
        :key="index" contenteditable>
        {{ row }}
      </div>
    </div>
  </ClientOnly>
</template>