import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Navbar(props) {
  const [isVisible, setVisible] = useState(false);

  return (
    <Div>
      <h2>Marketly Shop</h2>

      <input
        type="text"
        placeholder="Search here..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <MenuWrapper>
        {/* Hamburger always visible */}
        <Hamburger onClick={() => setVisible(!isVisible)}>☵</Hamburger>

        {/* Dropdown menu */}
        <Buttons $isVisible={isVisible}>
          <button onClick={() => setVisible(false)}>✕</button>

          <P
            onClick={() => {
              props.setOpenedModal("cart");
              setVisible(false);
            }}
          >
            Cart
          </P>

          <P
            onClick={() => {
              props.setOpenedModal("liked");
              setVisible(false);
            }}
          >
            Liked
          </P>

          <P
            onClick={() => {
              props.setOpenedModal("saved");
              setVisible(false);
            }}
          >
            Saved
          </P>
        </Buttons>
      </MenuWrapper>
    </Div>
  );
}
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  color: white;
  background-color: #6e6e6e;

  input {
    border: 1px solid white;
    height: 25px;
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
`;

const Buttons = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background: #444;
  padding: 10px;
  border-radius: 8px;

  /* SMOOTH ANIMATION */
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(-10px)"};

  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};

  transition: all 0.25s ease;
`;

const P = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
`;
