<script setup>
import { ref } from 'vue'

import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

const darkMode = ref(false)

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkMode.value = true
  document.documentElement.classList.add('dark')
}

function toggle() {
    if (darkMode.value) {
    darkMode.value = false
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    darkMode.value = true
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
}

</script>

<template>
  <button @click="toggle" class="rounded-full p-2 bg-opacity-60 dark:bg-opacity-60 bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white">
    <SunIcon v-if="darkMode" class="h-5 w-5" />
    <MoonIcon v-else class="h-5 w-5" />
  </button>
</template>
