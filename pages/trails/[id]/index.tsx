import { useRouter } from "next/router";

const getStaticPaths = async () =>{
    const res = await fetch('http://127.0.0.1:5555/trails')
    const data = await res.json();

    const paths = data.map(trails => {
        return {
            params: {id: trails.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:5555/trails' + id);
    const data = await res.json();

    return {
        props:{trail: data}
    }
}

const Details = ({}) => {
    const router = useRouter()
    const {id} = router.query
    
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
}

export default Details;