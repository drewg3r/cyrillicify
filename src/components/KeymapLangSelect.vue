<template>
  <form class="max-w-sm mx-auto">
    <div class="flex">
      <label
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      >
        {{ $t('layout') }}
      </label>
      <select
        v-model="selectedLayout"
        @change="selectLayout"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="l in layouts" :value="l.layout" :selected="l.selected">
          {{ $t(`keymaps.${l.layout}`) }}
        </option>
      </select>
    </div>
  </form>
</template>

<script setup>
import { keymaps } from '@/assets/keymaps.json'
import { ref, onMounted } from 'vue'
import { getStoredLayout, setStoredLayout } from '@/utils/localStorage'

const selectedLayout = defineModel()

const layouts = ref([])

const selectLayout = (event) => {
  setStoredLayout(event.target.value);
}

onMounted(() => {
  const preselectedLayout = getStoredLayout() ?? Object.keys(keymaps)[0]
  selectedLayout.value = preselectedLayout
  for (let layout in keymaps) {
    layouts.value.push({
      layout,
      selected: layout === preselectedLayout
    })
  }
})
</script>
