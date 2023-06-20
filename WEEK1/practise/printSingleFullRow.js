function printSingleFullRow(n) {
    var str = "";
    for (var i = 0; i<n; i++) {
        str = str + "*";
    }
    console.log(str);
}
function partialRow(n) {
    var str = "";
    str = str + "*";
    for (var i = 0; i<n-2; i ++) {
        str = str + " ";
    }
    str = str = "*";
    console.log(str);

}

function starryPattern(n){
    printSingleFullRow(n);
    for (var i = 0; i < n-2; i++) {
        partialRow(n);
    }
    printSingleFullRow(n);

}

starryPattern(5);