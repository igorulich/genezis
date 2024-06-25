import React, { Component } from 'react';
import styled from './Home.module.scss';
import Poster from './Poster/Poster';
import Abouts from './Abouts/Abouts';
export class Home extends Component {
  render() {
    return (
      <section className={styled.home}>

        <Poster />
        <Abouts/>
      </section>

    )
  }
}

export default Home
