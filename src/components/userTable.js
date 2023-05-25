//The admin view of the users table/info
export default function userTable(){
    fetch('http://10.0.0.16:3000/admin/users')
     .then(response => response.json())
     .then(data => {
        console.log(data);
     })
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
