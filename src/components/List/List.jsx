import React from 'react'
import "./List.scss"
import Girl from '../../assets/girl.png'

const List = () => {
  return (
    <div className='contact-list p-3'>
      <div className="container">

      <div className="list-group w-auto">
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
          <img src={Girl} alt="profile" width={50} height={50} />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className='row'>
              <h5 className="mb-0">Username</h5>
              <p className="mb-0 opacity-75">Phone Number</p>
            </div>
            <small className="opacity-50 text-nowrap">now</small>
          </div>
        </div>
      </div>
         
      </div>
    </div>
  )
}

export default List