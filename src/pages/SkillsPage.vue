<template>
  <section class="skills">
    <div class="container">
      <div class="skills__container">
        <h2 class="skills__title">
          <span class="skills-span">#</span>навыки
          <span class="skills-divider"></span>
        </h2>
        <div class="skills__grid">
          <div v-for="skill in skills" :key="skill.id" class="skills__item">
            <h3 class="skills__item-title">{{ skill.title }}</h3>
            <span class="skills__item-divider"></span>
            <p class="skills__item-description">{{ skill.skillName }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import skills from '@/data/skills'
</script>

<style scoped lang="scss">
@import '../assets/styles/main';

.skills {
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
  }

  &__item {
    border: 1px solid $gray;

    &-title {
      padding: 0.5em;
    }
    &-divider {
      display: block;
      border-bottom: 1px solid $gray;
      width: 100%;
    }
    &-description {
      padding: 0.5em;
      color: $gray;
    }
  }
}
@media (max-width: 991px) {
  .skills {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (max-width: 768px) {
  .skills {
    &__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
