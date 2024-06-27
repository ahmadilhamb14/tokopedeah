import React from 'react'
import MyNavbar from '../components/Navbar'
import { Carousel } from 'react-bootstrap'
import Carosel from '../components/Carosel'
import KategoriPilihan from '../components/KategoriPilihan'
import DiskonSpesial from '../components/DiskonSpesial'
import Rekomendasi from '../components/Rekomendasi'

const Home = () => {
  return (
    <>
        <MyNavbar />
        <div style={{ 
          paddingTop: '6rem',
          display: 'flex',
          flexDirection: "column",
          alignItems:"center",
          gap: '1rem'
         }}>
          <Carosel />
          <KategoriPilihan/>
          <DiskonSpesial />
          <Rekomendasi />
        </div>
    </>
  )
}

export default Home