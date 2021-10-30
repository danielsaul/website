<script setup>
import Sidebar from './Sidebar.vue'

</script>

<template>
  <div class="flex flex-col sm:flex-row pt-6">
    <Sidebar />
    <div class="p-8">
      <Content class="prose prose-sm dark:prose-light" />
    </div>
  </div>
</template>
