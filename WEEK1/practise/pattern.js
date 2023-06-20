function createPattern(numberOfRows) {
    for (var i = 0; i < numberOfRows; i++) {
      var stringToPrint = "";
      for (var j = 0; j < i + 1; j++) {
        stringToPrint = stringToPrint + "*"; // Add an asterisk (*) to the string
      }
      console.log(stringToPrint); // Print the string for each row
    }
  }
  
  createPattern(10);
  