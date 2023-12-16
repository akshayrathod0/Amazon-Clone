import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {

  const [{basket}] = useStateValue();
  // const totalPrice = (basket) => {
  //   const result =  basket.reduce((price, item) => item.price + price, 0);
  //   return Math.round(result * 100) / 100;
  // }
  const history = useNavigate();
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
          Subtotal ({basket.length} items):<strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prfix={"£"}
      />
      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;