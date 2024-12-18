document.addEventListener("DOMContentLoaded", () => {
  const correctAnswers = {
    // Histoire
    his_q1: "his_q1-a2",
    his_q2: "his_q2-a2",
    his_q3: "his_q3-a1",

    // Géographie
    geo_q1: "geo_q1-a2",
    geo_q2: "geo_q2-a2",
    geo_q3: "geo_q3-a1",
 
    // Science
    sc_q1: "sc_q1-a2",
    sc_q2: "sc_q2-a3",
    sc_q3: "sc_q3-a2",

    // Littérature
    litt_q1: "litt_q1-a1",
    litt_q2: "litt_q2-a2",
    litt_q3: "litt_q3-a1",

    // Sport
    sp_q1: "sport_q1-a1",
    sp_q2: "sport_q2-a2",
    sp_q3: "sport_q3-a2",
  };

  const quizForm = document.querySelector("form");
  const submitButton = document.querySelector("#submit-quiz");
  const resultDisplay = document.querySelector("#quiz-result");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length * 100;

    for (const questionId in correctAnswers) {
      const selectedAnswer = document.querySelector(
        `input[name="${questionId}"]:checked`
      );

      if (selectedAnswer && selectedAnswer.id === correctAnswers[questionId]) {
        score=score+100;
      }
    }

    resultDisplay.textContent = `Votre score : ${score} / ${totalQuestions}.`;
  });
});
