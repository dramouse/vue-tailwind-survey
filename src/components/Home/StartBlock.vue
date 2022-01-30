<template>
  <div>
    <Container>
      <h3
        class="text-lg text-center text-darkBlue mx-auto mb-4 max-w-4xl md:mb-16 md:text-5xl"
      >
        Пройдите небольшой опрос <br class="md:hidden" />
        и узнайте, <span class="bordered relative">как избежать рисков</span>
        <br class="md:hidden" />
        при продаже или покупке квартиры
      </h3>
      <StartWindow />
    </Container>
  </div>
</template>

<script>
import Container from "../layout/Container.vue";
import StartWindow from "./StartWindow.vue";

export default {
  name: "StartBlock",
  components: { Container, StartWindow },
};
</script>

<style>
.bordered {
  width: 331px;
}
.bordered::before {
  content: "";
  position: absolute;
  top: 1px;
  left: -3px;
  width: 174px;
  height: 23px;
  border: 1px solid #d44b4b;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .bordered::before {
    top: 57px;
    left: -840px;
    width: 453px;
    height: 48px;
  }
}
</style>
