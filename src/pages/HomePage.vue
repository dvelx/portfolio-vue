<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__container">
          <div class="hero__left">
            <h1 class="hero__left-title">
              Привет! Меня зовут
              <span class="hero__left-span">Андрей</span> и я
              <span class="hero__left-span">front-end разработчик</span>
            </h1>
            <p class="hero__left-description">
              Я создаю адаптивные веб-сайты, где технологии сочетаются с творчеством.
            </p>
            <button class="hero__left-btn btn" @click.prevent="openBtn">Contact me !!</button>
            <BaseModal v-model:open="open" name-event="home-page">
              <form action="#" method="post" class="modal__form">
                <BaseFormText title="Name" placeholder="You name" />
                <BaseFormText title="Email" placeholder="You email" />
                <BaseFormTextarea title="Enter you message" placeholder="Enter you message" />
                <button class="modal-btn btn adaptive">Send</button>
              </form>
            </BaseModal>
          </div>
          <div class="hero__right"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import { ref } from 'vue'
import BaseFormText from '@/components/BaseFormText.vue'
import BaseFormTextarea from '@/components/BaseFormTextarea.vue'

const open = ref(false)

const openBtn = () => {
  open.value = true
}
</script>

<style lang="scss">
@import '../assets/styles/main';
.logo {
  position: absolute;
  max-height: 470px;
  color: #c778dd;
  right: 50px;
  transform: rotate(30deg);
}
.modal__form {
  position: relative;
}

.hero {
  &__container {
    padding: 4em 0;
    display: flex;
    justify-content: space-between;
  }

  &__left {
    width: 50%;
    &-title {
      font-size: 2.5em;
      margin-bottom: 2em;
    }
    &-span {
      color: $primary;
    }
    &-description {
      color: $gray;
      font-size: 1.2em;
      margin-bottom: 2em;
    }
    &-btn.btn {
      padding: 0.5em 1em;
      font-size: 2em;
      transition: background-color 0.3s ease-in-out;
    }
    &-btn:hover {
      background-color: $bg_btn_hover;
    }
  }
  &__right {
    position: relative;
    width: 40%;
    right: auto;
  }
  &__right::before {
    content: '';
    background-image: url('../assets/images/logo.svg');
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    right: 50px;
    top: 40px;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    transform: rotate(-20deg);
  }
}
.modal-btn {
  transition: background-color 0.3s ease-in-out;
}
.modal-btn:hover {
  background-color: $bg_btn_hover;
}
@media (max-width: 991px) {
  .hero {
    &__left {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    &__right {
      display: none;
    }
  }
}
@media (max-width: 768px) {
  .hero {
    &__left-title {
      font-size: 1.5em;
    }
    &__left-btn.btn {
      font-size: 1em;
      padding: 8px 16px;
    }
  }
}
</style>
