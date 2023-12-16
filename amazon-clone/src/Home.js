import React from 'react'
import './Home.css';
import Product from './Product';
const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
           <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/DecWRS/Event/Hero/AF-Unrec-3000._CB570585186_.jpg" alt="banner image"/> 
           
           <div className='home__row'>
            <Product id="12345" title="Himalaya facewash" price={30.99} image="https://m.media-amazon.com/images/I/51tXjE2WQQL._AC_SY200_.jpg" rating={5}/>
            <Product id="123456" title="Dettol Soap" price={40.99} image="https://m.media-amazon.com/images/I/61a5LNKUAZL._AC_SY200_.jpg" rating={4}/>
           </div>

           
           <div className='home__row'>
           <Product id="12343" title="Cushion covers, bedsheets & more" price="20.99" image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/HF_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg" rating={5}/>
            <Product id="12354" title="Home decoration" price={30.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/Home_Decor_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg" rating={5}/>
            <Product id="12422" title="Home storage" price={12.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/Home_Storage_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg" rating={5}/>
           </div>
           <div className='home__row'>
           <Product id="56356" title="Home Furnishing" price={100.99} image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" rating={4}/>

           </div>
        </div>
    </div>
  )
}

export default Home