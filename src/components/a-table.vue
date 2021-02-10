<template lang="pug">
div.table
  div.thead
    div.th

  div.tbody
    div.tr
      div.td

  div.tfoot
</template>

<script>
import {computed} from 'vue'

export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    tbodies: {
      type: Array,
      default: () => [],
    },
    // cell | row
    hoverType: {
      type: String,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    page: {
      type: Number,
      default: PAGE_NUMBER,
    },
    pageSize: {
      type: Number,
      default: PAGE_SIZE,
    },
  },

  setup (props) {
    // {fixed: right} 确保tbodies中都包含固定项 || tbodies有单独表头 ?? 合并单元格情况
    const columnsRef = computed(() => props.columns)

    return {
      columnsRef,
    }
  },
}
</script>

<style scoped>

</style>