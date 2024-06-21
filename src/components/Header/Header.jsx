import React, { Component } from 'react'
import styled from './Header.module.scss';
import {
BrowserRouter,
   Routes,
    Route,
    Link,
} from 'react-router-dom';

import Catalog from '../../pages/Catalog/Catalog'
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
export class Header extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <header className={styled.header}>
          <nav className={styled.nav}>
           <li className={styled.nav__item}>
               <Link to="home"className={styled.item_linck}>Домашня сторінка</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="catalog"className={styled.item_linck}>Каталог</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="about"className={styled.item_linck}>Про нас</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="blog"className={styled.item_linck}>Блог</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="contact"className={styled.item_linck}>Контакти</Link>
            </li>
          </nav>
        </header>
      
          <Routes>
            <Route  path="home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
      </>
    )
  }
}

export default Header
