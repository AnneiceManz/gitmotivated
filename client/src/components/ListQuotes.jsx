import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";

const ListQuotes = () => {
  // this is my original state with an array of quotes
  const [quotes, setQuotes] = useState([]);

  const loadQuotes = () => {
    // A function to fetch the list of quotes that will be load anytime that list change
    fetch("http://localhost:8080/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        setQuotes(quotes);
      });
  };

  useEffect(() => {
    loadQuotes();
  }, []);


  return (
    <div className="mybody">
      <div className="list-students">
        <h2>Quote of the Day </h2>
        <ul>
          {quotes.map((quote) => {
            <br></br>
            return <li key={quote.q}> {`"${quote.q}"  ~${quote.a}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListQuotes;
