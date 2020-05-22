import React from "react"
import {Link} from "@reach/router"

const Table = props => {
  return(
    <div className="container">
      <h2>These pets are looking for a good home</h2>
      <Link to="/pets/new">add a pet to the shelter</Link>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {props.list.map( (pet,i) => 
              <tr key={i}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/pets/${pet._id}`}>details</Link>
                   | 
                  <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>

  );
}

export default Table