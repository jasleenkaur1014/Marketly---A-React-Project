import React from "react";
import styled from "styled-components";

export default class FormCards extends React.Component {
  render() {
    if (this.props.data.length === 0) {
      return (
        <small style={{ marginTop: "2rem" }}>*No users submitted yet</small>
      );
    }
    return (
      <>
        <Main>
          {this.props.data.map((item, index) => (
            <Div key={index}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.number}</p>
              <small>{item.gender}</small>
            </Div>
          ))}
        </Main>
      </>
    );
  }
}

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 2rem;
`;
const Div = styled.div`
  text-align: center;
  background-color: wheat;
  color: black;
  padding: 12px;
  border-radius: 8px;
  margin: 10px;
`;
