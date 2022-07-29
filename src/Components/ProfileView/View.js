import React from "react";
import "./view.css";
function View({ people, setPeople }) {
  const handleDeleteClick = (index) => {
    const tempProfile = [...people];
    tempProfile.splice(index, 1);
    setPeople([...tempProfile]);
  };
  return (
    <div>
      <div className="table-title">
        <h1>Todos List</h1>
        <table class="styled-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Bio</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((item, index) => (
              <tr>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.email}</th>
                <th>{item.dateOfBirth}</th>
                <th>{item.bio}</th>
                <th>
                  <button
                    className="btn-update-delete"
                    type="submit"
                    onClick={(e) => {
                      // setId(item._id);
                      // handleClickOpen();
                    }}
                  >
                    Update
                  </button>
                </th>
                <th>
                  <button
                    className="btn-update-delete btn-todos-cancel-delete"
                    // type="submit"
                    onClick={() => handleDeleteClick(index)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
