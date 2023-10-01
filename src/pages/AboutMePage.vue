<template>
  <section class="about-me">
    <div class="container">
      <div class="about-me__container">
        <div class="about-me__bg"></div>
        <h2 class="about-me__title">
          <span class="about-me-span">#</span>обо мне
          <span class="about-me-divider"></span>
        </h2>
        <p class="about-me__description">Привет! Меня зовут Андрей</p>
        <p class="about-me__description">
          Я фронтенд-разработчик из Нижнего Новгорода, Россия. Я люблю создавать красивые,
          современные и адаптивные веб-сайты и работать над современными удобными веб-интерфейсами.
        </p>
        <p class="about-me__description">
          Развиваюсь в этом направлении больше года. Я пишу красивый и
          качественный код, понятный другим разработчикам. Я постоянно развиваюсь
          в изучении новых технологий и фреймворков.
        </p>
        <button class="about-me__btn btn">Read more -></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/styles/main';

.about-me {
  &__container {
    z-index: 1;
    padding: 4em 0;
    position: relative;
  }
  &__bg::before {
    content: '';
    background-image: url('../assets/images/bg-about.svg');
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    margin-left: auto;
    top: 30%;
    z-index: -1;
    width: 60%;
    height: 60%;
    opacity: 0.5;
    transform: rotate(20deg);
  }
  &__title {
    font-size: 2em;
    font-weight: $font_medium;
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
  }
  &-span {
    color: $primary;
    margin-right: 0.3em;
  }
  &-divider {
    display: block;
    margin-left: 1em;
    width: 10em;
    border-bottom: 2px solid $primary;
  }
  &__description {
    margin-bottom: 2em;
    color: $gray;
  }
  &__btn {
    transition: background-color 0.3s ease-in-out;
  }
  &__btn:hover {
    background-color: $bg_btn_hover;
  }
}
</style>
