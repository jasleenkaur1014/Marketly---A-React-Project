import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import MainContent from "./pages/MainContent";
import styled from "styled-components";
import Cart from "./modals/Cart";
import Liked from "./modals/Liked";
import Saved from "./modals/Saved";
import CustomAppContext, { useAppContext } from "./appContext";

export default function CustomProjectParent() {
  return (
    <CustomAppContext>
      <App />
    </CustomAppContext>
  );
}

function App() {
  const { openedModal } = useAppContext();

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <MainContentWrapper>
          <MainContent />
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
