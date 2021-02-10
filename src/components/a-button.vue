<template lang="pug">
button(@click="$emit('click')")
  slot
</template>

<script>
export default {
  emits: ['click'],
}
</script>

<style scoped>

</style>