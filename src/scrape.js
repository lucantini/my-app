const fs = require('fs');
const scrape = require('styleguidist-scrapper');

scrape('http://localhost:6060').then(examples => {
    fs.writeFile('./examples-metadata.json', JSON.stringify(examples), 'utf8')
});
