import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_TYPE,
  CHANGE_SCORE,
  CHANGE_HINTS,
  CHANGE_LIFELINES,
  RESET_DEFAULT_VALUES,
} from "./actionsTypes";

export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handleHintsChange = (payload) => ({
  type: CHANGE_HINTS,
  payload,
});

export const handleLifelinesChange = (payload) => ({
  type: CHANGE_LIFELINES,
  payload,
});

export const handleResetToDefault = () => ({
  type: RESET_DEFAULT_VALUES,
})

