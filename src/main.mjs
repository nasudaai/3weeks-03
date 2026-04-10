const argv = process.argv;
//console.log(argv);

const args = argv.slice(2);
console.log(args)


function write() {
  process.stdout.write("test\n");
}

function main() {
  write();
}

write();


main();
