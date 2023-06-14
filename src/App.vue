<template>
  <HeaderBlock />

  <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <FooterBlock />
  <div id="root-modal"></div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterBlock from '@/components/FooterBlock.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
</script>

<style lang="scss">
.router-view {
  width: calc(100% - 20px);
  flex: 1 0 auto;
}
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: all 0.3s ease-out;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
