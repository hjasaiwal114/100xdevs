function logResponsBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody)
}

var senObj = {
    method: "GET"
};

fetch("" , sendObj).then(callbackFn)
