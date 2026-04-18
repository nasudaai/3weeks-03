import { readFileSync } from 'node:fs';

console.log(readFileSync);

const data = readFileSync("./sample.md");
console.log(data);
