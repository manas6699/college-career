import About from "./componants/About";
import Brocure from "./componants/Brocure";
import Home from "./componants/Home/Home"

import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/brochure" element={<Brocure/>} />
      <Route path="/contact" element={<About/>} />
      
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
