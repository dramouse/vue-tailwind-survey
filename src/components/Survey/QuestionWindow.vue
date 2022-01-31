<template>
  <div
    class="border border-solid border-light max-w-5xl pb-5 mx-auto pt-4 px-4 md:px-16 md:pt-6 md:pb-10"
  >
    <p class="text-gray-400 mb-3 md:mb-7">Вопрос {{ question.id }} из 6</p>
    <hr class="mb-3 md:mb-9" />
    <h2 class="text-lg text-darkBlue mb-5 md:text-3xl md:mb-11">
      {{ question.title }}
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mb-10 md:mb-14 md:gap-6">
      <label
        v-for="answer in question.answers"
        :key="answer"
        class="cursor-pointer"
      >
        <div
          :class="`checkbox flex items-center relative pl-10 pr-5 border border-solid rounded-xl h-answer md:pl-16 md:h-answerMd ${
            chosen === answer ? 'active border-chosenBlue' : 'border-light'
          }`"
        >
          <input
            v-model="chosen"
            type="radio"
            :value="answer"
            name="ans"
            class="hidden"
          />
          {{ answer }}
        </div>
      </label>
    </div>
    <button
      @click="confirmHandler"
      class="bg-mainRed rounded-xl py-4 px-10 text-white ml-auto block"
    >
      Далее
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionWindow",
  props: {
    question: Object,
  },
  data() {
    return {
      chosen: null,
    };
  },
  methods: {
    confirmHandler(id) {
      if (+this.$route.params.id === 1) {
        const answerIndex = this.question.answers.indexOf(this.chosen);
        const scenarioNumber = answerIndex + 1;
        const scenario = this.question.scenarios[scenarioNumber];
        this.$store.dispatch("setScriptByScenario", scenario);
      }
      this.$router.push(`${id}`);
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
