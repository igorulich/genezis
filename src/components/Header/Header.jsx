import React, { Component } from 'react'
import styled from './Header.module.scss';
import {
    Link
} from 'react-router-dom';


export class Header extends Component {
  render() {
    return (
      <>
        <header className={styled.header}>
          <nav className={styled.nav}>
           <li className={styled.nav__item}>
               <Link to="/"className={styled.item_linck}>Домашня сторінка</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="/catalog"className={styled.item_linck}>Каталог</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="/about"className={styled.item_linck}>Про нас</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="/blog"className={styled.item_linck}>Блог</Link>
            </li>
            <li className={styled.nav__item}>
              <Link to="/contact"className={styled.item_linck}>Контакти</Link>
            </li>
          </nav>
        </header>
      </>
    )
  }
}

export default Header
