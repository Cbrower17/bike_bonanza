import React from 'react'


function index(trail) {
    console.log(trail)
  return (
    <div> 
        <h1>Trails</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">{trail.name}</h2>
            <p>{trail.description}</p>
            </div>
            <figure><img src={trail.thumbnail} alt="Trail" /></figure>
        </div>
    </div>
  )
}

export default index