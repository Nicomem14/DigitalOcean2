var digitalocean = require('digitalocean');
var client = digitalocean.client('');

getAllDroplets(function (allDroplets) {
  console.log(allDroplets.length);
});

const dropletsListIds = []
function getAllDroplets(callback, page, array) {
  client.droplets.list(page, function (err, droplets, _, response) {
    if (err) {
      return console.error('Error fetching pages', err);
    }
    for (let i = 0; i < droplets.length; i++) {
      dropletsListIds.push([droplets[i]["name"], droplets[i]["id"]])
    }
    console.log(dropletsListIds)
  });
};




let DropletData = {
  "name": "testapi",
  "region": "fra1",
  "size": "s-1vcpu-1gb",
  "image": "ubuntu-16-04-x64",
  "ssh_keys": [
    '25:1a:a7:22:8e:43:c8:32:41:68:78:02:a3:b8:fc:dd'
  ],
  "backups": false,
  "ipv6": false,
  "user_data": `#cloud-config
users:
 - name: demo
   ssh-authorized-keys:
     - ssh-rsa
   sudo: ['ALL=(ALL) NOPASSWD:ALL']
   groups: sudo
   shell: /bin/bash
runcmd:
 - sed -i -e '/^Port/s/^.*$/Port 4444/' /etc/ssh/sshd_config
 - sed -i -e '/^PermitRootLogin/s/^.*$/PermitRootLogin no/' /etc/ssh/sshd_config
 - sed -i -e '$aAllowUsers demo' /etc/ssh/sshd_config
 - restart ssh`,
  "private_networking": null,
  "volumes": null,
  "tags": [
    "testapi"
  ]
}

function createDroplet() {

  client.droplets.create(DropletData, (err, droplet) => {
    console.log(droplet["name"]);//
  }).then((droplet) => {
    return { "name": droplet["name"], "id": droplet["id"] }
  }).catch((err) => {
    console.error("FALLE", err);
  })
}


/** function createDroplet() {
  let pp = client.droplets.create(DropletData, funct).then(getDropletInfo).catch(errorCOntrol);
  console.log("pp", pp)
}

function funct(err, droplet) {
  console.log(droplet["name"]);//
}

function getDropletInfo(droplet) {
  return { "name": droplet["name"], "id": droplet["id"] }
}


function errorControl(err) {
  console.error("FALLE", err);
}
*/


createDroplet();
module.exports = {
  createDroplet, getAllDroplets
}