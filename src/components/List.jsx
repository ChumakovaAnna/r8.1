import React, {useEffect} from 'react'
import Loading from './Loading'

export default function List({data, setUser}) {
  let userId;
  /**
 * Обработчик клика на List
 */
const handleUserId = () => {
    const listUsers = document.querySelector('.list');
    listUsers.addEventListener('click', ({target}) => {
      if (target.id && data) {
        if (userId !== target.id) {
          userId = target.id
          const newUser = data.filter(item => item.id == userId)
          setUser(newUser)
        }
      }
    })
  }

  useEffect(() => {
    handleUserId()
  }, []);
  


  return (
    <>
      <ul className='list'>
        {data ? data.map((item) => <li className='list_li' key={item.id} id={item.id}>{item.name}</li>) : <Loading></Loading>}
      </ul>
    </>
  )
}
