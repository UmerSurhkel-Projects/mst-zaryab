# Quiz App

This is a simple quiz app built with React for creating and taking quizzes. Users can answer multiple-choice questions, see their score, and receive a grade at the end.

![Screenshot](![Alt text](image.png))

## Features

- Multiple-choice questions with options.
- Timer to track the time taken to complete the quiz.
- Navigation between questions (Next, Previous, Skip).
- Scoring and grading based on correct answers.
- Submission of the quiz with results.

## Getting Started

To get started with this quiz app, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/quiz-app.git


Install the required dependencies:
cd quiz-app
npm install

Start the development server:
npm start
Open your web browser and navigate to http://localhost:3000 to view the app.

# Usage
Start by clicking the "Start Quiz" button on the homepage.
Answer each question by selecting an option.
Use the "Next" and "Previous" buttons to navigate between questions.
You can also skip a question using the "Skip" button.
The timer will keep track of the time taken to complete the quiz.
After answering all questions, click the "Submit" button to see your results.
You will receive a score and grade based on your answers.

You can customize the quiz by editing the quizQuestions array in the QuestionList.js file. 
Each question object should have the following structure
{
  question: 'What is the capital of France?',
  options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  correctOption: 'Paris',
}

Dependencies
React: https://reactjs.org/
React Router: https://reactrouter.com/
Other dependencies are listed in the package.json file.

License
This project is licensed under the MIT License. See the LICENSE file for details.
