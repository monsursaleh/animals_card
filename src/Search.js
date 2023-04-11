import React from 'react'

const Search = (props) => {
  console.log(props)
  return <input onKeyUp={props.searchHandler} />
}

export default Search
