import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import '../App.css';
const Main = () => {
    return (
        <div className="main">
            <MainLeft/>
            <MainRight/>
        </div>
      );
}
export default Main;