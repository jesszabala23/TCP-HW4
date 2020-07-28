// write_stream.js

const fs = require('fs');

let userQuestions = fs.createWriteStream('userPassword.txt');

// write some data with a base64 encoding
userQuestions.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// the finish event is emitted when all data has been flushed from the stream
userQuestions.on('finish', () => {
    console.log('Thank You!');
});

// close the stream
userQuestions.end();