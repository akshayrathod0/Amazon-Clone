import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/wearables/BAU_GW/New_launchGW_tallhero_3000x1200._CB597027259_.jpg" alt=""/>
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
            
            {/* <h2 >The Subtotal go ahead</h2> */}
        </div>
    </div>
  )
}

export default Checkout;