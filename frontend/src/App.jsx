import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import UpdateProductDetails from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="create" element={<CreatePage />} />
            <Route path="modify" element={<UpdateProductDetails />} />
            <Route path="remove" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
