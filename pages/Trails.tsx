
export default function Trails(trail){
    return (
        <div> 
        <h1>Trails</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">{trail.name}</h2>
            <p>{trail.description}</p>
            </div>
            <figure><img src={trail.url} alt="Trail" /></figure>
            </div>
            </div>
    )}

    // <button onClick={handleShowTrails}>Show Trails</button>
    // {showTrails && (
    //   <ul>
    //     {trails.map((trail) => (
    //       <li key={trail.id}>
    //         <Link href={{ pathname: '/trails', query: { trailId: trail.id } }}>
    //           {trail.name}
    //           {/* wanting to display name city, thumbnail */}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // )}