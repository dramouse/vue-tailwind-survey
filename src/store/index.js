import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surveyHistory: [
      // пример
      {
        question: "Заданный вопрос",
        answer: "Ответ, который выбрал пользователь",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
