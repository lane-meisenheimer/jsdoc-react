const path = require('path');
const { exec } = require('child_process');
async function runJSDoc(options) {
    const sourceFiles = options.files || [];
    const config = options.config || path.join(__dirname, '../test/config.json');
    return new Promise ((res, rej) => {
        exec(`${path.join(__dirname, '../node_modules/.bin/')}jsdoc ${sourceFiles} -r --configure ${config} -X`, (err, stdout, stderr) => {
            if(err) return rej(err);

            console.log(stderr);
            res(stdout);
        });
    });
}

module.exports = runJSDoc;