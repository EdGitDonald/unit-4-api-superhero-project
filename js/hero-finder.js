import { apiKey } from "./key.js";


async function getHero(getHero) {
    console.log("running");
    const url = `https://superhero-search.p.rapidapi.com/api/?hero=${getHero}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
    
	const response = await fetch(url, options);
   
	const result = await response.text();
    return result;
} catch (error) {
	console.error(error);
}
}

export {getHero};



