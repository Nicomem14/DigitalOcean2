import {client} from './variables.js'

// Define Droplet Config
let dropletConfig = {
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

// Define Object to save ID and name of Droplet

let dropletInfo = {
    "name": null,
    "id": null,
    "ip": null,
    "status": null,
};

//Create the Droplet and assign variables on dropletInfo
function createDroplet() {
  client.droplets.create(dropletConfig, (err, droplet) => {
  }).then((droplet) => {
    dropletInfo["id"] = droplet["id"]
    getDropletInfo();
  }).catch((err) => {
    console.error("fail:", err)
  })
}
function getDropletInfo() {
    client.droplets.get(dropletInfo["id"],(err, droplet) => {        
    }).then((droplet) => {
        console.log("Este es el Droplet creado:", droplet)
        dropletInfo["name"] = droplet["name"]
        dropletInfo["ip"] = droplet["networks"]["v4"][0]["ip_address"]
        dropletInfo["status"] = droplet["status"] 
    }).catch((err) => {
        console.error("fail getDropletInfo:", err)
    })
}


createDroplet();
console.log(dropletInfo)