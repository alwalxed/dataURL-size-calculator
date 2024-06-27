import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateDataURLSize(dataUrl) {
  const base64String = dataUrl.split(',')[1];

  const binaryString = Buffer.from(base64String, 'base64').toString('binary');
  const sizeBytes = binaryString.length;

  const sizeKB = sizeBytes / 1000;
  const sizeMB = sizeBytes / 1000000;

  console.log(`Size: ${sizeMB.toFixed(2)}MB | ${sizeKB.toFixed(2)}KB`);
}

rl.question('Enter the Data URL: ', (answer) => {
  calculateDataURLSize(answer);
  rl.close();
});
