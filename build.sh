mkdir -p ./src/html/fr/files
cp ./src/files/* ./src/html/fr/files
node gen.js
npx parcel build  ./src/html/fr/index.html