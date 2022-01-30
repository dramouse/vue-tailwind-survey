<template>
  <div class="flex items-center">
    <div class="flex items-center mr-5">
      <div class="w-4 h-4 md:w-6 md:h-6 relative">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover"
          src="../../assets/icons/phone.svg"
          alt="logo"
        />
      </div>
      <a class="text-sm md:text-xl" href="tel:+ 74958354711"
        >+ 7 495 835 47 11</a
      >
    </div>
    <button
      class="hidden md:block px-6 py-3 rounded-xl border border-black text-blue-900 hover:bg-blue-900 hover:text-white transition-all"
    >
      Перезвоните мне
    </button>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "Contacts",
  components: {
    Icon,
  },
};
</script>
