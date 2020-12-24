const {goat: Goat, animal} = require('./goat')
console.log(Goat);
console.log(animal);
const g = new Goat('goatname');
g.meh();

const goat = new Goat('secondgoat');
goat.meh();
console.log(g.goatCount);
console.log(goat.goatCount);
