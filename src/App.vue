<template lang="pug">
div.h-full.flex.flex-col
  nav.p-4.border-b-2.border-pink-500.flex.justify-center.space-x-1
    router-link(to="/home") home
    router-link(to="/playground") playground
  router-view.flex-1
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>