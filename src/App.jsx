import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import './scss/_App.scss';

import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Сatalog from './components/pages/Catalog/Catalog';
import Header from './components/Header/Header';
import Poster from './components/pages/Home/Poster/Poster';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Outlet />
        <Poster/>
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="/catalog" element={<Сatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
