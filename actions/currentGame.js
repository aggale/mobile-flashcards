export const START_GAME = "START_GAME";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RESTART_QUIZ = "RESTART_QUIZ";

import { _addDeck, _getDecks, _addCard } from "../api";

export function startGame(deckName) {
  return {
    type: START_GAME,
    deckName,
    correct: 0
  };
}

export function answerQuestion(correct) {
  return {
    type: ANSWER_QUESTION,
    correct
  };
}

export function restartQuiz() {
  return {
    type: RESTART_QUIZ
  };
}
