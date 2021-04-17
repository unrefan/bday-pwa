<template>
  <main class="min-h-screen min-w-screen flex flex-col">
    <app-header class="p-4 h-16" />
    <section class="flex-1 h-full w-full pt-8 relative">
      <div class="w-full h-full rounded-t border-t-2 border-gray-500 px-4 pt-2 pb-4">
        <div class="flex mx-auto h-2 w-12 rounded bg-red-400 mb-2" />
        <router-view />
      </div>
    </section>
    <app-menu class="sticky bottom-0" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMenu from './components/layouts/AppMenu.vue'
import AppHeader from './components/layouts/AppHeader.vue'
import RootCalendar from './components/RootCalendar.vue'
import PlusButton from "./components/PlusButton.vue";

export default defineComponent({
  name: 'App',
  components: {
    PlusButton,
    AppMenu,
    AppHeader,
    RootCalendar,
  }
})
</script>
