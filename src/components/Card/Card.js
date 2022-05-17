import "./card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Card({users, setUsers}) {

    const removeUser = (id) => {
        const filteredList = users.filter((e, index) => index !== id);
        setUsers(filteredList);
    }

    return (
        <div className='container'>
        {users &&
          users.map((user, index) => (
            <div key={user.login.uuid} id={index} className="card">
              <div className="btn-container">
                <div className="delete-btn">
                  <FontAwesomeIcon icon={faXmark} onClick={() => removeUser(index)} />
                </div>
              </div>
              <div className="image-container">
                <div>
                  <img src={user.picture.large} className="card-img-top" alt="..." />
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

    )
}
