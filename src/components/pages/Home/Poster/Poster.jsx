import React, { Component } from 'react';
import styled from './Poster.module.scss';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Posters from '../../../../assets/header-poster-fon.png';

export class Poster extends Component {
  render() {
    return (
      <Container fluid className={styled.Posters}>
        <div className={styled.content__circles}>
          <h2>sercles</h2>
        </div>
     <Image src={Posters} className={styled.Poster__img} fluid />;
      </Container>
    )
  }
}

export default Poster
