import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";

const ListQuotes = () => {
  // this is my original state with an array of quotes
  const [quotes, setQuotes] = useState([]);

  // //this is the state needed for the UpdateRequest
  // const [editingStudent, setEditingStudent] = useState(null)

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

  // const onSaveStudent = (newStudent) => {
  //     //console.log(newStudent, "From the parent - List of Students");
  //     setStudents((students) => [...students, newStudent]);
  // }

  // //A function to control the update in the parent (student component)
  // const updateStudent = (savedStudent) => {
  //     // console.log("Line 29 savedStudent", savedStudent);
  //     // This function should update the whole list of students -
  //     loadStudents();
  // }

  // //A function to handle the Delete funtionality
  // const onDelete = (student) => {
  //     //console.log(student, "delete method")
  //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
  //         method: "DELETE"
  //     }).then((response) => {
  //         //console.log(response);
  //         if (response.ok) {
  //             loadStudents();
  //         }
  //     })
  // }

  // //A function to handle the Update functionality
  // const onUpdate = (toUpdateStudent) => {
  //     //console.log(toUpdateStudent);
  //     setEditingStudent(toUpdateStudent);

  // }

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
