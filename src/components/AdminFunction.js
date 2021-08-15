import CategoryAdm from "./CategoryAdm";
import history from './history';


const AdminFunction= () => (
   
    
   
        <div className="Home">
        <div className="lander">
          <h1>AdminFunction</h1>
          <p> Admin All Functions</p>
          <form>
            <div class="row col-md-3">

            <button variant="btn btn-success" onClick={() => history.push ('/CategoryAdm')}>Click to add new category</button>

            <button variant="btn btn-success" onClick={() => history.push ('/User')}>View Users List</button>
            <button variant="btn btn-success" onClick={() => history.push ('/imgProduct')}>Click to see Product</button>
            <button variant="btn btn-success" onClick={() => history.push ('/')}>Update status of Product</button>

            
            {/* <button variant="btn btn-success" onClick={() => history.push ('/User')}>View Users</button> */}
            
            </div>
           
        </form>
        </div>
      </div>

    

 
        
       
            
        
   
   

);

export default AdminFunction;