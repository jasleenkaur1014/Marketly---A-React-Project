import { useAppContext } from "../appContext";
import ModalWrapper from "./ModalWrapper";
import styled from "styled-components";

export default function Saved() {
  const { setOpenedModal, savedRecipes, setSavedRecipes } = useAppContext();
  return (
    <ModalWrapper onClose={() => setOpenedModal("")}>
      <h2>Your Saved</h2>
      {savedRecipes.map((item) => (
        <Card key={item.id}>
          <Image src={item.image} alt={item.title} />

          <Title>{item.title}</Title>

          <Difficulty $level={item.difficulty}>{item.difficulty}</Difficulty>

          <Section>
            <h4>Ingredients</h4>
            <ul>
              {item.ingredients?.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <h4>Instructions</h4>
            <ol>
              {item.instructions?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </Section>

          <Button
            onClick={() => {
              setSavedRecipes(savedRecipes.filter((i) => i.id !== item.id));
            }}
          >
            Unsave
          </Button>
        </Card>
      ))}
    </ModalWrapper>
  );
}

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Difficulty = styled.span`
  align-self: flex-start;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  background: ${({ $level }) =>
    $level === "Easy"
      ? "#d4f8d4"
      : $level === "Medium"
        ? "#fff3cd"
        : "#f8d7da"};

  color: #333;
`;

const Section = styled.div`
  h4 {
    margin-bottom: 5px;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 18px;
  }
`;

const Button = styled.button`
  margin-top: auto;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
