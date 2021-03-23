import React from 'react';
import style from './recipemain.module.css';

const Search=(props)=>{
    return(
        <form className={style.search1} onSubmit={props.submit}>
        <input className={style.search2} type="text" value={props.value} onChange={props.change} 
        placeholder="Search for your favorite recipe..."/> 
        <i className="fas fa-search" onClick={props.submit} ></i>        
      </form>
    );
}

export default Search;