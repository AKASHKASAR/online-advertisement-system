
import history from './history';
import { Link } from "react-router-dom";


const UserFunction= () => (
   
    
   
        <div >
        <div >
          <h1>UserFunction</h1>
          <p> User All Functions</p>
          {/* <Link to={'/UpdateProduct'}>
        <button >Login</button></Link> */}
          <form>
          <div className="row col-md-3">
            
            <button variant="btn btn-success" onClick={() => history.push ('/Product')}>Click to add new Product</button>
            <button variant="btn btn-success" onClick={() => history.push ('/imgProduct')}>Click to see Product</button>
            <button variant="btn btn-success" onClick={() => history.push ('/UpdateProduct')}>Click to  Update Product</button>
            <button variant="btn btn-success" onClick={() => history.push ('/RemoveProduct')}>Click to  Delete Product</button>
           </div>
          </form>
        </div>
      </div>

    

);

export default UserFunction;

