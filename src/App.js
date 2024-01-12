import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import './App.css';

const QuizApp = () => {
  return (
    <div className='quiz-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default QuizApp;
