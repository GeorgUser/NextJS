function IndexCharacterSSG() {
    return (<h1>Loading...</h1>);
}

export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/people/`)
    const data = await res.json();
    const countPeople = data.count;
    const randomPeople = Math.floor(Math.random() * countPeople );

    return {
        redirect: {
            destination: `/sw-character-static/${randomPeople}`,
            permanent: false,
        },
    }
}

export default IndexCharacterSSG;