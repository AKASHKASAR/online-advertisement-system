import CategoryAdm from "./CategoryAdm";
import history from './history';


const AdminFunction= () => (
   
    
   
        <div className="Home">
        <div className="lander">
          <h1>AdminFunction</h1>
          <p> Admin All Functions</p>
          <form>
            <button variant="btn btn-success" onClick={() => history.push ('/CategoryAdm')}>Click to add new category</button>
            {/* <button variant="btn btn-success" onClick={() => history.push ('/CategoryAdm')}>View Users</button> */}
        </form>
        </div>
      </div>

    

 
        
       
            
        
   
   

);

export default AdminFunction;