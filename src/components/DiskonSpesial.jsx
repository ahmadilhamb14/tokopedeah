import React from 'react'
import CardBarang from './fragment/CardBarang'

const DiskonSpesial = () => {
  return (
    <div className='diskon-spesial'>
        <div className="header" style={{ 
            display: 'flex',
            width: '100%',
            gap: '1rem'
         }}>
            <span className='title' style={{ fontWeight: 'bold' }}>Kejar Diskon Spesial</span>
            <div className="count-down">
                <span>Berakhir dalam</span>
                <div>
                    <span className='timer'>01</span>
                    <span>:</span>
                    <span className='timer'>45</span>
                    <span>:</span>
                    <span className='timer'>12</span>
                </div>
                <span style={{ color: 'green', fontWeight: 'bold' }}>Lihat semua</span>
            </div>
        </div>
        <div className="body">
            <div className="purple-box" style={{ display:'flex', alignItems: 'center' }}>
                <div style={{ width:"8rem", marginLeft:'3rem', height:'10rem' }}>
                    <img src="https://images.tokopedia.net/img/cache/240/zssuBf/2024/5/2/d4b5e774-42df-4e52-8345-71ce669079b5.png.webp?ect=4g" alt="" style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                     }} />
                </div>
            </div>
            
            <div className="content"
            style={{ 
                paddingLeft: "16rem", 
                display: 'flex', 
                gap: '1.5rem', 
                overflowX: 'scroll', 
                width: '100%' }}>
                <CardBarang price="80000" discount='63' progres='90' imgUrl="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/8/5/cb0ad05c-9278-49a4-a98a-ea06ad6925b0.png" />
                <CardBarang price="104400" discount='50' progres='75' imgUrl="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/14/8c18553d-f77e-484f-bddb-e6b1e001ddb3.jpg" />
                <CardBarang price="25500" discount='13' progres='75' imgUrl="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/3/7/1c5b06c9-5326-4a6e-85c6-d12859aa03f8.jpg" />
                <CardBarang price="129000" discount='70' progres='75' imgUrl="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/6/24/3e3b91d8-b60f-449c-a3da-05b225552ea7.png" />
            </div>
        </div>
    </div>
  )
}

export default DiskonSpesial