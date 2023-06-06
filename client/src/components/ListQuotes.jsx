import React, { useState, useEffect } from "react";
import { Card, Image, Icon, Dropdown } from "semantic-ui-react";

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
      const response = await fetch(
        `http://localhost:8080/api/keyword/${keyword}`
      );
      const json = await response.json();
      console.log("dropdown", json);
      setQuotes(json.slice(0, 6));
      console.log("test this response", quotes);
      // console.log("dropdown",quotes)
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const keyword = event.target.value;
    fetchQuotes(keyword);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div>
      {quotes.length ? (
        <>
          <div className="Search">
            <h3>Search by Category</h3>
            <Dropdown>
              <Dropdown.Menu onChange={handleChange}>
                <Dropdown.Item>Select</Dropdown.Item>
                <Dropdown.Item value="success">Success</Dropdown.Item>
                <Dropdown.Item value="confidence">Confidence</Dropdown.Item>
                <Dropdown.Item value="future">Future</Dropdown.Item>
                <Dropdown.Item value="inspiration">Inspiration</Dropdown.Item>
                <Dropdown.Item value="anxiety">Anxiety</Dropdown.Item>
                <Dropdown.Item value="kindness">Kindness</Dropdown.Item>
                <Dropdown.Item value="work">Work</Dropdown.Item>
                <Dropdown.Item value="today">Today</Dropdown.Item>
                <Dropdown.Item value="excellence">Excellence</Dropdown.Item>
                <Dropdown.Item value="dreams">Dreams</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="list-students">
            <Card.Group centered itemsPerRow={3}>
              {quotes.map((quote, index) => {
                return (
                  <Card centered fluid raised key={`${quote.q}-${index}`}>
                    <Image src={quote.i} wrapped ui={false} />
                    <Card.Content key={quote.q}>
                      <Card.Description className="quote">
                        <p>
                          <Icon size="small" name="quote left" />
                          {`${quote.q}`}
                          <Icon name="quote right" size="small" />
                        </p>
                      </Card.Description>
                      <br></br>
                      <Card.Meta className="author">
                        <span>{quote.a}</span>
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ListQuotes;
