<template>
  <label class="form__label">
    <slot />
    <span class="form__error" v-if="error">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  error: String
})
</script>

<style scoped lang="scss">
.form__value {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 12px;
  line-height: 1;
  color: #737373;
  font-weight: 300;
}
</style>
