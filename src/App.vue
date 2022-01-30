<template>
  <div id="app" class="font-lato">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>
