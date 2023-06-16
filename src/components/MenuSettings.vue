<template>
  <div class="theme-toggle">
    <span class="theme-span">Dark mode</span>
    <input
      class="theme-checkbox"
      type="checkbox"
      id="switch"
      :checked="isChangeScheme"
      :value="isChangeScheme"
      @click="toggle"
    />
    <label class="theme-checkbox-label" for="switch">Toggle</label>
  </div>
</template>

<script setup lang="ts">
import { schemeStore } from '@/stores/schemeStore'
import { ref } from 'vue'

const store = schemeStore()

const isChangeScheme = ref(store.state.checked)

const toggle = () => {
  isChangeScheme.value = !isChangeScheme.value
  const newColorScheme = isChangeScheme.value ? 'dark' : 'light'
  store.changeScheme(newColorScheme, isChangeScheme.value, true)
  localStorage.setItem('user-scheme', newColorScheme)
  document.documentElement.className = newColorScheme
}
</script>

<style lang="scss">
@import '../assets/styles/main';

.theme-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.theme-span {
  display: block;
  margin-right: 10px;
}

//Theme toggle button
.theme-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}

.theme-checkbox-label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: grey;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.7);
  display: block;
  border-radius: 50px;
  position: relative;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}

.theme-checkbox-label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  background: $gray;
  border-radius: 21px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}

.theme-checkbox:checked + label {
  background: #fff;
}
.theme-checkbox:checked + label:after {
  background: $primary;
}

.theme-checkbox:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.theme-checkbox-label:active:after {
  width: 32px;
}
</style>
