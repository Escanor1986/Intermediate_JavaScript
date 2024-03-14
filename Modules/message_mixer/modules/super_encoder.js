// Import the encryptors functions here.
const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

// Define encodeMessage() to encrypt a message.
const encodeMessage = str => {
  // Use the encryptor functions here in the desired order.
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};

// Define decodeMessage() to decrypt a message.
const decodeMessage = str => {
  // Use the encryptor functions here in reverse order.
  return caesarCipher(symbolCipher(reverseCipher(str)), -6);
};

// User input / output.
const handleInput = userInput => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write(
  "Enter the message you would like to encrypt/decrypt...\n> "
);
process.stdin.on("data", handleInput);
