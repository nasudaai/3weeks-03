const args = process.argv.slice(2);
function write() {
  process.stdout.write("test stdout\n");
}

function main() {

  console.log("main");
  console.log(args);
  write();
}

main();
