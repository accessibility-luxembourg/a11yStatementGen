mkdir -p ./dist/fr/files
mkdir -p ./dist/en/files
cp ./src/files/template-decla-fr.docx ./dist/fr/files
cp ./src/files/template-decla-en.docx ./dist/en/files
node gen.js
cp -r ./src/css ./dist/
cp -r ./src/js ./dist/
cp -r ./src/img ./dist/