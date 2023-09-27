import { useEffect } from "react";

function Quotes() {
  const URL = "https://type.fit/api/quotes";

  // fetch a quoted per day
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const lastFetchDate = localStorage.getItem("lastFetchDate");
    if (lastFetchDate !== today) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          let indexAleatoire = Math.floor(Math.random() * data.length);
          localStorage.setItem("motivationPhrase", data[indexAleatoire].text);
          localStorage.setItem("lastFetchDate", today);
        })
        .catch((error) => console.error("Erreur de fetch:", error));
    }
  }, []);

  const motivationPhrase = localStorage.getItem("motivationPhrase");

  return <h3 className="quote-text">{motivationPhrase}</h3>;
}

export default Quotes;
