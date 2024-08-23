class PersonInTypeScript {

  name: string;
  age: number;
  friends: Person[] = [];
  pets: Pets[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  addFriend(newFriend: Person) {
    this.friends.push(newFriend);
  }

}

class Pets { }

let kalle = new PersonInTypeScript('Kalle', 27);
let annika = new PersonInTypeScript('Annika', 32);

kalle.addFriend(annika);