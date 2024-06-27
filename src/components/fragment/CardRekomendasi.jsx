import React from 'react'

const CardRekomendasi = () => {
  return (
    <a href='/detail-page'  className='card-rekomendasi' 
    style={{ 
        // width:'14rem',
        textDecoration: 'none',
        borderRadius:'0.5rem' , 
        backgroundColor:'white', 
        boxShadow:'0 1px 10px 0 rgba(0, 0, 0, 0.2)' }}>
        <div style={{ 
            width:'14rem',
            height: '14rem'
         }}>
            <img style={{ 
                width:'100%',
                height: '100%',
                objectFit: 'cover'
             }} src="https://images.tokopedia.net/img/cache/300-square/product-1/2019/7/5/3453155/3453155_b49ba184-3041-444a-8708-ea65fd09ca78_1280_1280" alt="" />
        </div>
        <div className="content" style={{ padding:'1rem' }}>
             <p>Baju Kaos keren gada obat</p>
             <h5 style={{ fontWeight:'bold' }}>40.000</h5>
             <div className="location" style={{ display:'flex', alignItems:"center" }}>
                <div style={{ display:'flex',width:'1rem', justifyContent:'center',  marginRight:'0.2rem'}}>
                    <i class="fa-solid fa-location-dot" style={{color: 'green'}}></i>
                </div>
                <span>Makassar</span>
             </div>
             <div className="rating" style={{ display:'flex', alignItems:'center' }}>
                <div style={{ display:'flex',width:'1rem' , justifyContent:'center', marginRight:'0rem' }}>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i>
                </div>
                <span>4.4</span>|
                <span>80 terjual</span>
             </div>
        </div>
    </a>
  )
}

export default CardRekomendasi