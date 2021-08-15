import React, { Component } from 'react';
 

let Search=(props)=>{
    return(
        <div>
            <input  onChange={props.handleInput} type="text"
            />

        </div>

    )
}

export default Search;