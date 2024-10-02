let heroes = [
  { name: "Yamcha", xp: 700 },
  { name: "Kuririn", xp: 1800 },
  { name: "Tenshinhan", xp: 3600 },
  { name: "Mestre Kame", xp: 6000 },
  { name: "Piccolo", xp: 7800 },
  { name: "Gohan", xp: 8500 },
  { name: "Vegeta", xp: 10000 },
  { name: "Goku", xp: 11000 },
];

for (let i = 0; i < heroes.length; i++) {
  let hero = heroes[i];
  let heroLevel;

  switch (true) {
    case hero.xp < 1000:
      heroLevel = "Ferro";
      break;

    case hero.xp <= 2000:
      heroLevel = "Bronze";
      break;

    case hero.xp <= 5000:
      heroLevel = "Prata";
      break;

    case hero.xp <= 7000:
      heroLevel = "Ouro";
      break;

    case hero.xp <= 8000:
      heroLevel = "Platina";
      break;

    case hero.xp <= 9000:
      heroLevel = "Ascendente";
      break;

    case hero.xp <= 10000:
      heroLevel = "Imortal";
      break;

    case hero.xp > 10000:
      heroLevel = "Radiante";
      break;
  }

  console.log(
    "O Herói de nome " + hero.name + " está no nível de " + heroLevel
  );
}
