import React, { Component } from 'react';
import styled from './Poster.module.scss';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Posters from '../../../../assets/header-poster-fon.png';
import Circle from '../../../../assets/header-poster-sircle2-1.png'
export class Poster extends Component {
  render() {
    return (
      <Container fluid className={styled.posters}>
        <div className={styled.content__circles}>
          <div className={styled.circle1}>
            <div className={styled.circle1__title}>
            <span>ЗЕЛЕНА ЭНЕРГИЯ</span>
            <span>НАШЕ</span>
            <span>МАЙБУТНЄ</span>
            </div>
          </div>
          <div className={styled.circle2}>
           <Image src={Circle} className={styled.Circle} roundedCircle />
          </div>
        </div>
     <Image src={Posters} className={styled.poster__img} fluid />;
      </Container>
    )
  }
}

export default Poster
