import styled from "styled-components";

export default function TodoCard(props) {
  return (
    <>
      <h2>Quotes</h2>
      <Div>
        {props.todo.map((item) => (
          <MainCard key={item.id}>
            <P>{item.title}</P>
            <Button
              onClick={() => {
                props.setTodo(props.todo.filter((t) => t.id != item.id));
              }}
            >
              Delete
            </Button>
          </MainCard>
        ))}
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 80%;
  height: 100vh;
  background-color: beige;
  margin: 0 auto;
`;

const P = styled.p`
  font-family: Montserrat;
  font-size: 1.3rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: magenta;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: red;
    color: black;
    cursor: pointer;
  }
`;
const MainCard = styled.div`
  display: flex;
  width: 80%;
  background-color: pink;
  color: white;
  justify-content: space-between;
  margin: 10px auto;
  border-radius: 10px;
  padding: 0.4rem;
`;
