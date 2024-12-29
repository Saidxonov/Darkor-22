import { Routes, Route } from "react-router-dom";
import ColorGenerator from "./pages/ColorGenerator";
import MainLayout from "./Layout/MainLayout";
import Dark from "./pages/Dark";
import TextChanger from "./pages/TextChanger";
import UserColor from "./pages/UserColor";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <ColorGenerator />
          </MainLayout>
        }
      />
      <Route
        path="/modes"
        element={
          <MainLayout>
            <Dark></Dark>
          </MainLayout>
        }
      />
      <Route
        path="text-editor"
        element={
          <MainLayout>
            <TextChanger></TextChanger>
          </MainLayout>
        }
      />
      <Route
        path="/user-color"
        element={
          <MainLayout>
            <UserColor />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <ErrorPage></ErrorPage>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
