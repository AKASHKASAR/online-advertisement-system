import history from '../history';

const UserFunction = () => (

  <div >
    <div className="form-group mt-2 text-center">
      <h1>User Function</h1> <br/>
      </div>
      <form>
        <div className="row ">
        <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/Product')}>Click to add new Product</button>
          </div>
          <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/imgProduct')}>Click to see Product</button>
          </div>
          <div class="col-sm-3">
          <button  class="btn btn-secondary" onClick={() => history.push('/UpdateProduct')}>Click to  Update Product</button>
          </div>
          <div class="col-sm-3">
          <button class="btn btn-secondary" onClick={() => history.push('/RemoveProduct')}>Click to  Delete Product</button>
          </div>
        </div>
      </form>
  </div>
);

export default UserFunction;

