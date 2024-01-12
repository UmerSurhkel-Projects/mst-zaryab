import { useState } from 'react'; // useState is a React hook for adding state to a component.
import { quizQuestions } from '../QuestionList'; // Importing a list of questions for the quiz.
import TimerComponent from '../Timer'; // Importing a Timer component to be used in the quiz.
import Options from './Options'; // Importing the Options component to display quiz options.
import { useNavigate } from 'react-router-dom'; // useNavigate is used for navigation between routes.

const Quiz = () => {
    // Setting up state variables for the Quiz component.
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the index of the current question.
    const [selectedOptions, setSelectedOptions] = useState(new Array(quizQuestions.length).fill(null)); // Stores the options selected by the user.
    const [score, setScore] = useState(0); // Keeps track of the user's score.
    const [hasAnswered, setHasAnswered] = useState(false); // Indicates whether the user has answered the current question.
    const [hasLastAnswered, setHasLastAnswered] = useState(false);
    const [skippedCount, setSkippedCount] = useState(0); // New state variable for counting skipped questions.
    const [next, setNext] = useState(false);
    const navigate = useNavigate(); // Enables programmatic navigation.

    // Function to handle option selection for the current question.
    const handleOptionChange = (option) => {

        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = option; // Update the selected option for the current question.
        setSelectedOptions(updatedSelectedOptions);
        setNext(true);
        if ((currentQuestionIndex) === (quizQuestions.length - 1))
            setHasLastAnswered(true);
    };

    // Function to handle the 'Next' button click.
    const handleNextClick = () => {
        setNext(false);
        const isCorrect = selectedOptions[currentQuestionIndex] === quizQuestions[currentQuestionIndex].correctOption; // Checks if the selected option is correct.
        setScore(prevScore => {
            const updatedScore = isCorrect ? prevScore + 1 : prevScore - 1; // Updates the score.
            return Math.max(updatedScore, 0); // Ensures score does not go below 0.
            
        });

        if (currentQuestionIndex < quizQuestions.length - 1) { // Checks if there are more questions.
            setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Moves to the next question.
            setHasAnswered(false); // Resets hasAnswered for the new question.
        }
    };

    const handlePreviousClick = () => {
        setNext(true);
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
            setHasAnswered(false);
        }
    };

    // Function to handle the 'Skip' button click.
    const handleSkipClick = () => {
        setSkippedCount(prevCount => prevCount + 1);
        if (currentQuestionIndex < 9)
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);

        if ((currentQuestionIndex) === (quizQuestions.length - 1))
            setHasLastAnswered(true);
    };

    // Function to calculate the total score.
    const calculateScore = () => {
        return score; // Returns the current score.
    };

    // Function to calculate the grade based on the score.
    const calculateGrade = (score) => {
        const percentage = (score / quizQuestions.length) * 100; // Calculates the score percentage.
        // Assigns a grade based on the percentage.
        if (percentage >= 90) return 'A';
        else if (percentage >= 80) return 'B';
        else if (percentage >= 70) return 'C';
        else if (percentage >= 60) return 'D';
        else return 'F';
    };

    // Function to handle the 'Submit' button click.
    const submit = () => {
        // Calculate results.
        const totalQuestions = quizQuestions.length; // Total number of questions.
        const correctAnswers = score; // Number of correct answers.
        const skipped = skippedCount; // Use the skippedCount state variable to get the count of skipped questions.
        const wrongAnswers = totalQuestions - correctAnswers - skipped; // Number of wrong answers (excluding skipped).
        const totalScore = calculateScore(); // Calculates the total score.
        const grade = calculateGrade(totalScore); // Calculates the grade.

        // Navigates to the Result component with the results.
        navigate('/result', { state: { correct: correctAnswers, wrong: wrongAnswers, skipped, totalScore, grade } });
    };

    // Getting the current question from the quiz questions.
    const currentQuestion = quizQuestions[currentQuestionIndex];
    // Checks if the current question is the last one.
    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    // Checks if the current question is the First one.
    const isFirstQuestion = currentQuestionIndex === 0;

    // JSX for rendering the Quiz component.
    return (
        <section className='quiz-section'>
            <div className='container'>
                <div className='row'>
                    <TimerComponent shouldStart={true} />
                    <div className="quiz-container position-relative">
                        <div className="question-section">
                            <span className='d-flex justify-content-start text-light fw-bolder fs-2 position-absolute top-0 start-0 ms-3 mt-2'>Question {currentQuestionIndex + 1}</span>

                            <h2 className='pt-5'>{currentQuestion.question}</h2>
                        </div>
                        <div className="options-section">
                            {currentQuestion.options.map((option, index) => (
                                <Options
                                    key={index}
                                    option={option}
                                    isSelected={selectedOptions[currentQuestionIndex] === option}
                                    handleOptionChange={() => handleOptionChange(option)}
                                />

                            ))}
                        </div>
                    </div>
                    <div className='btn-group justify-content-end d-flex'>
                        {isFirstQuestion ? null : (
                            <button className="previous-button" onClick={handlePreviousClick}>Previous</button>
                        )}
                      {isLastQuestion ? null :  <button className={`next-button ${!next ? "disable" : ""}`} onClick={handleNextClick} disabled={!next}>Next</button>}
                        <button className={`next-button ${(isLastQuestion && hasLastAnswered) || selectedOptions[currentQuestionIndex] ? "disable " : ""}`} onClick={handleSkipClick} disabled={selectedOptions[currentQuestionIndex]}>Skip</button>
                        {(isLastQuestion && hasLastAnswered) && (
                            <button className="next-button" onClick={submit}>Submit</button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
