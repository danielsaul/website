<script setup>
import Sidebar from './Sidebar.vue'
import ToggleDarkMode from './ToggleDarkMode.vue'
import { useData } from 'vitepress'

const { page } = useData()

</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div>
      <Sidebar class="p-8 pt-12 sticky top-0" />
      <ToggleDarkMode class="fixed m-8 top-0 right-0 sm:inset-auto sm:bottom-0 sm:left-0 z-10" />
    </div>
    <div class="p-8 pt-12">
      <!-- <div class="mb-8"> -->
      <!--   <h1 class="text-3xl font-bold pb-2">{{ page.title }}</h1> -->
      <!--   <p class="text-xs italic font-serif">{{ page.frontmatter.date }}</p> -->
      <!-- </div> -->
      <!-- <Content class="prose prose-sm dark:prose-light" /> -->
    </div>
  </div>
</template>
