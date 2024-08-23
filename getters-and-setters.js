class Person {

  #name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw error('The name must be a string');
    }
    if (value.length < 1) {
      throw error('The name must be at least 1 character long');
    }
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  set age(value) {
    if (value < 0) {
      throw new Error('Age can not be below 0');
    }
    if (value > 150) {
      throw new Error('Age can not be above 150');
    }
    this.#age = value;
  }

  get age() {
    return this.#age;
  }

  // no setter for this constructed property
  get nameAndAge() {
    return this.name + ' ' + this.age;
  }

}

let asa = new Person('Åsa', 150);
// asa.age++;  // This would throw an error because age would go above 150
let prince = new Person('Prince', 40);
// prince.name = ''; // This would throw an error because empty string are not allowed as names
console.log(prince.nameAndAge);
