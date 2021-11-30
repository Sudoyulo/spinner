process.stdout.write('hello from spinner1.js... \rheyyy\n');




setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);
