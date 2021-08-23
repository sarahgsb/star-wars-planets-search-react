const getPlanetsDatabase = async () => {
  const STAR_WARS_DATABASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const endpoint = await fetch(STAR_WARS_DATABASE_API);
  const result = await endpoint.json();
  return result.results;
};

export default getPlanetsDatabase;
