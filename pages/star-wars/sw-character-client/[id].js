import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Character = () => {
    const [character, setCharacter] = useState(null);
    const [load, setLoad] = useState(true);
    const {query} = useRouter();

    useEffect(async  () => {
        const res = await fetch(`https://swapi.dev/api/people/${query.id}`);
        const data = await res.json();
        setCharacter(data);
        setLoad(false);
    }, [load]);

    return (
        load ? (<h1>Loading...</h1>) :
            (<div  className="planet">
            <h1>{character.name}</h1>
            <p><strong>Eye color:</strong> {character.eye_color}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Hair color:</strong> {character.hair_color}</p>
            <p><strong>Height:</strong> {character.height}</p>
            <p><strong>Mass:</strong> {character.mass}</p>
            <p><strong>Skin color:</strong> {character.skin_color}</p>
        </div>)
    )
}

export default Character;