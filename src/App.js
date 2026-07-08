import { useState } from "react";
import Home from "./Home";
import Quiz from "./Quiz";
import { quizData } from "./data";
import "./App.css";

function App() {
  const [section, setSection] = useState(null);
 
  return (
    <div className="main">
      {!section ? (
        <Home startQuiz={setSection} />
      ) : (
        <Quiz
          data={quizData[section]}
          goHome={() => setSection(null)}
        />
      )}
      
    </div>
  );
}

export default App;
