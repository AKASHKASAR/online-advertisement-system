import React from 'react';
import '../App.css';
import ProductImgHome from './product/ProductImgHome';

function Home() {
  return (

    <div className="text-center" >
      {/* <h1 className="display-1 text-primary">Home Component</h1> */}
      <h1> Welcome to Flybuy</h1>
      <ul><img src="./Images/Buy_Sell.jpg" width="1050px" height="300px" alt="imgbs" className="center" /></ul>
      <ul>
        <ProductImgHome />
      </ul>
    </div>
  );
}
export default Home;