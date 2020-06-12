import React from "react"

function ResultList(props) {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <ul className="list-group">
            {props.results.map(result => (
              <li className="list-group-item" key={result}>
                <img alt={result.breed}
                  className="img-fluid" src={result} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResultList;

