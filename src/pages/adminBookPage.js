/*This file will render an admin view with all available book categories a search bar, a sign out button, and five different buttons for the order/action categories of the table: 
increment/decrement, order, edit and delete button. There will also be a tab for changing tables for user and book view.*/
import React from "react";

//Only hardcoding the static data for structure.
function adminBookPage() {
  return (
    <div className="adminBookPage-container">
      <input type="text" placeholder="Search query..."></input>
      <button type="submit">Add new book</button>
      <table>
        <thead>
          <tr>
            <th>Books title</th>
            <th>Book author</th>
            <th>availability</th>
          </tr>
        </thead>
        <tbody>
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

export default adminBookPage;
