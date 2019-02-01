const fs = require('fs');

function rmDir(dirPath) {
    let files;
    try {files = fs.readdirSync(dirPath); }
    catch (e) { return; }
    if (files.length > 0)
        for (let i = 0; i < files.length; i++) {
            const filePath = dirPath + '/' + files[i];
            if (fs.statSync(filePath).isFile())
                fs.unlinkSync(filePath);
            else
                rmDir(filePath);
        }
    fs.rmdirSync(dirPath);
};

module.exports = {
    rmDir
}