import image1 from "./image1.webp"; // path apne project ke hisab se change karo
import image2 from "./image2.webp"; // path apne project ke hisab se change karo
import image3 from "./image3.webp"; // path apne project ke hisab se change karo
import image4 from "./image4.webp"; // path apne project ke hisab se change karo
import image5 from "./image5.webp"; // path apne project ke hisab se change karo

function Home({ startQuiz }) {
  return (
    <div className="home">
      <h1 className="interview">Interview Based Quiz</h1>

      <h2 className="language">Select Your Language</h2>

      <div className="grid">
        <div>
          <img src={image1} alt="HTML" />
          <button onClick={() => startQuiz("html")}>HTML</button>
        </div>
        <div>
          <img src={image2} alt="HTML" />
          <button onClick={() => startQuiz("css")}>CSS</button>
        </div>
        <div>
          <img src={image3} alt="HTML" />
          <button onClick={() => startQuiz("javascript")}>JavaScript</button>
        </div>
        <div>
          <img src={image4} alt="HTML" />
          <button onClick={() => startQuiz("react")}>React</button>
        </div>
        <div>
          <img src={image5} alt="HTML" />
          <button onClick={() => startQuiz("tailwind")}>Tailwind</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
