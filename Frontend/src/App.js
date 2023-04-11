import About from "./componants/About";
import Brocure from "./componants/Brocure";
import Home from "./componants/Home/Home";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Admin from "./componants/Admin";
import Records from "./componants/Records";
import AddEdit from "./componants/AddEdit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="brochure" element={<Brocure />} />
          <Route path="contact" element={<About />} />

          <Route path="admin" element={<Admin />} />
          <Route path="admin/add" element={<AddEdit />} />
          <Route path="records" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
