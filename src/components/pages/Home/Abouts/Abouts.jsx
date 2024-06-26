import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styled from './Abouts.module.scss';
import Image from 'react-bootstrap/Image';
import ItemFon1 from '../../../../assets/ItemFon1.png';
import ItemFon2 from '../../../../assets/ItemFon2.png';
import ItemFon3 from '../../../../assets/ItemFon3.png';
import ItemNomber1 from '../../../../assets/ItemNomber1.png';
import ItemNomber2 from '../../../../assets/ItemNomber2.png';
import ItemNomber3 from '../../../../assets/ItemNomber3.png';

export class Abouts extends Component {
  render() {
    return (
      <div className={styled.abouts}>
        <Container>
          <div className={styled.abouts__content}>
            <div className={styled.content__item}>
              <Image className={styled.itemNomber1} src={ItemNomber1} />
              <div className={styled.content__descr}>
                <div className={styled.content__item_title}>ПРОДАЖ</div>
                <div className={styled.content__item_text}>Найбільший вибір сонячних батарей. завжди в наявності по оптових цінах!Ми пропонуємо сонячні панелі найкращої якості від провідних виробників. </div>
              </div>
              <Image className={styled.itemFon1} src={ItemFon1} />
            </div>
            <div className={styled.content__item}>
              <Image className={styled.itemNomber2} src={ItemNomber2} />
              <div className={styled.content__descr}>
                <div className={styled.content__item_title}>ВСТАНОВЛЕННЯ</div>
                <div className={styled.content__item_text}>
                 Встановлення сонячних панелей вимагає  правильного розташування на даху або землі, монтажу на підтримуючу конструкцію і підключення до електричної системи будинку.
                </div>
              </div>
              <Image className={styled.itemFon1} src={ItemFon2} />
            </div>
            <div className={styled.content__item}>
              <Image className={styled.itemNomber3} src={ItemNomber3} />
              <div className={styled.content__descr}>
                <div className={styled.content__item_title}>СЕРВІС</div>
                <div className={styled.content__item_text}>Сервіс сонячних панелей - це послуга, яка надає підтримку в установці, обслуговуванні і ремонті сонячних панелей. </div>
              </div>
              <Image className={styled.itemFon1} src={ItemFon3} />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Abouts;
