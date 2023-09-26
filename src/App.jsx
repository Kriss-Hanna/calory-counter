import { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

import InputGender from "./components/InputGender";

function App() {
  const [gender, setGender] = useState(localStorage.getItem("gender"));

  const [plate, setPlate] = useState();
  const [caloryPlate, setCaloryPlate] = useState();

  const loadInputArray = () => {
    const today = new Date().toISOString().split("T")[0];
    const lastFetchDate = localStorage.getItem("lastFetchDate");
    if (lastFetchDate !== today) {
      localStorage.setItem("lastFetchDate", today);
      localStorage.removeItem("caloryArray");
      return [];
    } else {
      const storedArray = localStorage.getItem("caloryArray");
      return storedArray ? JSON.parse(storedArray) : [];
    }
  };

  const [inputArray, setInputArray] = useState(loadInputArray);

  useEffect(() => {
    localStorage.setItem("caloryArray", JSON.stringify(inputArray));
  }, [inputArray]);

  const totalCalory = gender === "female" ? 2000 : 2500;

  const addPlate = () => {
    if (!plate || !caloryPlate)
      return alert("Veuillez remplir tous les champs");
    setInputArray([
      ...inputArray,
      {
        plate,
        caloryPlate,
      },
    ]);

    setPlate("");
    setCaloryPlate(0);
  };

  const restCalory = () => {
    return (
      totalCalory - inputArray.reduce((acc, item) => acc + item.caloryPlate, 0)
    );
  };

  return (
    <>
      <div className="container">
        <h1>Kalorie</h1>

        <div className="checkbox-container">
          <InputGender gender={gender} setGender={setGender} />
        </div>

        <h2 style={{ margin: "1em 0" }}>
          Vous bénéficiez encore de : {restCalory()} kcal aujourd&apos;hui
        </h2>

        <div className="input-container">
          <input
            onChange={(e) => setPlate(e.target.value)}
            type="text"
            placeholder="Nom du plat"
            value={plate}
          />

          <input
            onChange={(e) => setCaloryPlate(parseInt(e.target.value))}
            value={caloryPlate}
            type="number"
            name="calories"
            placeholder="Nombre de calories"
            min={0}
          />
        </div>

        <button onClick={addPlate}>Ajouter mon plat</button>

        {inputArray.map((item) => {
          return (
            <div className="plate-container" key={item.plate}>
              <h3>{item.plate}</h3>
              <h3>{item.caloryPlate} kcal</h3>
            </div>
          );
        })}
      </div>
      <Quotes />
    </>
  );
}

export default App;
