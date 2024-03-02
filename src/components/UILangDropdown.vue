<template>
  <button
    id="dropdownNavbarLink"
    data-dropdown-toggle="dropdownLang"
    class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
  >
    {{ $i18n.locale }}
    <svg
      class="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <div
    id="dropdownLang"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
      <li v-for="language in Languages">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          @click="setAppLocale(language.locale)"
          >{{ language.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { Languages } from '@/locales'
  import { setStoredLocale } from '@/utils/localStorage'
  import { useI18n } from "vue-i18n";

  const i18n = useI18n({ useScope: "global" });
  
  const setAppLocale = (locale) => {
    i18n.locale.value = locale;
    setStoredLocale(locale);
  }
</script>
