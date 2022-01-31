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
    <QuestionWindow :question="currentQuestion" />
  </div>
</template>

<script>
import QuestionWindow from "../components/Survey/QuestionWindow.vue";
import questionsData from "../data/questions.js";

export default {
  name: "Survey",
  components: { QuestionWindow },
  data() {
    return {
      currentQuestion: null,
    };
  },
  methods: {
    updateQuestion(to) {
      let questionId;
      if (to) {
        questionId = to.params.id;
      } else {
        questionId = this.$route.params.id;
      }
      this.currentQuestion = questionsData.questions.find(
        (item) => item.id === +questionId
      );
      console.log(questionId, this.currentQuestion);
    },
  },
  beforeMount() {
    this.updateQuestion();
  },
  beforeRouteUpdate(to, from, next) {
    this.updateQuestion(to);
    next();
  },
};
</script>
