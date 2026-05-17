import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

export default function Categories() {
  const [cat, setCat] = useState([]);

  const fetchCategories = async () => {
    const url = `https://fakestoreapi.com/products/categories`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        toast.error("Something went wrong!");
      }

      const categories = await response.json();

      setCat(categories);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <h3>Available Categories</h3>
        <Div>
          {cat.map((item, index) => (
            <Card key={index}>
              <img
                src={`https://placehold.co/100?text=${item.toUpperCase()}&font=roboto`}
              />
              <P>{item.toUpperCase()}</P>
            </Card>
          ))}
        </Div>
      </div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 1rem;
`;
const Card = styled.div`
  background-color: #eefffc;
  width: 200px;
  padding: 20px 0;
  transition: 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const P = styled.p`
  font-family: sans-serif;
  font-style: italic;
`;
