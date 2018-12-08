const Inventory = require('./inventory')

class CloverClient {
  constructor (url) {
    this.url = url
    this._inventory = new Inventory(url)
  }
  get inventory () {
    return this._inventory
  }
}

const newClient = url => {
  return new CloverClient(url)
}

module.exports = { client: newClient }
