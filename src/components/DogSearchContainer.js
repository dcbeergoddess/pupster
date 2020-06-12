import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultsList"
import API from "../utils/API";

class DogSearchContainer extends Component {
  state = {
    results: [],
    search: "pitbull"
  };

  componentDidMount() {
    this.searchDogs();
  }

  searchDogs = () => {
    API.getDogsOfBreed(this.state.search)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDogs()
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <ResultList results={this.state.results} />

      </div>
    );
  }
}



export default DogSearchContainer;