// import Link from "next/link";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import Weather from "@/components/weather";

// // export async function getServerSideProps() {
// //   const router = useRouter()
// //   const { id } = router.query
// //   const trailsRes = await fetch(`http://127.0.0.1:5555/trails/${id}`);
// //   const trailData = await trailsRes.text();
// //   // console.log('Trails Response:', trailsData);
// //   const trail = JSON.parse(trailData)

// //   return {
// //         props: {
// //           trail,
// //           // users
// //         },
// //       }
// //     }
// function Trail({ currUser }) {
//   const [trail, setTrail] = useState(null);
//   const router = useRouter();

//   const { id } = router.query;

//   useEffect(() => {
//     fetch(`/trails/${id}`)
//       .then((r) => r.json())
//       .then((trail) => {
//         setTrail(trail);
//         console.log(trail);
//       });
//   }, []);

//   if (!trail) {
//     return <div className="text-dblue">Loading.. </div>;
//   }

//   // const comments = trail.comments.map((comment)=>{
//   //   return (
//   //     <Comment comment = {comment} key = {comment.id}/>
//   // )}
//   // )
//   // do a fetch from trailbyid to get the object without having to pass down a trail from trails;

//   return (
//     <>
//       <p>Pid: {trail.name}</p>
//       <div className="flex flex-col w-full p-5">
//         <div className="grid h-80 card  rounded-box place-items-center overflow-hidden ">

//           <img src = {trail.thumbnail} alt = "thumby" className = "rounded-md"/>
//         </div>
//         <div className="divider p-5">{trail.name}</div>
//         <div className="grid h-60 card bg-base-300 rounded-box place-items-center p-5">
//           <p className = "p-3">{trail.description}</p>
//         </div>
//         <div className="divider p-5">Reviews</div>
//         <div className="grid card bg-base-300 rounded-box place-items-center p-5">This will be comments</div>
//         <div className="divider p-5">Reviews</div>
//         <Weather/>
//       </div>
//     </>
//   );
// }

// export default Trail;

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Weather from "@/components/weather";

// export async function getServerSideProps() {
//   const router = useRouter()
//   const { id } = router.query
//   const trailsRes = await fetch(`http://127.0.0.1:5555/trails/${id}`);
//   const trailData = await trailsRes.text();
//   // console.log('Trails Response:', trailsData);
//   const trail = JSON.parse(trailData)

//   return {
//         props: {
//           trail,
//           // users
//         },
//       }
//     }
function Trail({ currUser }) {
  const [trail, setTrail] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  function handleVotes() {
    let newvotes = trail.votes
    newvotes += 1;
    fetch(`/trails/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        votes: newvotes,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetch(`/trails/${id}`)
      .then((r) => r.json())
      .then((trail) => {
        setTrail(trail);
        console.log(trail);
      });
  }, []);

  if (!trail) {
    return <div className="text-dblue">Loading.. </div>;
  }

  // const comments = trail.comments.map((comment)=>{
  //   return (
  //     <Comment comment = {comment} key = {comment.id}/>
  // )}
  // )
  // do a fetch from trailbyid to get the object without having to pass down a trail from trails;

  return (
    <>
      <p>Pid: {trail.name}</p>
      <div className="flex flex-col w-full p-5">
        <div className="grid h-80 card  rounded-box place-items-center overflow-hidden ">
          <img src={trail.thumbnail} alt="thumby" className="rounded-md" />
        </div>
        <div className="divider p-5">
          {trail.name}
          <div className="badge badge-md">{trail.rating}</div>
          <button className="btn btn-outline btn-primary" onClick={handleVotes}>
            {trail.votes}
          </button>
        </div>
        <div className="grid h-60 card bg-base-300 rounded-box place-items-center p-5">
          <p className="p-3">{trail.description}</p>
        </div>
        <div className="divider p-5">Reviews</div>
        <div className="grid card bg-base-300 rounded-box place-items-center p-5">
          This will be comments
        </div>
        <div className="divider p-5">Weather</div>
        <div className="flex flex-col place-items-center w-full p-5">
          <Weather lat={trail.lat} lon={trail.lon} />
        </div>
      </div>
    </>
  );
}

export default Trail;
