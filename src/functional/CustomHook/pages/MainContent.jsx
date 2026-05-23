import { useAppContext } from "../appContext";
import Posts from "./Posts";
import Products from "./Products";
import Recipes from "./Recipes";
import Users from "./Users";

export default function MainContent(props) {
  const { select } = useAppContext();

  return (
    <>
      {select === "products" && <Products />}
      {select === "users" && <Users />}
      {select === "recipes" && <Recipes />}
      {select === "posts" && <Posts />}
    </>
  );
}
