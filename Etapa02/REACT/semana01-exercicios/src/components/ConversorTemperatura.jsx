/* 2. Crie um componente ConversorTemperatura, que converte o valor do input de celsius e mostra na tela a conversão para Fahrenheit. F = C x 1.8 + 32 ao clicar no botão de converter. */
import { useState } from "react";
import "./ConversorTemperatura.css";

const ConversorTemperatura = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function handleConvert() {
    setFahrenheit(celsius * 1.8 + 32);
  }

  return (
    <section className="conversor">
      <h3>Conversor de Temperatura</h3>
      <input
        type="number"
        placeholder="Temperatura em celsius"
        onChange={(event) => setCelsius(event.target.value)}
      />
      <button onClick={handleConvert}>Converter</button>
      <p>Temperatura convertida em fahrenheit: {fahrenheit.toFixed()}ºF</p>
    </section>
  );
};

export default ConversorTemperatura;
