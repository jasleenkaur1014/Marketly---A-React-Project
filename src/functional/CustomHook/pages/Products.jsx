import styled from "styled-components";

import React from "react";
export default function Products(props) {
  const { data, loading, setCartItems, cartItems, page, setPage } = props;
  if (loading) {
    return <h3>Loading....</h3>;
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <Div>
          {data.map((item) => {
            const isAdded = cartItems.some((i) => i.id === item.id);
            return (
              <Card key={item.id}>
                <img src={item.images?.[0]} alt={item.title} />
                <h4>{item.title}</h4>
                <small>{item.description}</small>
                <p>
                  <small>Category: {item.category}</small>
                </p>

                <p>
                  <span>${item.price}</span>
                </p>
                <p>Rating: {item.rating}</p>
                {isAdded ? (
                  <button
                    onClick={() => {
                      setCartItems(cartItems.filter((i) => i.id !== item.id));
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCartItems([...cartItems, item]);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </Card>
            );
          })}
        </Div>

        <Pagination>
          <button onClick={() => page > 1 && setPage((p) => p - 1)}>⬅</button>

          <span>{page}</span>

          <button onClick={() => setPage((p) => p + 1)}>➡</button>
        </Pagination>
      </div>
    </>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5px;
  padding: 3px;
  width: 100%;
`;
const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  img {
    width: 60%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px;
  }
  button {
    border-radius: 5px;
    margin: 10px;
    background-color: blue;
    color: white;
    cursor: pointer;
    border: none;
    padding: 10px;
  }
  span {
    color: green;
    font-weight: 600;
  }
  p {
    margin: 5px;
  }
`;

const Pagination = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;
