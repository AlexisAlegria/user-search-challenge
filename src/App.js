import './App.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const baseURL = "https://randomuser.me/api/?results=15"

  const fetchUsers = async () => {
    await axios.get(baseURL)
      .then(response => {
        console.log(response.data.results);
        setUsers(response.data.results);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (query.length === 0) fetchUsers();
  }, [query])

  const handleChange = e => {
    setQuery(e.target.value)
    search(e.target.value)
  }

  const search = (data) => {
    var searchResults = users.filter((item) => {
      if (item.name.first.toString().toLowerCase().includes(data.toLowerCase())
        || item.name.last.toString().toLowerCase().includes(data.toLowerCase())
        || item.location.country.toString().toLowerCase().includes(data.toLowerCase())) {
        return data
      }
    });
    setUsers(searchResults);
  }

  const removeUser = (id) => {
    const filteredList = users.filter((e, index) => index !== id);
    console.log(id)
    console.log(filteredList)
    setUsers(filteredList);
  }

  return (
    <div className="App">
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

      <div className='container'>
        {users &&
          users.map((user, index) => (
            <div key={user.login.uuid} id={index} className="card">
              <div className="image-container">
                <div>
                  <img src={user.picture.large} className="card-img-top" alt="..." />
                </div>
                <div className="delete-btn">
                  <FontAwesomeIcon icon={faXmark} onClick={() => removeUser(index)} />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
                <p className="card-email">email: {user.email}</p>
                <p className="card-cell">cell number: {user.cell}</p>
                <p className="card-location">City: {user.location.city}</p>
                <p className="card-location">Country: {user.location.country}</p>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default App;