import ModalWrapper from "./ModalWrapper";
import styled from "styled-components";
export default function Cart(props) {
  return (
    <ModalWrapper onClose={() => props.setOpenedModal("")}>
      <h2>Your Cart</h2>
      {props.cartItems.map((item) => (
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
          <button
            onClick={() => {
              props.setCartItems(
                props.cartItems.filter((i) => i.id !== item.id),
              );
            }}
          >
            Remove from Cart
          </button>
        </Card>
      ))}
    </ModalWrapper>
  );
}

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
