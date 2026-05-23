import styled from "styled-components";
import { useAppContext } from "../appContext";

export default function Users() {
  const { data, loading, page, setPage } = useAppContext();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>Our Customers</h2>
      <div>
        <MainDiv>
          {data.map((item) => (
            <Div key={item.id}>
              <img src={item.image} alt={item.username} />
              <br />
              <Gender
                style={{
                  backgroundColor: item.gender == "male" ? "blue" : "pink",
                }}
              >
                {item.gender}
              </Gender>
              <p>
                {item.firstName} {item.lastName}
              </p>

              <small>Username: @{item.username}</small>

              <p>{item.email}</p>
              <p>{item.phone}</p>
            </Div>
          ))}
        </MainDiv>

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
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  img {
    width: 60%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px;
  }

  span {
    color: green;
    font-weight: 600;
  }
  p {
    margin: 5px;
    font-size: 0.9rem;
  }
  small:nthchild(2) {
    color: blue;
  }
`;
const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5px;
  padding: 3px;
  width: 100%;
`;
const Gender = styled.small`
  border-radius: 10px;
  font-size: 11px;
  color: white;
  font-weight: 600;
  padding: 5px;
  margin: 0 auto;
`;

const Pagination = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;
