


class DigitalOcean {
    static createDroplet() {
        client.droplets.create(dropletConfig, (err, droplet) => {
        }).then((droplet) => {
            dropletInfo = droplet
            getDropletInfo();
        }).catch((err) => {
            console.error("fail:", err)
        })
    }
}