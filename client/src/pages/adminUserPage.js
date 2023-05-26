/*This file will render an admin view with all available user categories a search bar, a sign out button and two buttons for promoting  or deleting a user.
There will also be a tab for changing tables for user and book view.*/
import SearchBar from "../components/searchBar"
import BooksTableBtn from "../components/booksTableBtn"
import UserTableBtn from "../components/userTableBtn"
import UserTable from "../components/userTable"
export default function adminUserPage() {
    return(
        <div>
            <SearchBar placeholder="Search by username..."/>
            <BooksTableBtn />
            <UserTableBtn />
            <UserTable />
        </div>
    )
}
