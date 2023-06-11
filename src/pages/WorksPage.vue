<template>

    <section class="works">
      <div class="works__container container">
        <h1 class="works__title">
          <span class="works-span">#</span>works
          <span class="works-divider"></span>
        </h1>
        <div class="works__grid">
          <div v-for="work in works" :key="work.id" class="works__grid-item">
            <h3 class="works__item-title">
              {{ work.title }}
            </h3>
            <span class="works__item-divider"></span>
            <a :href="work.url" class="works__item-link" target="_blank"></a>
              <img class="works__item-img" :src="work.src" alt="moire">
            <span class="works__item-divider"></span>
            <p class="works__item-description">
              {{ work.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup lang="ts">
import works from "@/data/works";
</script>

<style scoped lang="scss">
@import "../assets/styles/main";
.works {
  &__container {
    padding: 4em 0;
  }
  &__title {
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: $font_medium;
    margin-bottom: 2em;
  }
  &-span {
    color: $primary;
    margin-right: 0.3em;
  }
  &-divider {
    display: block;
    margin-left: 1em;
    width: 7em;
    border-bottom: 2px solid $primary;
  }
  &__grid {
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(4, 1fr);

    &-item {

      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid $gray;
    }
  }
  &__item-title {
    padding: 0.5em;
  }
  &__item-divider {
    display: block;
    border-bottom: 1px solid $gray;
    width: 100%;
  }
  &__item-img {
    padding: 0.5em;
  }
  &__item-description {
    padding: 0.5em;
  }
  &__item-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
