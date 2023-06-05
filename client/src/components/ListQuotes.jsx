import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

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
      <div className="list-students">
          {quotes.map((quote) => {
            return (
              <Card centered fluid raised>
                <Image  src={quote.i} wrapped ui={false} />
              <Card.Content key={quote.q}>
                <Card.Description className="quote"><Icon name="quote left"/>{`${quote.q}`}<Icon name="quote right"/></Card.Description>
                <Card.Meta className="author">{quote.a}</Card.Meta>
              </Card.Content>
        </Card>
            );
          })}
      </div>
  );
};

export default ListQuotes;
