import { useState, useEffect } from "react";

function Quotes({ inputArray }) {
  const [quotes, setQuotes] = useState([]);
  const URL = "https://type.fit/api/quotes";

  // fetch quotes

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, [inputArray]);

  return (
    <h2>
      {quotes.length > 0 &&
        quotes[Math.floor(Math.random() * quotes.length)].text}
    </h2>
  );
}

export default Quotes;
