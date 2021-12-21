function getPlanets(url = 'https://swapi.dev/api/planets/', planets = []) {
    return new Promise((resolve, reject) => fetch(url)
        .then(response => {
            response.json().then(data => {
                planets = planets.concat(data.results);
                if(data.next) {
                    getPlanets(data.next, planets).then(resolve).catch(reject)
                } else {
                    resolve(planets);
                }
            }).catch(reject);
        }).catch(reject));
}

const planets = getPlanets();

export default planets;