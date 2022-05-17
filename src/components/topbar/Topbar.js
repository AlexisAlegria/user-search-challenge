import "./topbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({query, setQuery, users, setUsers}) {

    const handleChange = e => {
        setQuery(e.target.value)
        search(e.target.value)
    }

    const search = (data) => {
        var searchResults = users.filter((user) => {
            if (user.name.first
                .toString()
                .toLowerCase()
                .includes(data.toLowerCase()) ||
                user.name.last
                    .toString()
                    .toLowerCase()
                    .includes(data.toLowerCase()) ||
                user.location.country
                    .toString()
                    .toLowerCase()
                    .includes(data.toLowerCase())) {
                return data
            }
        });
        setUsers(searchResults);
    }

    return (
        <div className='topbar'>
            <h1>Perfiles de Usuario</h1>
            <div className="search-box">
                <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange} />
                <button className='btn'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>

    )
}
