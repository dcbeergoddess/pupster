import React from "react";

function SearchForm(props) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              {/* htmlFor becuase for is a js thing */}
              <label htmlFor="search">Breed Name:</label>
              <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Type a dog breed to begin"
                id="search"
              />
              <button type="submit" onClick={props.handleFormSubmit}
                className="btn btn-primary">
                Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchForm;

