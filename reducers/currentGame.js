import {
  START_GAME,
  ANSWER_QUESTION,
  RESTART_QUIZ
} from "../actions/currentGame";

export default function currentGame(state = {}, action) {
  switch (action.type) {
    case START_GAME:
      return {
        name: action.deckName,
        correctAnswers: action.correct,
        currentQuestion: 1
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        correctAnswers: action.correct
          ? state.correctAnswers + 1
          : state.correctAnswers,
        currentQuestion: state.currentQuestion + 1
      };
    case RESTART_QUIZ:
      return {
        ...state,
        correctAnswers: 0,
        currentQuestion: 1
      };
    default:
      return state;
  }
}
