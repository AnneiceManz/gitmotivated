import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ListQuotes = () => {
  // this is my original state with an array of quotes
  const [quotes, setQuotes] = useState([]);

  const loadQuotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/quotes");
      const quotes = await response.json();
      setQuotes(quotes);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuotes = async (keyword) => {
    try {
      const response= await fetch(`http://localhost:8080/api/keyword/${keyword}`)
      const json = await response.json()
      console.log("dropdown",json)
      setQuotes(json)
      console.log("test this response",quotes)
      // console.log("dropdown",quotes)
    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (event) => {
    const keyword = event.target.value
    fetchQuotes(keyword)
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div>
      {quotes.length ? (
<>
      <h3>Search by Category</h3>
           <select onChange={handleChange}>
            <option>Select</option>
            <option value="success">Success</option>
            <option value="confidence">Confidence</option>
            <option value="future">Future</option>
            <option value="inspiration">Inspiration</option>
            <option value="anxiety">Anxiety</option>
            <option value="kindness">Kindness</option>
            <option value="work">Work</option>
            <option value="today">Today</option>
            <option value="excellence">Excellence</option>
            <option value="dreams">Dreams</option>
           </select>
      <div className="list-students">
        <Card.Group centered>
          { quotes.map((quote, index) => {
            return (
              <Card centered fluid raised key={`${quote.q}-${index}`}>
                <Image  src={quote.i} wrapped ui={false} />
              <Card.Content key={quote.q}>
                <Card.Description className="quote"><Icon name="quote left"/>{`${quote.q}`}<Icon name="quote right"/></Card.Description>
                <Card.Meta className="author">{quote.a}</Card.Meta>
              </Card.Content>
        </Card>
            );
          })}
          </Card.Group>
      </div>
          </>
      ) : (<h1>Loading...</h1>)}
    </div>
  );
};

export default ListQuotes;
