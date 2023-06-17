console.log("Core Modules")

// Global and Non-Global Modules
console.log("Now we Learn about File System\n")

const fs = require('fs');


fs.writeFileSync("Hello2.txt","My Name is\n  Dipesh SAW")

// console.log("Your Directory is \n   ", __dirname)
// console.log("Your Filename is \n   ", __filename)

let Ram=[];
for(let i=0; i<108; i++){
    Ram[i]="Jai Shree Ram";
}
console.log(Ram);