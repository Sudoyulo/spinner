let time = 0;
let zero = 0;

let printout = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\"];

const interval = setInterval(() => {

  process.stdout.write(printout[zero]);
  zero = (zero + 1) % 7;

  if (time === 21) clearInterval(interval); //3 times
  time++;
},300);

interval;


// while (time < 3000) {

//   setTimeout(() => {
//     process.stdout.write(printout[zero]);

//     zero = (zero + 1) % 7;

//   }, time);

//   time += 300;

// }
