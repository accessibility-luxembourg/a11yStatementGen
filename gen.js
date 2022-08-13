const fs = require('fs')
const ejs = require('ejs')
const config = require('./conf.json')
const outputPath = './src/html'


function renderToFile(data, title, file, name, prefix) {
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prefix: prefix}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}

// generate declaration form
prefix = '../..'
let declaPayload = {lang: config.lang, prefix: prefix, tpl: []};
config.lang.forEach(e => {
    declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
});
ejs.renderFile('./src/tpl/decla-form.ejs',declaPayload, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "Créez votre déclaration", outputPath+"/fr/index.html", "decla", prefix)
})
