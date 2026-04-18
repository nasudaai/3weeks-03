const arg = process.argv[2];

function outStr(arg) {

  if (typeof arg === "string") {
    console.log("string");
  } else {
    console.log("not string");

    return;
  }
  process.stdout.write(arg + "\n");
}

//outStr("str");

function main() {

  outStr("test main");
  outStr([1, 2, 3]);
  outStr(arg);
}

main();
