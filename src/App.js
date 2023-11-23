import './App.css';
import React, {useState, useEffect} from 'react';
import List from './components/List';
import Loading from './components/Loading'
import Details from './components/Details';

function App() {
  const [data, setData] = useState('');
  const [user, setUser] = useState('');
  /**
 * Запрос на получение списка
 */
  const getList = () => {
    // console.log('get')
    fetch(`${process.env.REACT_APP_SERVER_URL}/users.json`)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.log(err));
  }
  
  useEffect(() => {
    getList()
  }, []);

  return (
    <div className='App'>
      {data ? <List data={data} setUser={setUser}></List> : <Loading></Loading>}
      {user ? <Details info={user}></Details> : null}
    </div>
  );
}

export default App;
