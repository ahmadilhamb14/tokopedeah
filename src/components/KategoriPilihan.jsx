import React from 'react'
import { Button, Card } from 'react-bootstrap'


const KategoriPilihan = () => {
  return (
    <div className='kategori-pilihan'>
        <div className="kategori-card">
            <Card
                body
                style={{ 
                    // width: '80%'
                 }}
            >
                <div className="body-kategori">

                    <div className='left-kat'>
                        <h5>Kategori Pilihan</h5>
                        <div className="pictures">

                            <Card body className="images">
                                <img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" />
                                <p></p>
                            </Card>

                            <Card body className="images">
                                <img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp" alt="" />
                                <p></p>
                            </Card>

                            <Card body className="images">
                                <img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp" alt="" />
                                <p></p>
                            </Card>

                            <Card body className="images">
                                <img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp" alt="" />
                                <p></p>
                            </Card>
                        </div>
                    </div>

                    <div className='right-kat'>
                        <h5>Top Up & Penagihan</h5>
                        <Card body className='bill'>
                            <div className="table-header">
                                <span className='active'>Pulsa</span>
                                <span>Paket Data</span>
                                <span>Flight</span>
                                <span>PLN</span>
                            </div>
                            <div className="content">
                                <div className="telfon column">
                                    <label htmlFor="">Nomor Telfon</label>
                                    <input type="text" />
                                </div>
                                <div className="nominal column">
                                    <label htmlFor="">Nominal</label>
                                    <input type="text" />
                                </div>
                                <Button variant="secondary" className='beli-button' style={{ padding: '0 2rem' }}>Beli</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default KategoriPilihan