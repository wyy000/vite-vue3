<template lang="pug">
div.flex
  nav.w-48.border-r.text-center.flex.flex-col
    router-link(v-for="it of list" :to="`/playground/${it.path}`" class="py-2 border-b") {{it.name}}
  div.flex-1
    router-view
</template>

<script>
import {computed} from 'vue'

import nav from '../../router/playground'

export default {
  setup () {
    const list = computed(() => nav.filter(it => it.name))

    return {
      list,
    }
  },
}
</script>

<style scoped lang="scss">
nav {
  a {
    .router-link-active {
      @apply bg-pink-500;
    }

    &.router-link-active {
      @apply bg-pink-400;
    }
  }
  a,
  a.router-link-active {
    &:hover {
      @apply bg-pink-300;
    }

    &:active {
      @apply bg-pink-500;
    }
  }
}
</style>