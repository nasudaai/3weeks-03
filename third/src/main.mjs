const args = process.argv.slice(2);
//console.log("test");

console.log(args);


function outString() {
  
  process.stdout.write("write" + "\n");
}

function reJson(arg) {
  
  const json = JSON.stringify(arg);
  return json;
}

const json = reJson(args);
console.log(json);

function main() {
  console.log("main");
  outString();
}

main();
