import {readFileSync} from "node:fs";

console.log(readFileSync);

const data = readFileSync('./example.json', 'utf-8');
console.log(data);
