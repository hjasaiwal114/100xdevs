/**
 * @param {number} n 
 * @return {number}
 */
var sum1_to_100 = function(n){
    let sum = 0;
    for(let i = 1; i <= 100; i++ ){
        sum += i;
    }
    return sum;
}