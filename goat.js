// class Goat {
//     static count = 0;
//     constructor(name) {
//         Goat.count += 1;
//         this.name= name;
//     }
//
//     meh() {
//         console.log(`The ${this.name} goat says mehhhhhh`);
//     }
//     get goatCount() {
//         return Goat.count;
//     }
// }

function Goat(name) {
    Goat.count += 1;
    this.name = name;
}

Goat.count = 0;

Goat.prototype.meh = function () {
    console.log(`The ${this.name} goat says mehhhhhh`);
}
Object.defineProperty(Goat.prototype, 'goatCount', {
    get() {
        return Goat.count
    }
})

function Animal() {
    console.log("Naiiii");
    this.a = 1;
}
Animal.age = 10;
module.exports.goat = Goat;
module.exports.animal = Animal;
