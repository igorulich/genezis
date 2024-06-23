import React, { Component } from 'react';
import styled from './Poster.module.scss';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Posters from '../../../../assets/header-poster-fon.png';

export class Poster extends Component {
  render() {
    return (
      <Container fluid className={styled.posters}>
        <div className={styled.content__circles}>
         
        </div>
     <Image src={Posters} className={styled.poster__img} fluid />;
      </Container>
    )
  }
}

export default Poster
