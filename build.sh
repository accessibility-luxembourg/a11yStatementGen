mkdir -p ./src/html/fr/files
mkdir -p ./src/html/en/files
cp ./src/files/template-decla-fr.docx ./src/html/fr/files
cp ./src/files/template-decla-en.docx ./src/html/en/files
node gen.js
npx parcel build  ./src/html/fr/index.html