import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
    return (
        <div className="search_chat has-search">
            <span className="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
            <input className="form-control chat_input ps-5" id="search-contacts" type="text" placeholder="Search Contacts" />
        </div>
    )
}

export default Search