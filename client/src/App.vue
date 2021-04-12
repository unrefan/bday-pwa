<template>
  <main>
    <app-header></app-header>
    <app-menu></app-menu>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMenu from './components/AppMenu.vue'
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppMenu,
    AppHeader,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>