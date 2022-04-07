export const constructAPICallURL = (queryParams) => {
  let {
    amount_of_question,
    question_category,
    question_difficulty,
    question_type,
  } = queryParams;

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  return apiUrl;
};
