import React from "react";
import DogSearchContainer from "../DogSearchContainer"

function Search(props){
  return (
    <div>
      <h1 className="text-center">Search by Breed!</h1>
      <DogSearchContainer />
    </div>
  );
}

export default Search;