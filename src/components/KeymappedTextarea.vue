<template>
  <div>
    <textarea
      v-model="text"
      @keydown="handleKeyDown"
      rows="5"
      class="w-full resize-none block p-2.5 text-base text-gray-900 bg-neutral-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
      :placeholder="textareaPlaceholder"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { keymaps } from '@/assets/keymaps.json'

const props = defineProps({
  lang: {
    type: String,
  }
})

const text = ref('')

const mapKey = (lang, keyCode, shift) => {
  if (!keymaps.hasOwnProperty(lang)) return
  if (!keymaps[lang].mapping.hasOwnProperty(keyCode)) return

  if (shift) {
    return keymaps[lang].mapping[keyCode][1]
  } else {
    return keymaps[lang].mapping[keyCode][0]
  }
}

const handleKeyDown = (event) => {
  if (event.ctrlKey || event.altKey || event.metaKey) return

  const mappedChar = mapKey(props.lang, event.code, event.shiftKey)
  if (mappedChar) {
    event.preventDefault()
    text.value += mappedChar
  }
}

const textareaPlaceholder = computed(() => {
  const placeholders = keymaps[props.lang ?? 'en'].placeholders;
  return placeholders[Math.floor(Math.random() * placeholders.length)];
})
</script>
