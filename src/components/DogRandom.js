import React, { Component } from "react";
import API from "../utils/API";

class DogRandom extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
    
  };

  componentDidMount() {
    this.loadNextDog();
  }

  loadNextDog = () => {
    API.getRandomDog()
      .then(res => 
        this.setState({
          image: res.data.message
        }))
      .catch(err => console.log(err));
  };

  handleClickDown = () => {
    console.log("Not Interested")
    this.loadNextDog();
  }

  handleClickUp = () => {
    console.log("Make Friend!")
    // If you "thumbs up" a dog, there is a 1 in 5 chance that the dog likes you too, and the friends count goes up by 1.
    this.loadNextDog();
  }


  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card bg-dark text-white">
                <img src= {this.state.image} className="card-img img-center" alt="dog" />
                <div className="card-img-overlay">
                <button onClick={this.handleClickDown}><i className="fa fa-thumbs-down"></i></button>
                <button onClick={this.handleClickUp}><i className="fa fa-thumbs-up"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{` 
          #card {
            height: auto;
            width: 100px
          }

          button {
            font-size: 50px;
          }

        `}</style>
      </>
    )
  }

}

export default DogRandom