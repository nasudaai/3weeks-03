import { readFileSync } from 'node:fs';

console.log(readFileSync);

const buffer = readFileSync("./sample.md");
console.log(buffer)

const txt = readFileSync("./sample.md", "utf-8")
console.log(txt);
