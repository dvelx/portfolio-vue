<template>
  <section class="about-me">
    <div class="container">
      <div class="about-me__container">
        <h2 class="about-me__title">
          <span class="about-me-span">#</span>about-me
          <span class="about-me-divider"></span>
        </h2>
        <p class="about-me__description">Hello, I`m Andrei</p>
        <p class="about-me__description">
          I`m front-end developer based in Nizhny Novgorod, Russia. I love
          designing beautiful, modern and responsive websites and working on
          modern user-friendly web interfaces.
        </p>
        <p class="about-me__description">
          I have been developing in this direction for over a year. I write
          beautiful and high-quality code that is understandable to other
          developers. I am constantly developing and learning new
          technologies and frameworks.
        </p>
        <button class="about-me__btn btn">Read more -></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../assets/styles/main";

.about-me {
  &__container {

    padding: 4em 0;
    position: relative;
  }
  &__container::before {
    content: '';
    background-image: url("../assets/images/bg-about.svg");
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    right: 0;
    top: -40px;
    width: 100%;
    height: 100%;
    z-index: 1;
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
    transition: background-color .3s ease-in-out;
  }
  &__btn:hover {
    background-color: $bg_btn_hover;
  }
}

</style>
