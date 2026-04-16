const args = process.argv.slice(2);

function outString() {
  
  process.stdout.write("write" + "\n");
}

function reJson(arg) {
  
  const json = JSON.stringify(arg);
  return json;
}



function main() {
  console.log("main");

  const json = reJson(args);
  console.log(json);

  outString();
}

main();
