<template>
  <div
    class="border border-solid border-light max-w-5xl pb-5 mx-auto pt-4 px-4 md:px-16 md:pt-6 md:pb-10"
  >
    <p class="text-gray-400 mb-3 md:mb-7">Вопрос 1 из 6</p>
    <hr class="mb-3 md:mb-9" />
    <h2 class="text-lg text-darkBlue mb-5 md:text-3xl md:mb-11">
      Какие у вас правоустанавливающие документы?
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mb-10 md:mb-14 md:gap-6">
      <!-- <label v-for="n in 6" class="cursor-pointer">
        <div
          :class="`checkbox flex items-center relative pl-10 pr-5 border border-solid rounded-xl h-answer md:pl-16 md:h-answerMd ${
            current === 'aboba' ? 'active border-chosenBlue' : 'border-light'
          }`"
        >
          <input
            v-model="current"
            type="radio"
            value="aboba"
            name="ans"
            class="hidden"
          />
          Вариант
        </div>
      </label> -->
    </div>
    <button class="bg-mainRed rounded-xl py-4 px-10 text-white ml-auto block">
      Далее
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionWindow",
  data() {
    return {
      current: null,
    };
  },
  methods: {
    log() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  &::before {
    position: absolute;
    content: "";
    top: 18px;
    left: 13px;
    width: 17.5px;
    height: 17.5px;
    border-radius: 50%;
    border: 1px solid #121761;
  }

  &::after {
    display: none;
  }

  &.active::after {
    display: block;
    position: absolute;
    content: "";
    top: 22.5px;
    left: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #121761;
  }

  @media (min-width: "768px") {
    &::before {
      top: 23px;
      left: 23px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid #121761;
    }

    &.active::after {
      display: block;
      position: absolute;
      content: "";
      top: 29px;
      left: 29px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #121761;
    }
  }
}
</style>
