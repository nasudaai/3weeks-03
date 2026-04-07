const argv = process.argv;
//console.log(argv);

const args = argv.slice(2);
console.log(args);

function write() {
  process.stdout.write("test");
}

function main() {
  console.log("test");
  write();
}

main();
