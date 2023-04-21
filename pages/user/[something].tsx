import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'


function User({currUser}) {
  const [user, setTrail] = useState(null);
  const router = useRouter()
  
  const { something } = router.query
//   useEffect(() => {
//     fetch(`/users/${something}`)
//       .then((r) => r.json())
//       .then((trail) => {
//         setTrail(trail);
//         console.log(trail);
//       });
//   }, []);
  if (!currUser) {
    return <div className="text-dblue">Loading.. </div>;
  }
  return (
  <> 
  <p>Pid: {currUser.name}</p>
  <img className="mask mask-heart" src={currUser.profile_picture} />
  </>
  )
  }

export default User;
