function IndexCharacterSSR() {
    return (<h1>Loading...</h1>);
}

export async function getStaticProps( props ) {
    const res = await fetch(`https://swapi.dev/api/people/`)
    const data = await res.json();
    const countPeople = data.count;
    const randomPeople = Math.floor(Math.random() * countPeople );

    return {
        redirect: {
            destination: `star-wars/sw-character-dynamic/${randomPeople}`,
            permanent: true,
        },
    }
}

export default IndexCharacterSSR;