const fs = require('fs');

// Define your file paths here
const files = ['./en.json', './es.json']

// Read contents and parse JSON
const filesWithKeys = files.map(f => ({
  name: f,
  content: JSON.parse(fs.readFileSync(f, 'utf8'))
}));

// Gather all the keys used in all files in one array
const allKeys = filesWithKeys.map(f => Object.keys(f.content)).flat();

// Find the missing keys by file
const missingKeysByFile = filesWithKeys.map(f => ({
  name: f.name,
  missingKeys: allKeys.filter(k => !(k in f.content))
})).filter(f => f.missingKeys.length > 0);


// Print the result
missingKeysByFile.forEach(f => {
  console.log(`FILE: ${f.name}`);
  f.missingKeys.forEach(mk => {
    console.log(`File "${f.name}" is missing key [ ${mk} ]`);
  })
});
