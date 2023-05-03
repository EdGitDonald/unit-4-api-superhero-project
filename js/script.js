import { getHero } from "./hero-finder.js";

let heroName = "Ironman";

async function getHeroInfo(getHeroString) {
   const hero = await getHero(getHeroString);
   console.log(hero);

    const heroObject = {};

    if(hero?.appearance?.eyeColor){heroObject.eyeColor = hero.appearance.eyeColor}
    else{heroObject.eyeColor = "Not Available";}

    if(hero?.appearance?.gender){heroObject.gender = hero.appearance.gender}
    else{heroObject.gender = "Not Available";}

    if(hero?.appearance?.height){heroObject.height = hero.appearance.height}
    else{heroObject.height = "Not Available";}

    if(hero?.appearance?.race){heroObject.race = hero.appearance.race}
    else{heroObject.race = "Not Available";}

    if(hero?.appearance?.weight){heroObject.weight = hero.appearance.weight}
    else{heroObject.weight = "Not Available";}

    if(hero?.appearance?.height){heroObject.height = hero.appearance.height[0] + " " + hero.appearance.height[1]}
    else {heroObject.height = "Not Available";}
    
    if(hero?.biography?.alignment){heroObject.alignment = hero.biography.alignment}
    else{heroObject.alignment = "Not Available";}

    if(hero?.biography?.alterEgos){heroObject.alterEgos = hero.biography.alterEgos}
    else{heroObject.alterEgos = "Not Available";}

    if(hero?.biography?.fullName){heroObject.fullName = hero.biography.fullName}
    else{heroObject.fullName = "Not Available";}

    if(hero?.biography?.aliases){heroObject.aliases = hero.biography.aliases}
    else{heroObject.fullName = "Not Available";}

    if(hero?.biography?.placeOfBirth){heroObject.placeOfBirth = hero.biography.placeOfBirth}
    else{heroObject.placeOfBirth = "Not Available";}

    if(hero?.connections?.relatives){heroObject.relatives = hero.connections.relatives}
    else{heroObject.relatives = "Not Available";}

    if(hero?.images?.md){heroObject.md = hero.images.md}
    else{heroObject.md = "Not Available";}

    if(hero?.powerstats?.intelligence){heroObject.intelligence = hero.powerstats.intelligence}
    else{heroObject.intelligence = "Not Available";}

    if(hero?.powerstats?.strength){heroObject.strength = hero.powerstats.strength}
    else{heroObject.strength = "Not Available";}

    if(hero?.powerstats?.speed){heroObject.speed = hero.powerstats.speed}
    else{heroObject.speed = "Not Available";}

    if(hero?.powerstats?.durability){heroObject.durability = hero.powerstats.durability}
    else{heroObject.durability = "Not Available";}

    if(hero?.powerstats?.power){heroObject.power = hero.powerstats.power}
    else{heroObject.power = "Not Available";}

    if(hero?.powerstats?.combat){heroObject.combat = hero.powerstats.combat}
    else{heroObject.combat = "Not Available";}

    if(hero?.powerstats?.combat){heroObject.combat = hero.powerstats.combat}
    else{heroObject.combat = "Not Available";}

    if(hero?.work?.occupation){heroObject.occupation = hero.work.occupation}
    else{heroObject.occupation = "Not Available";}

    console.log(heroObject);
    return heroObject;  
}


/*how to access data from heroObject;*/
// console.log(heroInfo.eyeColor);

// references to DOM nodes
const heroImg = document.querySelector("#hero-img img");
// Appearance ref
const name = document.getElementById("fullName");
const race = document.getElementById("race");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const eyecolor = document.getElementById("eyeColor");
const gender = document.getElementById("gender");
// hero-extras ref
const alterEgos = document.getElementById("alter-egos");
const alignment = document.getElementById("alignment");
const placeOfBirth = document.getElementById("place-of-birth");
const occupation = document.getElementById("occupation");
const relatives = document.getElementById("relatives");
// hero power stats ref
const power = document.getElementById("power");
const durability = document.getElementById("durability");
const combat = document.getElementById("speed");
const strength = document.getElementById("strength");
const intelligence = document.getElementById("intelligence");

// access all data within getHeroInfo
const heroInfo = await getHeroInfo(heroName);
    setImgSrc(heroImg, heroInfo.md);
    setHeroApp(heroInfo);
    setHeroExtras(heroInfo);
    setHeroStats(heroInfo);

function setImgSrc(imgRef, imgSrc) {
    imgRef.setAttribute("src", imgSrc);
}

function setHeroApp(heroInfo) {
    name.innerText = `NAME: ${heroInfo.fullName}`;
    race.innerText = `RACE: ${heroInfo.race}`;
    weight.innerText = `WEIGHT: ${heroInfo.weight}`;
    gender.innerText = `GENDER: ${heroInfo.gender}`;
    eyecolor.innerText = `EYECOLOR: ${heroInfo.eyeColor}`;
    height.innerText = `HEIGHT: ${heroInfo.height}`;
}

function setHeroExtras(heroInfo){
    alterEgos.innerText = `ALTEREGOS: ${heroInfo.alterEgos}`;
    alignment.innerText = `ALIGNMENT: ${heroInfo.alignment}`;
    placeOfBirth.innerText = `PLACE OF BIRTH: ${heroInfo.placeOfBirth}`;
    occupation.innerText = `OCCUPATION: ${heroInfo.occupation}`;
    relatives.innerText = `RELATIVES: ${heroInfo.relatives}`;
}

function setHeroStats(heroInfo){
    power.innerText = `POWER: ${heroInfo.power}`;
    durability.innerText = `DURABILITY: ${heroInfo.durability}`;
    combat.innerText = `COMBAT: ${heroInfo.combat}`;
    strength.innerText = `STRENGTH: ${heroInfo.strength}`;
    intelligence.innerText = `INTELLIGENCE: ${heroInfo.intelligence}`;
}

function setText(el, text){
    el.innerText = text;
}

 const heroInput = document.getElementById("hero-input");
 const getHeroBtn = document.getElementById("get-hero");

 heroInput.addEventListener("change", function (e) {
    heroName = e.target.value;
 });

 getHeroBtn.addEventListener("click", async function () {
     const heroInfo = await getHeroInfo(heroName);
     console.log(heroInfo);
     setImgSrc(heroImg, heroInfo.md);
     setHeroApp(heroInfo);
     setHeroExtras(heroInfo);
     setHeroStats(heroInfo);
 });



//setText(name, heroInfo.fullName);
//.then((json) => heroImg.setAttribute("src", heroInfo.md));


