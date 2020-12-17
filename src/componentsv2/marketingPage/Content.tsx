import React from 'react';
import img1 from '../../imgs/Rectangle82.png';

const Content = () => {
   return  (
      <section className="Content">
         <div className="Content-inner">
            <h1>compare compadibility</h1>
            <h1>with friends</h1>
            <div className="imgs-wrapper">
               <img src={img1} alt=""/>
               <img src={img1} alt=""/>
               <img src={img1} alt=""/>
               <img src={img1} alt=""/>
               <img src={img1} alt=""/>
            </div>
         </div>
      </section>
   )
}

export default Content;