import planets from '../../getPlanets';
import CustomLink from "../../components/CustomLink";

const Planet = ({planet, next}) => {
    return (
        <div className="planet">
            <h1>{planet.name}</h1>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Diameter:</strong> {planet.diameter}</p>
            <p><strong>Orbital period:</strong> {planet.orbital_period}</p>
            <p><strong>Rotation period:</strong> {planet.rotation_period}</p>
            <CustomLink href={next.url} isButton={true}>{next.name} </CustomLink>
        </div>
    )
}

export async function getStaticPaths() {
    let paths = [];

    await getStarWarsPlanets()
        .then(planets => {
            paths = planets.map((planet, i) => ({
                params: {
                    name: planet.name.toLowerCase(),
                },
            }))
        })
        .catch(console.error);

    return { paths, fallback: true }
}

export async function getServerSideProps({params}) {
    const data = await planets;
    let currentPlanet = null;

    let planet = data.filter((planet, i) => {
        if(planet.name.toLowerCase().replace(/\s+/g, '-') === params.name) {
            currentPlanet = i;
            return true;
        }
    });

    if(!planet.length) {
        return {
            redirect: {
                destination: `/`,
                permanent: true,
            },
        }
    }

    const nextPlanet = data[getRandomNumber(data.length, currentPlanet)];

    const nextPlanetName = nextPlanet.name;
    const next = {
        name: nextPlanetName,
        url: nextPlanetName.toLowerCase().replace(/\s+/g, '-'),
    }

    planet = planet[0];

    return {
        props: {planet, next},
    }
}

export default Planet;