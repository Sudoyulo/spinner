let time = 50;
let zero = 0;

let printout = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\"]

while (time < 3000) {

  setTimeout(() => {
    process.stdout.write(printout[zero]);

    zero = (zero + 1) % 7;

  }, time);

  time += 300;

}
