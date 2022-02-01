const fs = require("fs");
const path = require("path");

//1
fs.readdir(process.argv[2], function (err, files) {
  files.forEach((file) => {
    if (err) throw err;
    else if (path.extname(file) == "") {
      console.log(file + " --- " + "folder");
    } else {
      console.log(file + " --- " + "file");
    }
  });
});

// ↑  (OR)  ↓


//2
fs.readdir(process.argv[2], { withFileTypes: true }, function (err, allFiles) {
  if (err) throw err;
  const file = [];
  const directory = [];
  allFile.forEach((dirent) => {
    if (dirent.isDirectory()) {
      directory.push(dirent.name);
    } else {
      file.push(dirent.name);
    }
  });
 
  console.log("File are --- ");
  console.log(file);
  console.log("Directory are --- ");
  console.log(directory);
});



