import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import styled from "styled-components";
import Cart from "./modals/Cart";
import Liked from "./modals/Liked";
import Saved from "./modals/Saved";
import CustomAppContext, { useAppContext } from "./appContext";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Products from "./pages/Products";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/products" /> },

      { path: "products", element: <Products /> },
      { path: "posts", element: <Posts /> },
      { path: "users", element: <Users /> },
      { path: "recipes", element: <Recipes /> },
    ],
  },
]);

export default function CustomProjectParent() {
  return (
    <CustomAppContext>
      <RouterProvider router={router} />
    </CustomAppContext>
  );
}

function Layout() {
  const { openedModal } = useAppContext();

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <MainContentWrapper>
          <Outlet />
        </MainContentWrapper>
      </Container>

      {openedModal === "cart" && <Cart />}
      {openedModal === "liked" && <Liked />}
      {openedModal === "saved" && <Saved />}
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
