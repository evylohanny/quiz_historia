import React, { useState } from "react";
import "./App.css";

const MultiSelectComponent = () => {
  const [selecionarOpcoesAreas, setSelecionarOpcoesAreas] = useState([]);
  const opcoesAreas = ["Idosos", "PCDs", "Adultos", "Crianças", "Adolescentes", "Pré-Adolescentes"];
  const [selecionarOpcoesEspecializacoes, setSelecionarOpcoesEspecializacoes] = useState([]);
  const opcoesEspecializacoes = ["Adolescência", "Depressão", "Angústia", "Ansiedade", "Bullying", "LGBTQIA+", "Relacionamentos", "Autoaceitação"];
  // const [textValue, setTextValue] = useState(""); // Estado para armazenar o valor do textarea

  // const capturarMensagem = (event) => {
  //   setTextValue(event.target.value);
  // }

  const [temporaryText, setTemporaryText] = useState(""); // Texto enquanto o usuário digita
  const [savedText, setSavedText] = useState(""); // Texto salvo

  const handleTextChange = (event) => {
    setTemporaryText(event.target.value); // Atualiza o texto temporário
  };

  const handleSave = () => {
    setSavedText(temporaryText); // Salva o texto ao clicar no botão
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelecionarOpcoesAreas((prev) => [...prev, value]); // Adiciona a opção selecionada
    } else {
      setSelecionarOpcoesAreas((prev) => prev.filter((opcoesAreas) => opcoesAreas !== value)); // Remove a opção desmarcada
    }

    if (checked) {
      setSelecionarOpcoesEspecializacoes((prev) => [...prev, value]); // Adiciona a opção selecionada
    } else {
      setSelecionarOpcoesEspecializacoes((prev) => prev.filter((opcoesEspecializacoes) => opcoesEspecializacoes !== value)); // Remove a opção desmarcada
    }
  };


return (
  <div className="container-geral">

   {/* <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Digite algo no textarea:</h2>
      <textarea
        value={textValue}
        onChange={capturarMensagem}
        rows="5"
        cols="40"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          resize: "none",
        }}
      />
      <div style={{ marginTop: "20px", fontSize: "16px", color: "#555" }}>
        <strong>Texto digitado:</strong>
        <p>{textValue || "Nenhum texto digitado."}</p>
      </div>
    </div> */}

<div className="container-geral">

      <div className="descricao">
        <h2>Digite uma breve descrição sobre você:</h2>
        <textarea
        className="o-text"
          value={temporaryText}
          onChange={handleTextChange}
          rows="5"
        />
        <div className="div-mensagemsalva">
          <div className="a-mensagem">
            <strong>Texto salvo:</strong>
            <p>{savedText || "Nenhum texto salvo ainda."}</p>
          </div>
          <div className="div-botão-salvar">
            <button onClick={handleSave} className="salvar">Salvar</button>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <h2>Selecione suas opções:</h2>
      <div className="options-container">
        {opcoesAreas.map((opcoesAreas, index) => (
          <div key={index} className="option">
            <input
              type="checkbox"
              id={`opcoesAreas-${index}`}
              value={opcoesAreas}
              onChange={handleChange}
            />
            <label htmlFor={`opcoesAreas-${index}`} className="label">
              {opcoesAreas}
            </label>
          </div>
        ))}
      </div>
      {/* <div className="opções-aparecer">
        <h3>Opções selecionadas:</h3>
        {selecionarOpcoesAreas.length > 0 ? (
          <ul>
            {selecionarOpcoesAreas.map((opcoesAreas, index) => (
              <li key={index}>{opcoesAreas}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma opção selecionada.</p>
        )}
      </div> */}
    </div>

    <div className="container">
      <h2>Selecione suas opções:</h2>
      <div className="options-container">
        {opcoesEspecializacoes.map((opcoesEspecializacoes, index) => (
          <div key={index} className="option">
            <input
              type="checkbox"
              id={`opcoesEspecializacoes-${index}`}
              value={opcoesEspecializacoes}
              onChange={handleChange}
            />
            <label htmlFor={`opcoesEspecializacoes-${index}`} className="label">
              {opcoesEspecializacoes}
            </label>
          </div>
        ))}
      </div>
      {/* <div className="opções-aparecer">
        <h3>Opções selecionadas:</h3>
        {selecionarOpcoesEspecializacoes.length > 0 ? (
          <ul>
            {selecionarOpcoesEspecializacoes.map((opcoesEspecializacoes, index) => (
              <li key={index}>{opcoesEspecializacoes}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma opção selecionada.</p>
        )}
      </div> */}
    </div>

  </div>
  );
};

export default MultiSelectComponent;


