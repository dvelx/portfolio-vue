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
      <nav class="nav__mobile">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink to="/" href="#" class="nav__item-link home-icon">
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/skills/" class="nav__item-link skill-icon">
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/works/" class="nav__item-link works-icon">
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/about-me" class="nav__item-link about-icon">
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink to="/contacts/" class="nav__item-link contact-icon">
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
  display: flex;

  &-title {
    overflow-wrap: break-word;
  }

  &-link {
    display: flex;
    transition: color .3s ease-in-out;
    min-width: calc(100% + 10px);
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
.nav__mobile {
  display: none;
}
@media (max-width: 991px) {
  .header {
    &__container {
      justify-content: start;
    }
  }
  .logo__link {
    display: none;
  }
  .nav__item-link {
    font-size: 2em;
  }
}
@media (max-width: 767px) {
  .header {
    &__nav {
      display: none;
    }
    &__container {
      max-width: 100vw;
      padding: 0;
      box-shadow: 0 10px 5px 2px rgba(59,63,71, .5);
    }
  }
  .nav__mobile {
    display: flex;
    height: 60px;
    padding-top: 10px;
    flex-direction: row;
    background-color: rgba(59,63,71, .5);
  }
  .home-icon {
    width: 50px;
    background-image: url("../assets/images/noun-home-2472593.svg");
    background-repeat: no-repeat;
  }
  .skill-icon {
    width: 50px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/noun-skill-5613365.svg");
  }
  .works-icon {
    width: 50px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/noun-rotation-works-2856402.svg");
  }
  .about-icon {
    width: 50px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/noun-about-me-5241214.svg");
  }
  .contact-icon {
    width: 50px;
    background-repeat: no-repeat;
    background-image: url("../assets/images/noun-contacts-4195379.svg");
  }
  .nav__item-link {
    font-size: 1em;
  }
}
.nav__list {
  width: 100vw;
  padding: 0 20px;
  justify-content: space-between;
}

</style>
