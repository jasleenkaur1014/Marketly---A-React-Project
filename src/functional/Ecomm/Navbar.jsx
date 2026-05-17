import styled from "styled-components";
export default function Navbar(props) {
  return (
    <>
      <Div>
        <input
          type="text"
          placeholder="Enter your search..."
          onChange={(e) => props.setSearch(e.target.value)}
          value={props.search}
        />
        <h2>MyShop.com</h2>
      </Div>
    </>
  );
}
const Div = styled.div`
  width: 98.3%;
  background-color: #2e2e2e;
  text-align: center;
  padding: 10px;
  h2 {
    color: white;
  }
`;
