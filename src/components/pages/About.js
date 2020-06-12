import React from "react";

function About() {
  return (
    <>
        <div className="row">
          <div className="col-12">
            <div className="card bg-dark text-white text-center">
              <img src="https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg" className="card-img img-center" alt="dog" />
              <div className="card-img-overlay">
                <h1 className="card-title">Pupster</h1>
                <h2 className="card-text">They're the Good Boys and Girls</h2>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default About;