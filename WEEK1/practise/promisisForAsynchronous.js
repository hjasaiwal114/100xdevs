const fetchData = new Promise((resolve, reject) => {
    //  Simulating an asynchronous operation (eg , making an API request)
    setTimeout(() => {
        const data = { name: "Hiamnshu Jasaiwal", age: 25};
        // Simlating a succssful response
        resolve(data);
        // Simulating an error
        // reject("Failed to fetch data");
    }, 2000);
});

fetchData
    .then((result) => {
        console,log("Data fetched:", result);
        // Perform additional operations or return another promise
        // return someOtherAsyncOperation();
    })
    .catch((error) => {
        console.error("Error", error);
    });