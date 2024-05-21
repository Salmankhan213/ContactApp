import React from 'react'

function Navbar() {
  return (
   <div className="container h-25 bg-white rounded-2 p-2 d-flex align-item-center justify-content-center mt-1">
    <div className="row">
      <div className="col-12 d-flex gap-1">
        <img src="/logos_firebase.svg" alt="logo" />
        <h5 className='fw-bold text-center'>Firebase Contact App</h5>
      </div>
    </div>
   </div>
  )
}

export default Navbar