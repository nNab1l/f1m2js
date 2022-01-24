const kat = {
    leeftijd: 9,
    geslacht: "man",
    lengte: 1.10,
    eten: ["kattenvoer", "brood", "cake"],
    honger: false,
    foto: ["https://placekitten.com/400/300","img/287.jfif", "https://placekitten.com/401/300",]
}

console.log(kat.leeftijd);
console.log(kat.geslacht);
console.log(kat.lengte);
console.log(kat.eten);
console.log(kat.honger);
console.log(kat.eten[1]);
console.log(kat.foto[2]);

const catImage = document.getElementById('mycatImage');
catImage.src = kat.foto;


const cat1 = {
    naam: "Kitty",
    geslacht: "V",
    leeftijd: 1,
    afbeelding: "https://placekitten.com/400/300",
}
const cat2 = {
    naam: "Boris",
    geslacht: "M",
    leeftijd: 2,
    afbeelding: "https://placekitten.com/401/300",
}
const cat3 = {
    naam: "Dexter",
    geslacht: "M",
    leeftijd: 7,
    afbeelding: "https://placekitten.com/402/300",
}
const cat4 = {
    naam: "Neeltje",
    geslacht: "V",
    leeftijd: 6,
    afbeelding: "https://placekitten.com/403/300",
}

