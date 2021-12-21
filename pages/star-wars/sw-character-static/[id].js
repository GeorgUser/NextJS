const Character = ({character}) => {
    return (
        <div className="planet">
            <h1>{character.name}</h1>
            <p><strong>Eye color:</strong> {character.eye_color}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Hair color:</strong> {character.hair_color}</p>
            <p><strong>Height:</strong> {character.height}</p>
            <p><strong>Mass:</strong> {character.mass}</p>
            <p><strong>Skin color:</strong> {character.skin_color}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();

    const paths = [];

    for(let i = 1; i < data.count; i++) {
        paths.push({
            params: { id: i.toString() },
        })
    }

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`);
    const character = await res.json();

    return {
        props: {character},
    }
}

export default Character;