import React, {useEffect} from 'react'
import Loading from './Loading'

export default function List({data}) {

  console.log(data)

  return (
    <ul className='list'>
      {data ? data.map(item => <li className='list_li'>{item.name}</li>) : <Loading></Loading>}
    </ul>
  )
}
