const fs = require('fs')
const ejs = require('ejs')
const y18n = require('y18n')
const outputPath = './src/html'


const langs = ['fr', 'en']
const config = {}
config['fr'] = require('./config_fr.json')
config['en'] = require('./config_en.json')

function renderToFile(data, title, file, name, prefix, lang, __) {
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, lang: lang, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prefix: prefix, '__': __}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}

// generate declaration form
prefix = '../..'

langs.forEach(lang => {
    // generate declaration form
    let declaPayload = {langs: config[lang].declaLangs, prefix, tpl: []}
    config[lang].declaLangs.forEach(e => {
        declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
    });
    const __ = y18n({locale: lang, directory: './locales'}).__;
    declaPayload['__'] = __
    ejs.renderFile('./src/tpl/decla-form.ejs',declaPayload, function(err, str) {
        if (err !== null) {
            console.log(err)
        }
        renderToFile(str, __("Create your statement"), outputPath+"/"+lang+"/index.html", "decla", prefix, lang, __)
    })    
})

