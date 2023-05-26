//The admin view of the users table/info
export default function userTable(){
    fetch('http://localhost:3001/library/books')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    // Hantera fel här
    console.error(error);
  });

    return(
        <table>
            <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Purchases</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>testens von testare</td>
                <td>TEST</td>
                <td>3 purchases</td>
                <td>
                <button>Promote</button>
                <button>Delete</button>
                </td>
            </tr>
        </table>
    )
}
