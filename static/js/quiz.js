document.addEventListener('DOMContentLoaded', () => {
  const quizForms = document.querySelectorAll('.quiz-form');

  quizForms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Stop page from reloading

      const quizId = form.dataset.quizId;
      const correctAnswerIndex = form.dataset.correctAnswer;
      const feedbackEl = document.getElementById(`feedback-${quizId}`);

      const selectedOption = form.querySelector(`input[name="${quizId}-answer"]:checked`);

      if (!selectedOption) {
        feedbackEl.innerHTML = '<p class="has-text-warning has-text-weight-bold">Please select an answer.</p>';
        return;
      }

      const userAnswerIndex = selectedOption.value;

      if (userAnswerIndex === correctAnswerIndex) {
        feedbackEl.innerHTML = '<p class="has-text-success has-text-weight-bold">Bingo! You nailed it!</p>';
      } else {
        feedbackEl.innerHTML = '<p class="has-text-danger has-text-weight-bold">Not really... try again!</p>';
      }
    });
  });
});
