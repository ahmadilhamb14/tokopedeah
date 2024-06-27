import React from 'react'
import ProgresBar from './ProgresBar'

const CardBarang = (props) => {
    const {price, discount, progres, imgUrl} = props;
    const price2 = parseInt(price);
    const discount2 = parseInt(discount);
    const hasilDiscount = price2 - (price2 * discount2 / 100) 
    const formatRupiah = (value) => {
        const numberFormat = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        });
        return numberFormat.format(value);
      };

  return (
    <a href='/detail-page' style={{ 
        borderRadius: '1rem',
        backgroundColor:'white',
        textDecoration: 'none',
        boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.2)'
     }}>
        <div style={{ 
            width: '14rem',
            height: '14rem'
         }}>
            <img style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem 1rem 0 0'
             }} src={imgUrl} alt="" />
        </div>
        <div style={{ 
            padding: '0 0.5rem'
         }}>
            <p style={{ marginBottom: '0', marginTop:"0.5rem" }}><b>{formatRupiah(hasilDiscount)} </b></p>
            <p style={{ marginBottom: '0.5rem', }}><strike style={{  fontSize: '11px' }}>{formatRupiah(price2)}</strike><span style={{  fontSize: '11px', marginLeft: '0.3rem', color: 'rgb(185, 8, 100)', fontWeight: 'bold' }}>{discount}%</span></p>
            <ProgresBar progres={progres} />
            <p style={{ color: 'gray', fontSize: '11px' }}>Segera habis</p>
        </div>
    </a>
  )
}

export default CardBarang