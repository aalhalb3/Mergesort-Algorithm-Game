function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
function makeArray(size, min=1, max=20) {
    const myArray = new Array(size);
    const usedNumbers = new Array(size);
    for (let i = 0; i < myArray.length; i++) {
      let newNumber = getRandomInt(min, max);
      for (let j = 0; j < usedNumbers.length; j++) {
        while (newNumber == usedNumbers[j]) {
          newNumber = getRandomInt(min, max);
          j = 0;
        }
      }
      usedNumbers[i] = newNumber;
      myArray[i] = newNumber;
    }
    return myArray;
}

  export default makeArray;