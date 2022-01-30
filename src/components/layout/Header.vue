<template>
  <div>
    <Container class="py-5 flex items-center justify-between md:py-3">
      <div class="w-10 h-12 md:w-20 md:h-24 relative">
        <img
          class="absolute top-0 left-0 w-full h-full object-contain"
          src="../../assets/icons/logo.svg"
          alt="logo"
        />
      </div>
      <Contacts />
    </Container>
  </div>
</template>

<script>
import Contacts from "../Home/Contacts.vue";
import Icon from "../Home/Icon.vue";
import Container from "./Container.vue";
export default {
  name: "Header",
  components: { Container, Icon, Contacts },
};
</script>
