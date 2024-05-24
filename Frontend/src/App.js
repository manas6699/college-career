// import Brocure from "./componants/Brocure";
import Home from "./componants/Home/Home";

import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import Admin from "./componants/Admin";
import Records from "./componants/Records";
import AddEdit from "./componants/AddEdit";
import Contacts from "./componants/Contacts";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar";
import Notice from "./componants/Notice";
import Edit from "./componants/Edit";



function App() {
  return (
    <>
    
      <Router>
        <Navbar/>
       <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="developer" element={<ParticleConfig />} /> */}
          <Route exact path="contact" element={<Contacts />} />
          <Route exact path="notice" element={<Notice />} />

          <Route path="admin" element={<Admin />} />
          <Route path="admin/add" element={<AddEdit />} />
          <Route path="admin/edit/:id" element={<Edit />} />
          <Route path="records" element={<Records />} />
        </Routes>
        <Footer/>
        </switch>
      </Router>
    </>
  );
}

export default App;
