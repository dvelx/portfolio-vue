import { defineStore } from 'pinia'
import { ref } from 'vue'

const scheme = localStorage.getItem('user-theme')

export const themeStore = defineStore('theme', () => {
  const state = ref({
    theme: 'dark',
    checked: scheme === 'dark'
  })
  const mode = localStorage.getItem('user-theme')
  function setTheme(mode: string | null) {
    if (mode) {
      return (state.value.theme = mode)
    }
    return
  }
  setTheme(mode)

  return {
    state
  }
})
