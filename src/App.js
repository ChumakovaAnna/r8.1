import './App.css';
import React, {useState, useEffect} from 'react';
import List from './components/List';
import Loading from './components/Loading'

function App() {
  const [data, setData] = useState();

  /**
 * Запрос на получение списка
 */
  const getList = () => {
    console.log('get')
    fetch(`${process.env.REACT_APP_SERVER_URL}/users.json`)
    .then(response => response.json())
    .then(response => setData(response))
    .then(console.log(data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getList()
  }, []);

  return (
    <div className='App'>
      <List data={data}></List>
      {/* <Loading></Loading> */}
    </div>
  );
}

export default App;
