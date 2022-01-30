<template>
  <div
    class="rounded-2xl flex flex-col max-w-sm border border-solid border-light shadow-main mx-auto overflow-hidden md:flex-row md:max-w-screen-lg"
  >
    <div
      class="bg-mainRed bg-banner bg-cover bg-center h-20 md:w-72 md:h-auto"
    ></div>
    <div class="pt-6 pl-6 pr-5 pb-10 md:pt-16 md:pb-16 md:max-w-xl md:pl-16">
      <p class="text-xs text-grey mb-4 md:mb-16 md:text-base">
        Время прохождения опроса <span class="text-mainRed">3 минуты</span>
      </p>
      <h3 class="text-lg mb-6 text-darkBlue md:text-4xl md:mb-8">
        Хочу безопасно и легко <br class="hidden md:inline" />
        продать или купить квартиру
      </h3>
      <router-link
        to="/questions/1"
        tag="button"
        class="rounded-xl bg-mainRed hover:bg-mainRedHover transition-all text-white w-full py-3 mb-9 md:py-6 text-2xl"
      >
        Начать
      </router-link>
      <p class="text-grey max-w-360px text-xs leading-6 mb-6 md:text-base">
        После завершения опроса вы получите PDF файл с содержащий:
      </p>
      <ol
        class="list-decimal max-w-360px text-grey text-xs leading-6 pl-4 md:text-base"
      >
        <li class="pl-1">
          Список документов, необходимых в вашем конкретном случае.
        </li>
        <li class="pl-1">Разъяснение сложных терминов «на пальцах».</li>
        <li class="pl-1">Оценку возможных рисков.</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartWindow",
};
</script>

<style></style>
