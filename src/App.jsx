import {
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
     
        <Header />
      
      <Routes>
        
            <Route index path='/home' element={<Home/>} />
            <Route path="/catalog" element={<Сatalog/>} />
            <Route path="/about" element={<About/> } />
            <Route path="/blog" element={<Blog/> } />
            <Route path="/contact" element={<Contact/>} />
      </Routes>
       
     
    </>
  );
}

export default App;
