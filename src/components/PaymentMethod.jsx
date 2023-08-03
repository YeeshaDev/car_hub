import React from 'react';
import Paypal from '../../src/assets/paypal.jpg';
import MasterCard from '../../src/assets/master-card.jpg'

const PaymentMethod = () => {
    return (
        <>
      <div className="payment">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 flex items-center justify-between lg:gap-10">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={MasterCard} alt="" />
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" /> Paypal
        </label>

        <img src={Paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
    )
}

export default PaymentMethod
