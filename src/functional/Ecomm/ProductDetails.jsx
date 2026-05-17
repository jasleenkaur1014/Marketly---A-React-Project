import styled from "styled-components";

export default function ProductDetails(props) {
  const { image, title, description, price, category, rating } =
    props.openProduct;
  return (
    <>
      {props.isOpen && (
        <ModalOverlay>
          <ModalContent>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <small>${price}</small>
            <p>{description}</p>
            <p>Rating : {rating.rate}</p>
            <p>Rated by: {rating.count} users</p>
            <button onClick={() => props.setIsOpen(false)}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.38);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 500px;
  max-width: 80%;

  background-color: rgba(255, 255, 255, 0.87);
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: 0 auto;
  }

  h3 {
    color: #8b4a2d;
    font-size: 1rem;
  }

  small {
    color: green;
    font-size: 18px;
  }

  p {
    font-size: 0.7rem;
  }
`;
