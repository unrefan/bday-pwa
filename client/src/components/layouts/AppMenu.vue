<template>
  <aside class="bg-indigo-600 text-white w-full p-4">
    <nav class="w-full flex">
      <ul class="w-full flex items-center justify-center">
        <li>
          <router-link
            :to="{name: 'home'}"
            class="w-full h-full flex justify-center items-center"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  props: {},
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>
