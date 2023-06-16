import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const darkSchemeLocal = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

export const schemeStore = defineStore('theme', () => {
  const state = ref({
    scheme: 'dark',
    checked: true,
    autoChangeScheme: false
  })
  const setScheme = (scheme: string, isChecked: boolean, flag?: boolean) => {
    state.value.scheme = scheme
    state.value.checked = isChecked
    if (flag) {
      state.value.autoChangeScheme = flag
    }
  }
  const changeScheme = (scheme: string, isChecked: boolean, flag?: boolean) => {
    setScheme(scheme, isChecked, flag)
  }
  const getScheme = computed(() => state.value.scheme)
  return {
    changeScheme,
    getScheme,
    state
  }
})
