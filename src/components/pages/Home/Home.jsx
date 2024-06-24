import React, { Component } from 'react';
import styled from './Home.module.scss';
import Poster from './Poster/Poster';
export class Home extends Component {
  render() {
    return (
      <section className={styled.home}>

        <Poster />
      </section>

    )
  }
}

export default Home
