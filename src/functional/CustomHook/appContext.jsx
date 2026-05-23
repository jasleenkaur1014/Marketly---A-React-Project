import { createContext, useContext } from "react";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";

const appContext = createContext();

function useAppContext() {
  const value = useContext(appContext);
  return value;
}

function CustomAppContext({ children }) {
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
    <appContext.Provider
      value={{
        openedModal,
        setOpenedModal,
        search,
        setSearch,
        select,
        setSelect,
        page,
        setPage,
        cartItems,
        setCartItems,
        likedPosts,
        setLikedPosts,
        savedRecipes,
        setSavedRecipes,
        like,
        setlike,
        data,
        loading,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export { useAppContext };

export default CustomAppContext;
