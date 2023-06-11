<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <RouterLink to="/" class="logo__link">
          <span class="logo__link-span">@</span>
          <p class="logo__link-title">dvelx</p>
        </RouterLink>
      </div>
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink to="/" href="#" class="nav__item-link">
              <span class="nav__item-span">#</span>
              <p class="nav__item-title">home</p>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/skills/" class="nav__item-link">
              <span class="nav__item-span">#</span>
              <p class="nav__item-title">skills</p>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/works/" class="nav__item-link">
                <span class="nav__item-span">#</span>
                <p class="nav__item-title">works</p>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/about-me" class="nav__item-link">
              <span class="nav__item-span">#</span>
              <p class="nav__item-title">about-me</p>
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/contacts/" class="nav__item-link">
              <span class="nav__item-span">#</span>
              <p class="nav__item-title">contacts</p>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../assets/styles/main";

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo__link {
  display: flex;
  flex-direction: row;
  padding: 1.3em 0;
  font-size: 1em;
  font-weight: 800;
  transition: color .3s ease-in-out;

  &-span {
    color: $primary;
    margin-right: .4em;
  }
}
.logo__link:hover {
  color: $primary;
}
.nav__list {
  display: flex;
}
.nav__item {

  &-link {
    display: flex;
    transition: color .3s ease-in-out;
  }
  &-link:hover {
    color: $primary;
  }
  &-span {
    color: $primary;
    margin-right: .3em;
  }
}
.nav__item:not(:last-child) {
  margin-right: 2em;
}


</style>
