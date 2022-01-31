<template>
  <div class="w-screen h-screen md:pt-6">
    <h1
      class="hidden mx-auto text-center text-2xl leading-tight max-w-xl mb-6 text-darkBlue md:block"
    >
      Пройдите небольшой опрос и узнайте,
      <span class="text-mainRed"
        >как избежать рисков при продаже или покупке</span
      >
      вашей квартиры
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SurveyPage",
};
</script>

<style></style>
