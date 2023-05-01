import { apiKey } from "./key.js";

const url = 'https://superhero-search.p.rapidapi.com/api/?hero=Batman';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bcb8f4f1fcmshcb60e8931aa2ea5p131d48jsnb3a8b339e2c8',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}