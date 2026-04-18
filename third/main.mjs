function outStr(arg) {

  if (typeof arg === "string") {
    console.log("string");
  }
  process.stdout.write(arg + "\n");
}

//outStr("str");

function main() {

  outStr("test main");
}

main();
