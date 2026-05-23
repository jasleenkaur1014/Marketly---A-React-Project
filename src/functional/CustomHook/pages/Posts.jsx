import styled from "styled-components";
import { useAppContext } from "../appContext";

export default function Posts() {
  const { data, loading, setLikedPosts, likedPosts, setPage, page } =
    useAppContext();
  if (loading) {
    return <h3>Loading....</h3>;
  }
  return (
    <>
      <div style={{ width: "100%" }}>
        <Div>
          {data?.map((item) => {
            const isAdded = likedPosts.some((i) => i.id === item.id);
            return (
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
                  👍{" "}
                  {isAdded ? item.reactions?.likes + 1 : item.reactions?.likes}
                  &nbsp;
                </span>

                {isAdded ? (
                  <button
                    onClick={() => {
                      setLikedPosts(likedPosts.filter((i) => i.id !== item.id));
                    }}
                  >
                    Remove Like
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setLikedPosts([...likedPosts, item]);
                    }}
                  >
                    Like
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

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

const Pagination = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;
