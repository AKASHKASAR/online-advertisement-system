
import history from './history';


const AdminFunction= () => (
   
    
   
        <div className="Home">
        <div className="lander">
          <h1>UserFunction</h1>
          <p> User All Functions</p>
          <form>
            <button variant="btn btn-success" onClick={() => history.push ('/Product')}>Click to add new Product</button>
          </form>
        </div>
      </div>

    

);

export default AdminFunction;

