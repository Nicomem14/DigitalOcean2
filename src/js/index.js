/* index.js */

var digitalocean = require('digitalocean');
var client = digitalocean.client('');

const AccountStatusButton = document.getElementById('accountStatus').addEventListener('click', accountStatus);

function accountStatus() {
  client.account.get(function (err, account) {
    console.log(err); // null on success
    console.log(account); //
  });
}



function accountStatus() {
  client.droplets.list(function (page, perPage, ) {
    console.log(page); // null on success
    console.log(perPage); //
  });
}