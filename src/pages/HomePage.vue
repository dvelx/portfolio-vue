<template>

    <main>
      <section class="hero">
        <div class="container">
          <div class="hero__container">
            <div class="hero__left">
              <h1 class="hero__left-title">
                Hello! My name is
                <span class="hero__left-span">Andrei</span> and I`m a
                <span class="hero__left-span">front-end developer</span>
              </h1>
              <p class="hero__left-description">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button class="hero__left-btn btn">Contact me !!</button>
            </div>
            <div class="hero__right">

            </div>
          </div>
        </div>
      </section>
    </main>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../assets/styles/main";
.logo {
  position: absolute;
  max-height: 470px;
  color: #C778DD;
  right: 50px;
  transform: rotate(30deg);
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
      color: $primary
    }
    &-description {
      color: $gray;
      font-size: 1.2em;
      margin-bottom: 2em;
    }
    &-btn.btn {
      padding: .5em 1em;
      font-size: 2em;
      transition: background-color .3s ease-in-out;
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
    background-image: url("../assets/images/logo.svg");
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    right: 50px;
    top: 40px;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    transform: rotate(-20deg)
  }
}
</style>
