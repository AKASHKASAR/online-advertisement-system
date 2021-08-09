


const SearchBar = () => (
    // <form  action="/" method="get">
    //     <label htmlFor="header-search">
    //         <span className="visually-hidden">Search blog posts</span>
    //     </label>
    //     <input
    //         type="text"
    //         id="header-search"
    //         placeholder="Mobile,Laptop,Car,Bike"
    //         name="s" 
    //     />
    //     <button type="submit">Search</button>
    // </form>

    <div className="input-group">
        <input type="search" class="form-control rounded " placeholder="Mobile,Electronics"  />
        <button type="button" class="btn btn-outline-white  bg-warning" >search</button>
    </div>
   

);

export default SearchBar;