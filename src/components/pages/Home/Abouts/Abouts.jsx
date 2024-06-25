import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styled from './Abouts.module.scss';
import Image from 'react-bootstrap/Image';
import ItemFon1 from '../../../../assets/ItemFon1.png';
import ItemFon2 from '../../../../assets/ItemFon2.png';
import ItemFon3 from '../../../../assets/ItemFon3.png';

export class Abouts extends Component {
  render() {
    return (
      <div className={styled.abouts}>
        <Container>
          <div className={styled.abouts__content}>
            <div className={styled.abouts__item}>
              <div className={styled.abouts__item_fon}>
             
                
                  <Image src={ItemFon1} />
              </div>
            </div>
            <div className={styled.abouts__item}>
              <div className={styled.abouts__item_fon}>
             
                
                  <Image src={ItemFon2} />
              </div>
            </div>
            <div className={styled.abouts__item}>
              <div className={styled.abouts__item_fon}>
             
                
                  <Image src={ItemFon3} />
              </div>
            </div>

          </div>
        </Container>
      </div>
    )
  }
}

export default Abouts;
