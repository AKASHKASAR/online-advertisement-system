import history from '../history';

const UserFunction = () => (

  <div >
    <div >
      <h1>UserFunction</h1>
      <p> User All Functions</p>
      <form>
        <div className="row ">
        <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/Product')}>Click to add new Product</button>
          </div>
          <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/imgProduct')}>Click to see Product</button>
          </div>
          <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/UpdateProduct')}>Click to  Update Product</button>
          </div>
          <div class="col-sm-3">
          <button variant="btn btn-success" onClick={() => history.push('/RemoveProduct')}>Click to  Delete Product</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default UserFunction;

