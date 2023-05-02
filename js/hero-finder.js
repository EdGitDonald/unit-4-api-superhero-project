import { apiKey } from "./key.js";


async function getHero(hero) {
    console.log("running");
    const url = `https://superhero-search.p.rapidapi.com/api/?hero=${hero}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
    
	const response = await fetch(url, options);
   
	const result = await response.json();
    return result;
} catch (error) {
	console.error(error);
}
}

export { getHero };



