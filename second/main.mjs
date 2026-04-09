const argv = process.argv;
//console.log(argv);

const args = argv.slice(2);
console.log(args);

function reJson() {
  const data = JSON.stringify(args);
  return data;
}

function write() {
  process.stdout.write("test");
}

function main() {
  console.log("test");
  write();

  const data = reJson();
  process.stdout.write(data);
}

main();
