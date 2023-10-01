<template>
  <HeaderBlock />

  <main>
    <RouterView class="router-view" v-slot="{ Component }">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <FooterBlock />
  <div id="root-modal"></div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterBlock from '@/components/FooterBlock.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import { schemeStore } from '@/stores/schemeStore'
const store = schemeStore()
console.log()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const newColorScheme = e.matches ? 'dark' : 'light'
  if (!store.state.autoChangeScheme) {
    console.log(newColorScheme === 'dark')
    store.changeScheme(newColorScheme, newColorScheme === 'dark')
    localStorage.setItem('user-scheme', newColorScheme)
    document.documentElement.className = newColorScheme
  }
})
document.documentElement.className = store.getScheme
</script>

<style lang="scss">

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: all 0.6s ease-out;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
