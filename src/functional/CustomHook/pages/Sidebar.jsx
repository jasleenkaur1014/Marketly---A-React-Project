import { useState } from "react";
import styled from "styled-components";

export default function Sidebar(props) {
  const { select, setSelect } = props;
  return (
    <>
      <Div>
        <h2>SIDEBAR</h2>
        <MenuItem
          $active={select === "products"}
          onClick={() => setSelect("products")}
        >
          Catalog 🛍️
        </MenuItem>

        <MenuItem
          $active={select === "posts"}
          onClick={() => setSelect("posts")}
        >
          Feed 📰
        </MenuItem>
        <MenuItem
          $active={select === "recipes"}
          onClick={() => setSelect("recipes")}
        >
          Recipes 🍔
        </MenuItem>
        <MenuItem
          $active={select === "users"}
          onClick={() => setSelect("users")}
        >
          Customers 👥
        </MenuItem>

        <p>━━━━</p>
        <small style={{ fontSize: "10px" }}>&copy; Jasleen</small>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;

  width: 220px; /* FIXED SIDEBAR WIDTH */
  min-width: 220px;

  gap: 1rem;
  background-color: #ededed;
  padding: 1rem;
  height: 100vh;
`;

const MenuItem = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? "#d6d6d6" : "transparent")};

  font-weight: ${({ $active }) => ($active ? "700" : "500")};

  cursor: pointer;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    transform: scale(1.05);
  }
`;
