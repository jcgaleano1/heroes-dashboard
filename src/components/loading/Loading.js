import React from 'react';
import './loading.css'

const Loading = () => {
  return (
    <div className="container">
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
        <h2>Loading...</h2>
      </div>

    </div>
  )
}

export default Loading