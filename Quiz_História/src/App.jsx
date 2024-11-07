import {useState} from "react";
import './App.css'
import Heart from "./components/Heart";

const App = () => {
  // Estado para controlar a visibilidade da div
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar a visibilidade
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>

      {/* O conteúdo que ficará por baixo da div */}
      <div className="h1">
        <h1>Quiz</h1>
      </div>

      <div className="hearts-container">
        {Array(10).fill().map((_, index) => (
          <Heart key={index} />
        ))}
      </div>

      <div className="button-container">
        <button onClick={toggleVisibility} className="start-button">
          {/* {isVisible ? 'START' : 'START'} */}START
        </button>
      </div>

      {/* Div que aparece por cima do conteúdo */}
      {isVisible && (
        <div className="div-surgir">
          <a href="App.jsx"><img src="🦆 icon _Angle Double Left_.svg"/></a>
          <h3>Essa div está por cima do conteúdo!</h3>
          <p>Ela desaparece ou aparece quando você clica no botão.</p>
        </div>
      )}
    </>
  );
};

export default App;
