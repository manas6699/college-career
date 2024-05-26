
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/Admin'
import Navbar from './components/Navbar';
import Event from './pages/Event';
import AddEdit from './pages/AddEdit';
import Edit from './pages/Edit';

const App = () => {
  return (
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/event' element={<Event />} />
    <Route path='/admin/add' element={<AddEdit/>} />
    <Route path='/admin/edit/:id' element={<Edit/>} />
  </Routes>
</BrowserRouter>   
  )
}

export default App