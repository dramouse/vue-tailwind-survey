<template>
  <SurveyPage>
    <QuestionWindow :question="currentQuestion" />
  </SurveyPage>
</template>

<script>
import QuestionWindow from "../components/Survey/QuestionWindow.vue";
import questionsData from "../data/questions.js";
import SurveyPage from "../components/layout/SurveyPage.vue";

export default {
  name: "Survey",
  components: { QuestionWindow, SurveyPage },
  data() {
    return {
      currentQuestion: {},
    };
  },
  computed: {
    currentQuestionId() {
      return this.$store.getters.currentQuestionId;
    },
  },
  beforeMount() {
    this.currentQuestion = questionsData.questions.find(
      (item) => item.id === this.currentQuestionId
    );
  },
  watch: {
    currentQuestionId() {
      if (!this.currentQuestionId) {
        this.$router.push("result");
        this.$store.commit("SET_SCRIPT", [1]);
        this.$store.commit("SET_CURRENT_QUESTION", 0);
        return;
      }
      this.currentQuestion = questionsData.questions.find(
        (item) => item.id === this.currentQuestionId
      );
    },
  },
};
</script>
