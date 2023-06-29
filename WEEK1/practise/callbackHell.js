setTimeout(function getMedicine1(){
    console.log("1 Received");
    setTimeout(function getMedicine2(){
        console.log("2 Received");
    }, 2000);
}, 1000)

// to much nesting, hard to read
