// const folder = './icons/';
// const fs = require('fs');

// fs.readdir(folder, (err, files) => {
//   const icons = {};
//   const imports = [];

//   files.forEach((file) => {
//     const currency = file.split('.png')[0];
//     icons[currency.toUpperCase()] = `${currency}Image`;
//   });

//   files.forEach((file, index) => {
//     // Skip certain # of items if console.log won't print
//     if (index < 225) return;

//     const currency = file.split('.png')[0];
//     imports.push(`import ${currency}Image from '../assets/icons/${file}';`);
//   });

//   // Exports the icon constants
//   console.log(icons);

//   // Exports the import statements
//   console.log(imports);
// });
