<template>
  <div class="bg-mainRed">
    <Container
      class="md:bg-banner md:bg-no-repeat md:bg-right-bottom md:bg-bannerSize text-center md:text-left pt-5 md:pt-20 md:pb-24"
    >
      <p class="text-white text-sm md:text-base mb-3">
        Запутались в сложных терминах и документах?
      </p>
      <h1
        class="text-2xl md:font-bold max-w-mobileBanner mx-auto mb-12 md:-mx-0 md:text-5xl md:max-w-banner text-white"
      >
        Узнайте, какие
        <span class="with-border-docs relative">документы</span>
        подготовить и что учесть при
        <span class="with-border-sell relative">продаже и покупке</span>
        квартиры
      </h1>
      <button
        class="text-grey rounded-3xl pt-3 pb-4 mb-7 px-20 bg-white md:font-bold md:rounded-xl md:drop-shadow-bannerButton"
      >
        Хочу знать больше
      </button>
      <div class="md:hidden">
        <img src="../../assets/img/banner.png" alt="city" />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../layout/Container.vue";
export default {
  components: { Container },
  name: "MainBanner",
};
</script>

<style>
.with-border-docs::before {
  content: "";
  position: absolute;
  top: 10px;
  left: -7px;
  width: 275px;
  height: 53px;
  border: 1px solid white;
  border-radius: 20px;
}

.with-border-sell::before {
  content: "";
  position: absolute;
  top: 10px;
  right: -4px;
  width: 450px;
  height: 53px;
  border: 1px solid white;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .with-border-docs::before {
    display: none;
  }

  .with-border-sell::before {
    top: 6px;
    right: -4px;
    width: 213px;
    height: 23px;
  }
}
</style>
