const got = require('got')

class Orders {
  constructor (url) {
    this.url = url
    this.bearer = 'Bearer '
  }

  // order
  async createAnOrder (token, merchantId, body) {
    const response = await got.post(
      this.url + '/v3/merchants/' + merchantId + '/orders',
      {
        json: true,
        headers: {
          Authorization: this.bearer + token
        },
        body: body
      }
    )
    return response.body
  }

  async getASingleOrder (token, merchantId, orderId, expand) {
    const response = await got.get(
      this.url + '/v3/merchants/' + merchantId + '/orders/' + orderId,
      {
        json: true,
        headers: {
          Authorization: this.bearer + token
        },
        query: {
          expand: expand
        }
      }
    )
    return response.body
  }

  async deleteAnOrder (token, merchantId, orderId, body) {
    const response = await got.delete(
      this.url + '/v3/merchants/' + merchantId + '/orders/' + orderId,
      {
        json: true,
        headers: { Authorization: this.bearer + token },
        body: body
      }
    )
    return response.body
  }

  // line items
  async getAllLineItemsForAnOrder (token, merchantId, orderId, parameters) {
    const response = await got.get(
      this.url +
        '/v3/merchants/' +
        merchantId +
        '/orders/' +
        orderId +
        '/line_items',
      {
        json: true,
        headers: { Authorization: this.bearer + token },
        query: {
          expand: parameters.expand,
          limit: parameters.limit,
          offset: parameters.offset
        }
      }
    )
    return response.body
  }

  async createANewLineItem (token, merchantId, orderId, body) {
    const response = await got.post(
      this.url +
        '/v3/merchants/' +
        merchantId +
        '/orders/' +
        orderId +
        '/line_items',
      {
        json: true,
        headers: {
          Authorization: this.bearer + token
        },
        body: body
      }
    )
    return response.body
  }
}

module.exports = Orders
