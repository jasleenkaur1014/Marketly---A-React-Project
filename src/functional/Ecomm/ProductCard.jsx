import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import { useState } from "react";
import { toast } from "react-toastify";
export default function ProductCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openProduct, setopenProduct] = useState({});
  const fetchProductDetails = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Something went wrong!");
      }
      const data = await response.json();
      setopenProduct(data);
      setIsOpen(true);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#ffd9c9" }}>
        <h3>Available Products</h3>
        <Card>
          {props.products.map((item) => (
            <Div
              key={item.id}
              onClick={() => {
                fetchProductDetails(item.id);
              }}
            >
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <small>${item.price}</small>
            </Div>
          ))}
        </Card>
        <ProductDetails
          openProduct={openProduct}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}
const Card = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`;
const Div = styled.div`
  background-color: #daaf9d;
  height: 330px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: 0.1s ease-in;
  img {
    padding: 10px;
    width: 40%;
    height: 150px;
    margin: 0 auto;
  }
  h4 {
    color: #8b4a2d;
  }
  small {
    color: green;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
