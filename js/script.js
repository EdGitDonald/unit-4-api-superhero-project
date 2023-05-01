import { getHero } from "./hero-finder.js";

const Hero = await getHero("Ironman");

 getHero("Ironman");

 console.log(Hero);

async function getHeroInfo(getHero){
    const Hero = await getHero("Ironman");
}