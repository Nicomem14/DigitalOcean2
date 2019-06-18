/* index.js */

var digitalocean = require('digitalocean');
var client = digitalocean.client('aace319c3767df1ff118047a243e8af52910f1a44dbf67b1780fd289f07b98c5');

const AccountStatusButton = document.getElementById('accountStatus').addEventListener('click', accountStatus);

function accountStatus() {
    client.account.get(function(err, account) {
        console.log(err); // null on success
        console.log(account); //
      });
}



function accountStatus() {
    client.droplets.list(function(page, perPage,) {
        console.log(page); // null on success
        console.log(perPage); //
      });
}