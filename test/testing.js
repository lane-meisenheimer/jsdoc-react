const path = require('path');
const runJSDoc = require('../src/runJSDoc');

async function runTest() {
    const results = await runJSDoc({files: path.join(__dirname, './src')});
    console.log('\n\n Results are ', results);

    // const comments = jsdoc.explainSync({
    //     files: [path.join(__dirname, './src/Component.js'), path.join(__dirname, './src/AnotherComponent.js')],
    //     configure: path.join(__dirname, './config.json'),
    //     verbose: true
    // }).filter((doclet) => doclet.comment && doclet.comment.length > 0);
};

runTest().then(() => console.log('All Done'));