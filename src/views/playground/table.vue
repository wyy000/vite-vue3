<template lang="pug">
h1.p-2.text-center A table
div.m-4.border.flex.flex-col
  div.border-b.flex
    div(v-for="it of title" :style="it.width ? {'width': it.width + 'px'} : {'flex': 1}") {{it.title}}
  div.border-b.flex(v-for="item of data")
    div(v-for="(name, key) of item" :style="title.find(it => key === it.title).width ? {'width': title.find(it => key === it.title).width + 'px'} : {'flex': 1}") {{name}}
  div.bg-blue.flex.justify-end(@click="type = null")
    button.w-24.flex.items-center.justify-around(v-for="it of operation" @click.stop="type = it.type")
      svg(v-if="it.type === 'page_info'" fill="none" viewBox="0 0 24 24" width="20" height="20")
        path(fill="none" d="M0 0h24v24H0z")
        path(fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-5-3h4v2h-4V6z")
      svg(v-if="it.type === 'custom'" fill="none" viewBox="0 0 24 24" width="20" height="20")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122")
      svg(v-if="it.type === 'ekv'" viewBox="0 0 20 20" fill="currentColor" width="24" height="20")
        path(d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z")
        path(fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd")
      span {{it.text}}
</template>

<script>
import {computed, ref} from 'vue'

const list = Array.from({length: 30}).map((it, idx) => ({
  time: '22:34:00',
  content: idx % 2 ? ['购买产品， 产品为【天天利2号】', '购买失败， 产品为【天天利2号】，失败编码为【ERROR01】', '购买成功， 产品为【天天利2号】，购买金额为【10000】'][parseInt(Math.random() * 3)] : ['首页', '手势密码解锁'][idx % 2],
  type: ['page_info', 'custom', 'ekv'][idx % 3],
}))
const operation = [
  {type: 'page_info', text: '页面'},
  {type: 'custom', text: '普通事件'},
  {type: 'ekv', text: '业务事件'},
]
const title = [
  {title: 'time', width: 150},
  {title: 'content'},
  {title: 'type', width: 180},
]

export default {
  setup () {
    const type = ref(null)
    const data = computed(() => list.filter(it => !type.value || it.type === type.value))

    return {
      data,

      title,
      operation,
      type,
    }
  },
}
</script>

<style scoped>
tbody tr:nth-child(even) {
  @apply bg-gray-100;
}
</style>