<<<<<<< Updated upstream
import React from "react";

function AdminBookPage() {
  const handleAddbtn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="adminBookPage-container">
      <input
        type="text"
        placeholder="Search query..."
        name="searchInput"
        autoComplete="off"
      ></input>
      <button type="submit" onClick={handleAddbtn}>
        Add new book
      </button>
      <table>
        <thead>
          <tr>
            <th>Books title</th>
            <th>Book author</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>2 left</td>
          </tr>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>2 left</td>
          </tr>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>2 left</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminBookPage;
=======
/*This file will render an admin view with all available book categories a search bar, a sign out button, and five different buttons for the order/action categories of the table: 
increment/decrement, order, edit and delete button. There will also be a tab for changing tables for user and book view.*/
import React from "react";

function adminBookPage() {
  return <div>adminBookPage</div>;
}

export default adminBookPage;
>>>>>>> Stashed changes
