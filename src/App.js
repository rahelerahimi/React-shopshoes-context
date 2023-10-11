import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Aboute,
  Login,
  Error,
  SharedLayout,
  SingleProduct,
  Dashboard,
  ProtectedRoure,
} from "./pages/Component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/aboute" element={<Aboute />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoure>
                  <Dashboard />
                </ProtectedRoure>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
