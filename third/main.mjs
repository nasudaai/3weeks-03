const cell = 45;

for (let i = 1; i <= 10; i++) {
  
  const total = cell * i;
  console.log(total);

  if (i === 10) {
    
    const sec = total % 60;
    const min = (total - sec) / 60;
    console.log(min, "m", sec, "s");
  }
}
