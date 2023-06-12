<template>
  <Teleport v-if="open" to="#contact-modal" class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__contact" @click="onOutsideClick">
      <div ref="content" class="modal__content">
        <button class="modal__close" @click="doClose">X</button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ref} from "vue";
defineProps({
  open: {
    type: Boolean
  }
});
const emits = defineEmits([
  'update:open'
])
const content = ref(null)
const onOutsideClick = (event: any) => {
  if (event.target !== content.value && event.target.contains(content.value)) {
    doClose()
  }
}
const doClose = () => {
  emits('update:open')
}

</script>

<style scoped lang="scss">
@import '../../src/assets/styles/main';
.modal {

  &__overlay {
    z-index: 1010;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .55;
    background-color: #000000;
  }
  &__contact {
    z-index: 1010;
    overflow: auto;
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
    background-color: rgba(40,44,51,.9)
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    opacity: .75;
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
