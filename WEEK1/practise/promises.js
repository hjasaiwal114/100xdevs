function getMedicine() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("1 Received")
            resolve();
        }, 1000);
    });
}

function getMedicine2() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("2 Recieved")
            resolve();
        }, 2000);
    });
}

getMedicine1()
.then(getMedicine2())