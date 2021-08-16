import history from '../history';

const AdminFunction = () => (

  <div className="Home">
    <div className="lander">
      <h1>AdminFunction</h1>
      <p> Admin All Functions</p>
      <form>
       
        <div class="row">
        <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/CategoryAdm')}>Click to add new category</button>
        </div>
        <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/User')}>View Users List</button>
          </div>
          <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/imgProduct')}>Click to see Product</button>
          </div>
          <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/ProductStatus')}>Update status of Product</button>
          </div>
        </div>
      </form>
    </div>
  </div>











);

export default AdminFunction;