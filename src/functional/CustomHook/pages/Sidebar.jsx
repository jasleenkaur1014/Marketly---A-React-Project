import { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../appContext";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const { select, setSelect } = useAppContext();
  return (
    <>
      <Div>
        <h2>SIDEBAR</h2>
        <StyledLink to="/products" onClick={() => setSelect("products")}>
          Catalog 🛍️
        </StyledLink>

        <StyledLink to="/posts" onClick={() => setSelect("posts")}>
          Feed 📰
        </StyledLink>
        <StyledLink to="/recipes" onClick={() => setSelect("recipes")}>
          Recipes 🍔
        </StyledLink>
        <StyledLink to="/users" onClick={() => setSelect("users")}>
          Customers 👥
        </StyledLink>

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

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  padding: 8px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: #dcdcdc;
  }

  &.active {
    color: red;
    background: #d6d6d6;
    font-weight: 700;
  }
`;
