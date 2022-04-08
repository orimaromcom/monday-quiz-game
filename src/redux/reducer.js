import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  CHANGE_HINTS,
  CHANGE_LIFELINES,
  GAME_STARTED,
} from "./actionsTypes";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: 10,
  score: 0,
  hints: 2,
  lifelines: 1,
  startTime: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case CHANGE_HINTS:
      return {
        ...state,
        hints: action.payload,
      };

    case CHANGE_LIFELINES:
      return {
        ...state,
        lifelines: action.payload,
      };
    case GAME_STARTED:
      return {
        ...state,
        startTime: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
