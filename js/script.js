import { getHero } from "./hero-finder.js";

async function getHeroInfo() {
   const hero = await getHero("Spiderman");
   console.log(hero);

    const heroObject = {};
    console.log(hero?.appearance.eyeColor);
    if(hero?.appearance?.eyeColor){heroObject.eyeColor = hero.appearance.eyeColor}
    else{heroObject.eyeColor = "Not Available";}
    return heroObject;
}


const heroInfo = await getHeroInfo();

console.log(heroInfo.eyeColor);

