import Link from "next/link";

export default function Trails(currUser) {
  return (
    <>
      <div>
        <h1>{currUser.name}</h1>
        <button className="btn glass">
          <Link href="/">home</Link>
        </button>
        <h1>Trails</h1>

        
      </div>
    </>
  );
}
{/* <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{trail.name}</h2>
            <p>{trail.description}</p>
          </div>
          <figure>
            <img src={trail.thumbnail} alt="TrailThumbnail" />
          </figure>
        </div> */}
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
