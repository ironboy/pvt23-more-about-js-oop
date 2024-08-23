class Patient {

  // A private property always starts with #
  // and can not be reached outside the instance methods
  #preliminaryDiagnos;

  constructor(firstName, lastName, pnr) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pnr = pnr;
  }

  makePreliminaryDiagnos(diagnos) {
    this.#preliminaryDiagnos = diagnos;
  }

  tellThePatientNextTime() {
    if (this.#preliminaryDiagnos === 'depressed') {
      let tell = 'You seemed a bit sad last time we spoke. How do you feel now?';
      let suggestedMedicine = this.#suggestMedicine();
      if (suggestedMedicine) {
        tell += `\nI've been thinking about starting you on ${suggestedMedicine}...`
      }
      return tell;
    }
    return 'How are you feeling today?';
  }

  #suggestMedicine() {
    if (this.#preliminaryDiagnos === 'depressed') {
      return 'Sobril';
    }
    return '';
  }

}

let martin = new Patient('Martin', 'Magnusson', '560712-4570');
// first visit
martin.makePreliminaryDiagnos('depressed');
// second visit
console.log(martin.tellThePatientNextTime());

// some other code outside the class tries to read the #preliminaryDiagnos property
// directly, this will throw an error
console.log(martin.#preliminaryDiagnos);

// some other code outside the class tries to call a private method
console.log(martin.#suggestMedicine());