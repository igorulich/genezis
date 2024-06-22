import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Сatalog from './pages/Catalog/Catalog';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path="Catalog" element={<Сatalog />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
