const Inventory = require('./inventory')
const Orders = require('./orders')

class CloverClient {
  constructor (url) {
    this.url = url
    this._inventory = new Inventory(url)
    this._orders = new Orders(url)
  }
  get inventory () {
    return this._inventory
  }

  get orders () {
    return this._orders
  }
}

const newClient = url => {
  return new CloverClient(url)
}

module.exports = { client: newClient }
