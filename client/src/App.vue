<template>
  <main class="grid grid-cols-layout grid-rows-layout min-h-screen">
    <app-menu class="col-start-1 col-end-2 row-span-2"></app-menu>
    <app-header class="col-start-2 col-end-13 row-span-1"></app-header>
    <div class="col-start-2 col-end-12 p-8 row-span-1">
      <root-calendar></root-calendar>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMenu from './components/AppMenu.vue'
import AppHeader from './components/AppHeader.vue'
import RootCalendar from './components/RootCalendar.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppMenu,
    AppHeader,
    RootCalendar,
  }
})
</script>
