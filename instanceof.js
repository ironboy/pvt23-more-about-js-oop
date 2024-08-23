class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, likesBones = true) {
    super(name);
    this.likesBones = likesBones;
  }
}

let lassie = new Dog('Lassie', true);

console.log('Is Lassie an animal?', lassie instanceof Animal);
console.log('Is Lassie a dog?', lassie instanceof Dog);
console.log('Which class is Lassie?', lassie.constructor.name);

let bengt = new Animal('Bengt')
console.log('Is Bengt an animal?', bengt instanceof Animal);
console.log('Is Bengt a dog?', bengt instanceof Dog);
console.log('Which class is Bengt?', bengt.constructor.name);