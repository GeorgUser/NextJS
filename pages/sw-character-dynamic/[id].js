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

export async function getServerSideProps({params}) {
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`);
    const character = await res.json();

    return {
        props: {character},
    }
}

export default Character;