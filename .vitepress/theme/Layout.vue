<script setup>
import Sidebar from './Sidebar.vue'
import { useData } from 'vitepress'

const { page } = useData()

</script>

<template>
  <div class="flex flex-col sm:flex-row pt-6">
    <Sidebar />
    <div class="m-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold pb-2">{{ page.title }}</h1>
        <p class="text-xs italic font-serif">{{ page.frontmatter.date }}</p>
      </div>
      <Content class="prose prose-sm dark:prose-light" />
    </div>
  </div>
</template>
