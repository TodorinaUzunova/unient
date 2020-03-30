<template>
  <div v-if="$slots.main">
     <slot name="main"></slot>
    </div>
</template>

<script>
export default {
    name:"app-main"
}
</script>

<style scoped>
</style>
