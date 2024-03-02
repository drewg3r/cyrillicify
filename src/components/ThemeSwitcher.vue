<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" v-model="darkTheme" @change="toggleDark" />
    <div
      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    ></div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-nowrap">{{
      $t('darkTheme')
    }}</span>
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getStoredTheme, setStoredTheme } from '@/utils/localStorage'

const darkTheme = ref(false);

const toggleDark = () => {
  if (darkTheme.value === true) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  setStoredTheme(darkTheme.value ? 'dark' : 'light');
}

onMounted(() => {
  darkTheme.value = getStoredTheme() === 'dark' ? true : false;
  toggleDark();
})
</script>
