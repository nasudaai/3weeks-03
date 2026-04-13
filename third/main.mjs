const args = process.argv.slice(2);
console.log("test");

console.log(args);

function reJson(arg) {
  
  const json = JSON.stringify(arg);
  return json;
}

const json = reJson(args);
console.log(json);
