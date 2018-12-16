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

  // line items
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
