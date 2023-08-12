import React, { useState } from 'react'
import '../styles/Form.css'
const Form = () => {
  

  const optionPrices = {
    'plan-1': 18401,
    'plan-2': 18321,
    'plan-3': 18351,
    'plan-4': 18401
  }

  const [selectedOption, setSelectedOption] = useState(null)
  const [totalAmount, setTotalAmount] = useState(99)

  const handleClick = planId => {
    setSelectedOption(planId)
    setTotalAmount(18500 - optionPrices[planId])
   
  }
  return (
    <div className='form'>
      <div className='subscription'>
        <div className='plans'>
          <div
            className={`plan ${selectedOption === 'plan-1' ? 'selected' : ''}`}
            id='plan-1'
            onClick={() => handleClick('plan-1')}
          >
            <div className='currentstatus' id='status-1'>
              <text>Offer expired</text>
            </div>
            <div className='plan-bottom'>
              <div className='plan-left'>
                <div className='plan-descr'>
                  <text> 12 Months Subscription</text>
                </div>
              </div>

              <div className='plan-right'>
                <div className='plan-total'>
                  <div className='plan-total-top'>
                    <text>
                      Total <span>₹ 99</span>
                    </text>
                  </div>

                  <div className='plan-total-bottom'>
                    <text>₹ 8 / mo</text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`plan ${selectedOption === 'plan-2' ? 'selected' : ''}`}
            id='plan-2'
            onClick={() => handleClick('plan-2')}
          >
            <div className='currentstatus' id='status-2'>
              <text>Recommended</text>
            </div>
            <div className='plan-bottom'>
              <div className='plan-left'>
                <div className='plan-descr'>
                  <text> 12 Months Subscription</text>
                </div>
              </div>

              <div className='plan-right'>
                <div className='plan-total'>
                <div className='plan-total-top'>
                    <text>
                      Total <span>₹ 179</span>
                    </text>
                  </div>

                  <div className='plan-total-bottom'>
                    <text>₹ 15 / mo</text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`plan ${selectedOption === 'plan-3' ? 'selected' : ''}`}
            id='plan-3'
            onClick={() => handleClick('plan-3')}
          >
            <div className='currentstatus' id='status-3'>
              <text></text>
            </div>
            <div className='plan-bottom'>
              <div className='plan-left'>
                <div className='plan-descr'>
                  <text> 6 Months Subscription</text>
                </div>
              </div>

              <div className='plan-right'>
                <div className='plan-total'>
                <div className='plan-total-top'>
                    <text>
                      Total <span>₹ 149</span>
                    </text>
                  </div>

                  <div className='plan-total-bottom'>
                    <text>₹ 25 / mo</text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`plan ${selectedOption === 'plan-4' ? 'selected' : ''}`}
            id='plan-4'
            onClick={() => handleClick('plan-4')}
          >
            <div className='currentstatus' id='status-4'>
              <text></text>
            </div>
            <div className='plan-bottom'>
              <div className='plan-left'>
                <div className='plan-descr'>
                  <text> 3 Months Subscription</text>
                </div>
              </div>

              <div className='plan-right'>
                <div className='plan-total'>
                <div className='plan-total-top'>
                    <text>
                      Total <span>₹ 99</span>
                    </text>
                  </div>

                  <div className='plan-total-bottom'>
                    <text>₹ 33 / mo</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className='subscr-fee'>
          <div>
            <text>Subscription Fee</text>
          </div>
          <div>
            <text>₹18,500</text>
          </div>
        </div>

        <div className='plan' id='limited'>
          <div className='limited-up'>
            <div>
              <text>Limited time offer</text>
            </div>

            <div>
              <text>- ₹18,401</text>
            </div>
          </div>
          <div className='limited-down'>
            <span>
              <img className='limitedicon' src='/assets/limitedicon.png' alt='icon' />
            </span>
            <div>
              <text>Offer validity till March 2023</text>
            </div>
          </div>
        </div>
        <div className='total'>

            <div className="total-descr">
                <text><b>Total</b> <span>(Incl of 18 %GST)</span></text>
            </div>
            <div> <b> Rs {totalAmount}</b></div>
        </div>

        <div className="button-container">
            <button className="cancel-button"><b>CANCEL</b></button>
            <button className="proceed-button"><b>PROCEED TO PAY</b></button>
        </div>

        <div className="payment-partner">
            <img className="payment-logo"src="/assets/RazorpayIcon.png" alt="paymentpartner" />
        </div>
      </div>
    </div>
  )
}

export default Form;
