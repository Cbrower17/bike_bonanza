
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
function Trail({trail,currUser}) {
  const [trail, setTrail] = useEffect('')
  const router = useRouter()

  const { id } = router.query

  
  useEffect(() => {
    fetch(`/trails/${id}`)
      .then((r) => r.json())
      .then((trail) => {
        setAllPosts(posts);
      });
  }, [newLike]);

  // do a fetch from trailbyid to get the object without having to pass down a trail from trails;
  
  return (
    <p>Pid: {trail.name}</p>
    )
  }

export default Trail;

