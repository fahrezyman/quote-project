import { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard.jsx";

const App = () => {
  const [quote, setQuote] = useState({});
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data);
      setInitialFetchComplete(true); // Set the flag to true after the first fetch
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col bg-slate-100">
      <h1 className="text-4xl font-bold text-center mb-8 font-serif">Quotes</h1>
      {initialFetchComplete && (
        
        <>
          <QuoteCard text={quote.content} author={quote.author} />
          <button
            className="bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
            onClick={fetchQuote}
          >
            New Quote
          </button>
          <p className="text-center ">Created by <a href="https://github.com/fahrezyman">Ilham Fahrezy</a></p>
        </>
      )}
    </div>
  );
};

export default App;
