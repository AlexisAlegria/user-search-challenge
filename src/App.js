import './App.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import Topbar from './components/topbar/Topbar';
import Card from './components/Card/Card'

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const baseURL = "https://randomuser.me/api/?results=15"

  const fetchUsers = async () => {
    await axios.get(baseURL)
      .then(response => {
        setUsers(response.data.results);
      }).catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    if (query.length === 0) fetchUsers();
  }, [query])

  return (
    <div className="App">
      <Topbar query={query} setQuery={setQuery} users={users} setUsers={setUsers} />
      <Card users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;