import React from 'react';
import '../App.css';
import Form from './Form'
const MainRight = () => {
    return (
        <div className="main-right">
           <div className="form-opt">
                <div className="form-sub-opt"> 
                    <div><text>1</text></div>
                    <text>Sign Up</text>
                </div>

                <div className="form-sub-opt"> 
                    <div><text>2</text></div>
                    <text>Subscribe</text>
                </div>
           </div>

           <div className="form-head">
                <h3> Select your subscription plan</h3>
           </div>

           <Form/>
        </div>
      );
}
export default MainRight;