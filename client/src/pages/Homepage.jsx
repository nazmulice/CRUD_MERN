import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import CreateForm from "./CreatePage";

import ReadPage from "./ReadPage";
import UpdatePage from "./UpdatePage";

const Homepage = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ReadPage />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/update/:id" element={<UpdatePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Homepage;
