import React from "react";
import img from '../image/loading.gif'

export default function Loading() {
  return (
    <div className="loading">
      <img className='loading_img' src={img} alt="loading"></img>
    </div>
  )
}
