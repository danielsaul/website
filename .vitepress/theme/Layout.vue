<script setup>
import Sidebar from './Sidebar.vue'
import { useData } from 'vitepress'

const { page } = useData()

</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div>
      <Sidebar class="p-8 pt-12 sticky top-0" />
    </div>
    <div class="p-8 pt-12">
      <div class="mb-8">
        <h1 class="text-3xl font-bold pb-2">{{ page.title }}</h1>
        <p class="text-xs italic font-serif">{{ page.frontmatter.date }}</p>
      </div>
      <Content class="prose prose-sm dark:prose-light" />
    </div>
  </div>
</template>
