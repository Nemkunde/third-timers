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
