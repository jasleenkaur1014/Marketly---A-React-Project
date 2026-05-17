import Posts from "./Posts";
import Products from "./Products";
import Recipes from "./Recipes";
import Users from "./Users";

export default function MainContent(props) {
  const {
    select,
    setCartItems,
    cartItems,
    addedCart,
    setAddedCart,
    page,
    setPage,
    data,
    loading,
    likedPosts,
    setLikedPosts,
    savedRecipes,
    setSavedRecipes,
  } = props;

  return (
    <>
      {select === "products" && (
        <Products
          data={data}
          loading={loading}
          setCartItems={setCartItems}
          cartItems={cartItems}
          page={page}
          setPage={setPage}
        />
      )}
      {select === "users" && (
        <Users data={data} loading={loading} page={page} setPage={setPage} />
      )}
      {select === "recipes" && (
        <Recipes
          data={data}
          loading={loading}
          page={page}
          setPage={setPage}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
      )}
      {select === "posts" && (
        <Posts
          data={data}
          loading={loading}
          page={page}
          setPage={setPage}
          likedPosts={likedPosts}
          setLikedPosts={setLikedPosts}
        />
      )}
    </>
  );
}
