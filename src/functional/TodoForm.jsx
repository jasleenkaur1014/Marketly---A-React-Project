import { useState } from "react";
import styled from "styled-components";

let nextId = 0;
export default function TodoForm(props) {
  const [title, setTitle] = useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setTitle("");
        }}
      >
        <fieldset>
          <legend>Quote Form</legend>
          <label htmlFor="title" style={{ fontSize: "1.2rem" }}>
            Title:{" "}
          </label>
          <input
            style={{ padding: "0.4rem" }}
            type="text"
            id="title"
            value={title}
            placeholder="Enter your quote here..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <Button
            onClick={() => {
              props.setTodo([...props.todo, { id: nextId++, title: title }]);
            }}
            type="submit"
          >
            Add
          </Button>
        </fieldset>
      </Form>
    </>
  );
}
const Form = styled.form`
  width: 80%;
  border: 2px solid black;
  background-color: wheat;
  height: auto;
  margin: 20px auto;
`;
const Button = styled.button`
  width: 10%;
  border: none;
  background-color: magenta;
  padding: 0.6rem;
  font-size: 1rem;
  margin: 20px auto;
  font-weight: 600;
  transition: 0.3s ease-in;
  border-radius: 10px;

  &:hover {
    background-color: blue;
    cursor: pointer;
    color: white;
  }
`;
