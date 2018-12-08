const got = require('got')

class Inventory {
  constructor (url) {
    this.url = url
  }
  // item
  async getAllInventoryItems (token, merchantId, parameters) {
    // parameters: filter, expand, limit, offset
    const response = await got.get(
      this.url + '/v3/merchants/' + merchantId + '/items',
      {
        json: true,
        headers: {
          Authorization: 'Bearer ' + token
        },
        query: {
          filter: parameters.filter,
          expand: parameters.expand,
          limit: parameters.limit,
          offset: parameters.offset
        }
      }
    )
    return response.body
  }
  // category
  async getAllCategories (token, merchantId, parameters) {
    const response = await got.get(
      this.url + '/v3/merchants/' + merchantId + '/categories',
      {
        json: true,
        headers: {
          Authorization: 'Bearer ' + token
        },
        query: {
          filter: parameters.filter,
          expand: parameters.expand,
          limit: parameters.limit,
          offset: parameters.offset
        }
      }
    )
    return response.body
  }
}

module.exports = Inventory
