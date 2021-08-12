
import history from './history';


const UserFunction= () => (
   
    
   
        <div >
        <div >
          <h1>UserFunction</h1>
          <p> User All Functions</p>
          <form>
            <button variant="btn btn-success" onClick={() => history.push ('/Product')}>Click to add new Product</button>
            <button variant="btn btn-success" onClick={() => history.push ('/imgProduct')}>Click to see Product</button>

          </form>
        </div>
      </div>

    

);

export default UserFunction;

