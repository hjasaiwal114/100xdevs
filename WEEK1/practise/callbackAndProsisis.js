function printFile(err , data) {
    console.log("data");
}

fs.read("file.txt", printContent) // callback version
fs.read("file.txt").then(printCOntent) // Promise Version
