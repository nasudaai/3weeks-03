const keys = process.argv.slice(2);
console.log(keys);

const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = "value";
}

console.log(obj);
