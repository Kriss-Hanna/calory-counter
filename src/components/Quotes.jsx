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
          console.log(data);
          localStorage.setItem("motivationPhrase", data[0].text);
          localStorage.setItem("lastFetchDate", today);
        })
        .catch((error) => console.error("Erreur de fetch:", error));
    }
  }, []);

  const motivationPhrase = localStorage.getItem("motivationPhrase");

  return <h2>{motivationPhrase}</h2>;
}

export default Quotes;
