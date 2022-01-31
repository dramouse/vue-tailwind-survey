import Vue from "vue";
import Vuex from "vuex";
import questionData from "../data/questions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentQuestionIndex: 0,
    chosenScript: [1],
    surveyHistory: [],
  },
  getters: {
    currentQuestionId(state) {
      return state.chosenScript[state.currentQuestionIndex];
    },
    currentQuestionIndex(state) {
      return state.currentQuestionIndex;
    },
    surveyHistory(state) {
      return state.surveyHistory;
    },
    questionsCount(state) {
      return state.chosenScript.length;
    },
  },
  mutations: {
    SET_SCRIPT(state, script) {
      state.chosenScript = script;
    },
    SET_CURRENT_QUESTION(state, number) {
      state.currentQuestionIndex = number;
    },
    ADD_HISTORY_NOTE(state, note) {
      state.surveyHistory.push(note);
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
