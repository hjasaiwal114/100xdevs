/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    var arraysS = s.split('').sort();
    var arrayT = t.split('').sort();

    var sortedS = arrayS.join('');
    var sortedT = arrayT.join('');

    return sortedS == sortedT;
}