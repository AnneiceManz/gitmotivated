import React, { useState, useEffect } from "react";
import { Card, Image, Icon, Dropdown, Segment } from "semantic-ui-react";

const keywordOptions = [
  { key: "success", text: "Success", value: "success" },
  { key: "confidence", text: "Confidence", value: "confidence" },
  { key: "future", text: "Future", value: "future" },
  { key: "inspiration", text: "Inspiration", value: "inspiration" },
  { key: "anxiety", text: "Anxiety", value: "anxiety" },
  { key: "kindness", text: "Kindness", value: "kindness" },
  { key: "work", text: "Work", value: "work" },
  { key: "today", text: "Today", value: "today" },
  { key: "excellence", text: "Excellence", value: "excellence" },
  { key: "dreams", text: "Dreams", value: "dreams" },
]

const ListQuotes = () => {
  // this is my original state with an array of quotes
  const [quotes, setQuotes] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");

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

  const handleChange = (_, {value}) => {
    setSelectedKeyword(value);
    fetchQuotes(value);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div>
      {quotes.length ? (
        <>
          <Segment basic textAlign="right">
            <Dropdown
              text="Search by Category"
              selection
              onChange={handleChange}
              options={keywordOptions}
              value={selectedKeyword}
            />
            
          </Segment>
          <div className="list-students">
            <Card.Group centered itemsPerRow={3}>
              {quotes.map((quote, index) => {
                return (
                  <Card centered raised key={`${quote.q}-${index}`}>
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
