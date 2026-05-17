import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import useFetch from "./hooks/useFetch";
import MainContent from "./pages/MainContent";
import styled from "styled-components";
import Cart from "./modals/Cart";
import Liked from "./modals/Liked";
import Saved from "./modals/Saved";

export default function CustomProjectParent() {
  const [openedModal, setOpenedModal] = useState("");
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("products");
  const [page, setPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [like, setlike] = useState(false);
  const { data, loading } = useFetch(select, page, search);

  useEffect(() => {
    setPage(1);
  }, [search]);
  return (
    <>
      <Navbar
        setOpenedModal={setOpenedModal}
        setSearch={setSearch}
        search={search}
      />
      <Container>
        <Sidebar setSelect={setSelect} select={select} />
        <MainContentWrapper>
          <MainContent
            select={select}
            loading={loading}
            data={data}
            cartItems={cartItems}
            setCartItems={setCartItems}
            page={page}
            setPage={setPage}
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
            savedRecipes={savedRecipes}
            setSavedRecipes={setSavedRecipes}
          />
        </MainContentWrapper>
      </Container>
      {openedModal == "cart" && (
        <Cart
          setOpenedModal={setOpenedModal}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      {openedModal == "liked" && (
        <Liked
          setOpenedModal={setOpenedModal}
          likedPosts={likedPosts}
          setLikedPosts={setLikedPosts}
        />
      )}
      {openedModal == "saved" && (
        <Saved
          setOpenedModal={setOpenedModal}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  overflow-x: hidden;
`;
