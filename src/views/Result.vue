<template>
  <SurveyPage>
    <div
      class="border border-solid border-light max-w-5xl pb-5 mx-auto pt-4 px-4 md:px-16 md:pt-6 md:pb-10"
    >
      <h2
        class="text-lg text-center mx-auto text-darkBlue mb-5 md:text-3xl md:mb-11"
      >
        Ваши ответы сохранены!
      </h2>
      <div>
        <div
          v-for="note in surveyHistory"
          :key="note.question"
          class="grid grid-cols-1 gap-3 mb-4 text-base md:grid-cols-2"
        >
          <span>
            <span class="font-bold">Вопрос:</span>
            <br />
            <span class="text-lg">{{ note.question }}</span>
          </span>
          <span>
            <span class="font-bold">Ответ:</span>
            <br />
            <span class="text-lg">{{ note.answer }}</span>
          </span>
        </div>
      </div>
      <router-link to="/">
        <button
          class="bg-mainRed rounded-xl py-4 px-10 text-white mt-10 mx-auto block"
        >
          На главную
        </button>
      </router-link>
    </div>
  </SurveyPage>
</template>

<script>
import SurveyPage from "../components/layout/SurveyPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "Result",
  components: { SurveyPage },
  computed: mapGetters(["surveyHistory"]),
};
</script>

<style></style>
