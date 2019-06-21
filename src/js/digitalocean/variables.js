var digitalocean = require('digitalocean');
var client = digitalocean.client('');


let dropletInfo = {
    "id": null,
};

module.exports = { client, dropletInfo }