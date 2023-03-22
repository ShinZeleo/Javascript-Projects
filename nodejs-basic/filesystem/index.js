// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs');

const notes = fs.readFileSync('text.txt', 'utf-8');
console.log(notes); //code sendiri



// try {
//     const notes = fs.readFileSync('text.txt', 'utf-8');
//     console.log(notes);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   } //chatGpt

