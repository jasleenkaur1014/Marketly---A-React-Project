import ModalWrapper from "./ModalWrapper";
import styled from "styled-components";
import { useAppContext } from "../appContext";

export default function Liked() {
  const { likedPosts, setLikedPosts, setOpenedModal } = useAppContext();
  return (
    <ModalWrapper onClose={() => setOpenedModal("")}>
      <h2>Your Posts</h2>
      {likedPosts.map((item) => (
        <Card key={item.id}>
          <h4>{item.title}</h4>
          <small>{item.body}</small>
          <p>
            {item.tags.map((tag, index) => (
              <small key={index}>#{tag} </small>
            ))}
          </p>

          <br />

          <span>👁 {item.views}&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <span>
            👍 {item.reactions.likes + 1}
            &nbsp;
          </span>

          <button
            onClick={() => {
              setLikedPosts(likedPosts.filter((i) => i.id !== item.id));
            }}
          >
            Remove Like
          </button>
        </Card>
      ))}
    </ModalWrapper>
  );
}

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  background: white;

  display: flex;
  flex-direction: column;
  gap: 10px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h4 {
    margin: 0;
  }

  button {
    margin-top: auto;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: black;
    color: white;
    cursor: pointer;
  }
`;

