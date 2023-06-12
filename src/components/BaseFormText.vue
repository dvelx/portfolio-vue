<template>
  <BaseFormField :title="title" :error="error">
    <input class="form__input" type="text" v-model="value" name="name" :placeholder="placeholder">
  </BaseFormField>
</template>

<script setup lang="ts">
import {computed} from "vue";
import BaseFormField from "@/components/BaseFormField.vue";

const props = defineProps({
  title: String,
  error: String,
  placeholder: String,
  modelValue: String
})
const emits = defineEmits([
  'update:modelValue'
])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

</script>

<style scoped lang="scss">
@import "../../src/assets/styles/main";
.form__input {
  padding: 10px 45px 10px 20px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 1px;
  border: 1px solid $white;
  background-color: rgba(40,44,51,.75);
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  color: $gray;
  font-size: 16px;
  font-family: inherit;
  line-height: 1;
  caret-color: $primary;
}
.form__input::placeholder {
  color: $gray;
  padding-left: 5px;
}
.form__input:focus, .form__input:hover {
  outline: 0;
  border-color: $primary
}
</style>
