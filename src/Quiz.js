import { useState } from "react";

function Quiz({ data, goHome, }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const current = data[index];

  const handleAnswer = (option) => {
    if (option === current.answer) {
      setScore(score + 1);
    }

    const next = index + 1;

    if (next < data.length) {
      setIndex(next);
    } else {
      setShowResult(true);
    }
  };
const totalScore = score;

let message = "";

if (totalScore >= 8) {
  message = "🎉 Excellent! Nice Work";
} else if (totalScore >= 5) {
  message = "👍 Very Good";
} else if(totalScore >= 1){
  message = "🙂 Good";
}

 
  return (
    <div className="quiz">
      {showResult ? (
        <div className="result">
<div className="text-center mt-8">
  <h2 className="text-3xl font-bold">Quiz Completed 🎉</h2>
          <h2>{score} / {data.length}</h2>

 

  <p className="text-xl font-semibold mt-3">
    {message}
  </p>
</div>
          <button onClick={goHome}>Start Again</button>
        </div>
      ) : (
        <>
          <h2 className="question">Question {index + 1}</h2>
          <p>{current.question}</p>

          <div className="options">
            {current.options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
      

        </>
        
      )}
    </div>
  );
}

export default Quiz;