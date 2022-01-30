<template>
  <div class="home">
    <Header />
    <MainBanner class="mb-28" />
    <StartBlock class="mb-28" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import MainBanner from "../components/Home/MainBanner.vue";
import StartBlock from "../components/Home/StartBlock.vue";
import Footer from "../components/layout/Footer.vue";
export default {
  components: { Header, MainBanner, StartBlock, Footer },
  name: "Home",
};
</script>
