import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layout/rootLayout";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./pages/Wrapper";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        {/* <Route
          path="dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        /> */}
        <Route
          path="dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
