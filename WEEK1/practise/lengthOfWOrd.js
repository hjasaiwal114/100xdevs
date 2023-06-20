/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trimmedString = s.trim()
    var wordsArray = trimmedString.split(" ");
    var lastWord = wordsArray[wordsArray.length - 1];
    return lastWord.length;
    
};