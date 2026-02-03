import { useState } from "react";

function App() {
  //State: estado do componente
  const [message, setMessage] = useState("Olá mundo!");

  return (
    <div className="App">
      <button
        onClick={() => {
          setMessage(`Botão clicado`);
        }}
      >
        {message}
      </button>
    </div>
  );
}

export default App;
