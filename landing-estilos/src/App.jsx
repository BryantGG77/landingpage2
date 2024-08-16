import React from 'react'
import './App.css'
import CardSection1 from './components/CardSection1/CardSection1'

export default function App() {
  return <>

    <section className='app'>
      <header className="app-header">
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'><a className='nav-item-a' href="#">Demos</a></li>
            <li className='nav-item'><a className='nav-item-a' href="#">Pages</a></li>
            <li className='nav-item'><a className='nav-item-a' href="#">Projects</a></li>
            <img src="/src/assets/logo-dark.png" alt="Logo Sandbox" className='nav-logo' />
            <li className='nav-item'><a className='nav-item-a' href="#">Blog</a></li>
            <li className='nav-item'><a className='nav-item-a' href="#">Blocks</a></li>
            <li className='nav-item'><a className='nav-item-a' href="#">Documentation</a></li>
          </ul>
        </nav>
      </header>


      <section className="app-main-section1">

        <section className="container-section1">
          <img className='section1-img' src="/src/assets/image.png" alt="resaltando easier" />
          <h1 className="section1-h1">We bring solutions to make life easier</h1>
          <p className="section1-p">We are a creative company that focuses on long
            term relationships with customers.</p>
          <a className='section1-button' href="https://www.youtube.com/@elbrashitan" target="_blank">Read More</a>

        </section>
      </section>

    </section>

    <main>
      <section className='app-main-section2'>
        <CardSection1 img="/src/assets/SVG.png" alt="libreria" title="Content Marketing" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#E668B3'} />
        <CardSection1 img="/src/assets/SVG 2.png" alt="Sociedad" title="Social Engagement" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#A07CC5'} />
        <CardSection1 img="/src/assets/SVG 3.png" alt="Bombillo idea" title="Identity & Branding" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#F78B77'} />
        <CardSection1 img="/src/assets/SVG 4.png" alt="Paquete" title="Product Design" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#45C4A0'} />
      </section>
    </main>

  </>


}
