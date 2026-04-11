const argv = process.argv;
//console.log(argv);

const args = argv.slice(2);
console.log(args)


function write(notString) {
  
  const json = JSON.stringify(notString);
  process.stdout.write("test\n");
  process.stdout.write(json + "\n");
}

function main() {
  write("string");
}

//write();


main();
