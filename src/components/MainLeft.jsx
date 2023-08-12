import React from 'react';
import '../App.css';
const MainLeft = () => {
    return (
        <div className="main-left">
            <div className="left-headline">

                <h2>
                    Access curated courses worth <br/> ₹ <span className="intersecting-line">18,500</span> at just <span className="newprice"><b>₹ 99</b></span> per year!
                </h2>
            </div>

            <div className="pointer">

                <div className="pointer1">
                    <img src="/assets/p1.png" alt="icon"/>
                    <text><span className="newprice">100+</span> Job relevant courses</text>
                </div>

                <div className="pointer1">
                    <img src="/assets/p2.png" alt="icon"/>
                    <text><span className="newprice">20,000+</span> Hours of content</text>

                </div>

                <div className="pointer1">
                    <img src="/assets/p3.png" alt="icon"/>
                    <text><span className="newprice">Exclusive</span> webinar access</text>
                </div>

                <div className="pointer1">
                    <img src="/assets/p4.png" alt="icon"/>
                    <text>Scholarship worth <span className="newprice">₹94,500</span> </text>
                </div>

                <div className="pointer1">
                     <img src="/assets/p5.png" alt="icon"/>
                     <text><span className="newprice">Ad Free </span>learning experience</text>
                </div>
            </div>
        </div>
      );
}
export default MainLeft;