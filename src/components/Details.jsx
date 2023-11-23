import React, {useState, useEffect} from "react";
import Loading from "./Loading";

export default function Details({info}) {
  const [user, setUser] = useState();
  
  /**
   * запрос на сервер для получения информации о пользователе
   */

  const getDetails = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${info[0].id}.json`)
    .then(response => response.json())
    .then(response => setUser(response))
    .catch(err => console.log(err));
  }
  
  useEffect(() => {
    getDetails()
  }, [info[0].id]);

  return (
    <>
      {user ? <div className="details">
                <img className="avatar" alt='avatar' src={user.avatar}></img>
                <div className="name">{user.name}</div>
                <div className="name">{user.details.city}</div>
                <div className="name">{user.details.company}</div>
                <div className="name">{user.details.position}</div>
              </div>
            : <Loading></Loading>}
    </>
  )
}
