import Vue from "vue";
import Vuex from "vuex";
import questionData from "../data/questions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentQuestionIndex: 0,
    chosenScript: null,
    surveyHistory: [
      // пример
      {
        question: "Заданный вопрос",
        answer: "Ответ, который выбрал пользователь",
      },
    ],
  },
  mutations: {
    SET_SCRIPT(state, script) {
      state.chosenScript = script;
    },
  },
  actions: {
    setScriptByScenario({ commit }, scenario) {
      const script = questionData.scripts[scenario];
      commit("SET_SCRIPT", script);
    },
  },
  modules: {},
});
