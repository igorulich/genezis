
import Header from './components/Header/Header';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Katalog from './pages/Catalog/Catalog';
function App() {
  return (
    <>
      <Header/>
      <Home />
      <Katalog />
      <About />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
