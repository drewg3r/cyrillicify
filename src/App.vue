<script setup>
import { ref, onMounted } from 'vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import KeymappedTextarea from './components/KeymappedTextarea.vue'
import KeymapLangSelect from './components/KeymapLangSelect.vue'
import UILangDropown from './components/UILangDropdown.vue'

import { initDropdowns } from 'flowbite'

const keymapLang = ref()

onMounted(() => {
  initDropdowns()
})
</script>

<template>
  <div class="h-screen bg-neutral-100 dark:bg-slate-900">
    <div class="container flex justify-center lg:w-1/2 xl:w-1/3 h-full mx-auto px-5">
      <div class="my-auto h-2/3 w-full">
        <h1
          class="text-5xl font-extrabold font-mono text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-blue-700 underline decoration-2 decoration-blue-400 inline"
        >
          <span class="me-2">#</span>Cyrillicify
        </h1>
        <p class="my-8 dark:text-slate-100">
          {{ $t('slogan') }}
        </p>
        <div class="flex justify-between mb-2">
          <div>
            <KeymapLangSelect v-model="keymapLang" />
          </div>
          <ThemeSwitcher />
        </div>
        <KeymappedTextarea :lang="keymapLang" />
      </div>
    </div>
  </div>

  <footer
    class="fixed bottom-0 left-0 z-20 w-full p-4 flex items-center justify-between bg-neutral-50 border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      <a href="https://github.com/drewg3r" class="hover:underline">drewg3r</a>
      <span class="mx-3">|</span>
      <a href="https://github.com/drewg3r/cyrillicify" class="hover:underline">repo</a>
    </span>
    <div class="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
      <UILangDropown />
    </div>
  </footer>
</template>
