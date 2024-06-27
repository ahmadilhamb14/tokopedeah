import React from 'react'
import CardRekomendasi from './fragment/CardRekomendasi'

const Rekomendasi = () => {
  return (
    <div style={{
        width:'75%', 
        display: 'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        marginBottom:'2rem',
        position: 'relative'
        }}>
        <h4 style={{ 
            fontWeight: 'bold', 
            margin: '1rem 0'
         }}>Rekomendasi untuk anda</h4>
        <div className="content" 
        style={{ 
            display:'flex', 
            gap:'1rem', 
            width:'100%', 
            overflowX: 'scroll',
            // position: 'absolute'
             }}>
            <CardRekomendasi />
            <CardRekomendasi />
            <CardRekomendasi />
            <CardRekomendasi />
            <CardRekomendasi />
            <CardRekomendasi />
        </div>
    </div>
  )
}

export default Rekomendasi