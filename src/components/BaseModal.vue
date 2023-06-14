<template>
    <Teleport v-if="open" to="#root-modal" class="modal">
      <div :class="getClassName + '__overlay'"></div>
      <div :class="getClassName + '__contact'" @click="onOutsideClick">
        <div ref="content" :class="getClassName + '__content'">
          <button :class="getClassName + '__close'" @click="doClose">X</button>
          <slot></slot>
        </div>
      </div>
    </Teleport>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  nameEvent: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:open'])

const content = ref(null)

const onOutsideClick = (event: any) => {
  if (event.target !== content.value && event.target.contains(content.value)) {
    doClose()
  }
}
const doClose = () => {
  emits('update:open', false)
}
const getClassName = computed(() => {
  return props.nameEvent
})
</script>

<style lang="scss">
@import '../../src/assets/styles/main';

//FOOTER_SETTING MODAL STYLE
.footer-setting {
  &__overlay {
    z-index: 1010;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    background-color: #000000;
  }
  &__contact {
    z-index: 1010;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__content {
    position: relative;
    max-width: 1000px;
    bottom: 53px;
    margin-top: auto;
    margin-left: auto;
    right: 3px;
    padding: 50px;
    color: $white;
    border: 1px solid $gray;
    background-color: rgba(40, 44, 51, 0.9);
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    opacity: 0.75;
    cursor: pointer;
    transition: opacity ease 0.5s;
  }
  &__close:hover {
    opacity: 1;
  }
  &__close::before,
  &__close::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 2px;
    background: $primary;
  }
  &__close::before {
    transform: rotate(45deg);
  }
  &__close::after {
    transform: rotate(-45deg);
  }
}


//HOME PAGE MODAL STYLE
.home-page {
  &__overlay {
    z-index: 1010;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    background-color: #000000;
  }
  &__contact {
    z-index: 1010;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  &__content {
    position: relative;
    max-width: 1000px;
    margin-top: auto;
    margin-bottom: auto;
    padding: 50px;
    color: $white;
    border: 1px solid $gray;
    border-bottom: none;
    background-color: rgba(40, 44, 51, 0.9);
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    opacity: 0.75;
    cursor: pointer;
    transition: opacity ease 0.5s;
  }
  &__close:hover {
    opacity: 1;
  }
  &__close::before,
  &__close::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 2px;
    background: $primary;
  }
  &__close::before {
    transform: rotate(45deg);
  }
  &__close::after {
    transform: rotate(-45deg);
  }
}
</style>
