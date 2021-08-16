import React from 'react';
import '../App.css';
import imgProduct from './ImgProduct';
import ProductImgHome from './ProductImgHome';
import Search from './Search';

function Home() {
  return (
    
    <div className="text-center" >
    {/* <h1 className="display-1 text-primary">Home Component</h1> */}
      
      <h1> Welcome to Flybuy</h1>
      <p>Now Sell and Buy anytime on Flybuy</p>
       <ul><img src="./Images/imgbs.jpg" width="1000px" height="160px" alt="imgbs" className="center"/></ul>
        <ul>
          <ProductImgHome />
        </ul>
     {/* <div class="container">
         <div class="row">
       <div class="col-lg-5 mb-4"> */}

       {/* <div className="card " style={{width:" 18rem"}}>
       
       <div className="card-body  ">
         <h5 className="card-title">Card title</h5>
         <p className="card-text"> card's content</p>
        <img className="card-img-top" src="./Images/imgbs.jpg" width="200px" height="150px" alt="imgbs" className="center"></img>
         </div>
     </div> */}
   
    {/* <div className="card " style={{width:" 18rem"}}>
       
         <div class="card-body  ">
        <h5 class="card-title">Card title</h5>
         <p class="card-text"> card's content</p>
         <img class="card-img-top" src="./Images/imgbs.jpg" width="200px" height="150px" alt="imgbs" className="center"></img>
         </div>
    </div> */}

     </div>
    // </div>
    //  </div>
    //  </div>
      
  );
}
export default Home;