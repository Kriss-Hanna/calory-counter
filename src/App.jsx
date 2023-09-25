import { useState } from "react";
//import Quotes from "./components/Quotes";

import InputGender from "./components/InputGender";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [genderStorage, setGenderStorage] = useLocalStorage("gender", "");
  const [isMale, setIsMale] = useState(false);

  const [plate, setPlate] = useState();
  const [caloryPlate, setCaloryPlate] = useState();

  const [inputArray, setInputArray] = useState([]);

  const totalCalory = isMale ? 2500 : 2000;

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

  console.log(genderStorage);

  return (
    <>
      <div className="container">
        <h1>Kalorie</h1>

        <div className="checkbox-container">
          <InputGender
            setIsMale={setIsMale}
            setGenderStorage={setGenderStorage}
          />
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
      {/*       <Quotes inputArray={inputArray} />
       */}{" "}
    </>
  );
}

export default App;
