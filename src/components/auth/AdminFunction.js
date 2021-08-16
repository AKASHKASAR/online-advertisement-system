import history from '../history';

const AdminFunction = () => (

    <div >
    <div className="form-group mt-2 text-center">
      <h1>Admin Function</h1> <br/>
      </div>
      <form>
        <div class="row">
        <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/CategoryAdm')}>Click to add new category</button>
        </div>
        <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/User')}>View Users List</button>
          </div>
          <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/imgProduct')}>Click to see Product</button>
          </div>
          <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/ProductStatus')}>Update status of Product</button>
          </div>
        </div>
      </form>
    </div>
  











);

export default AdminFunction;