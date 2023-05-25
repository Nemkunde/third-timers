//Search bar. User´s desire to search for a specific book.
export default function searchBar({placeholder, onChange}) {

    return(
        <input type="text" placeholder={placeholder} onChange={onChange} />
    )
}
