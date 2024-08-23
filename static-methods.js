class User {

  // All static properties and methods
  // are for the whole class - not for an instance
  // this inside a static method is the class

  static allUsers = [];

  static addUser(user) {
    this.allUsers.push(user);
  }

  static getUsers() {
    return this.allUsers;
  }

  // Normal, non-static properties and methods
  // are for an instance of the classs
  // this inside a non-static method is the instance of class

  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    // To reach a static method in a non-static method
    // use the class name
    User.addUser(this);
  }

  sayHi() {
    return `Hi I'm ${this.firstName} ${tihs.lastName} with the email ${this.email}!`;
  }

}

new User('Lars', 'Larssson', 'lasse@gmail.com');
new User('Anna', 'Andersson', 'anna@hotmail.com');
new User('Beatrice', 'Bengtsson', 'bea@restaurang.se');

// Everywhere where the User class is used if we export it so we can import it
// we can easily see all created users
console.log(User.getUsers());