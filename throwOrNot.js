class Board {

  // ...

  makeMove(color, column) {
    // check validity of color
    if (color !== this.currentPlayer) { return false; }
    // check validity of column
    if (typeof column !== 'number') { return false; }
    if (column < 0 || column > 6) { return false; }

    // all is ok so change the board and return true;
    return true;
  }

}


class App {

  gameLoop() {
    let hasMadeSuccessfulMove = false
    while (!hasMadeSuccessfulMove) {
      let column = prompt('Vilken kolumn') - 1;
      hasMadeSuccessfulMove = board.makeMove(player.color, column);
    }
  }

}

// Advantage: We will actually get a specific error
// that we check during testing, and the could is more readable

class Board {

  // ...

  makeMove(color, column) {
    // check validity of color
    if (color !== this.currentPlayer) {
      throw new Error('Wrong color on player, not this players turn');
    }
    // check validity of column
    if (typeof column !== 'number') {
      throw new Error('The column must be a number');
    }
    if (column < 0 || column > 6) {
      throw new Error('The column must be a number between 0 and 6');
    }
  }

}

class App {

  gameLoop() {
    let hasMadeSuccessfulMove = true;
    while (!hasMadeSuccessfulMove) {
      let column = prompt('Vilken kolumn') - 1;
      try {
        board.makeMove(player.color, column);
      } catch (error) {
        hasMadeSuccessfulMove = false;
      }
    }
  }
}

