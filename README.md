# clover-rest-api

Clover Rest API for Node.js

It is **NOT** official NPM package from Clover. **For official documentation, please read [Clover V3 API Documentation](https://www.clover.com/api_docs/)**

[![npm version](https://badge.fury.io/js/clover-rest-api.svg)](https://badge.fury.io/js/clover-rest-api)
[![](https://img.shields.io/npm/dt/clover-rest-api.svg)](https://www.npmjs.com/package/clover-rest-api)
![issues](https://img.shields.io/github/issues/Menupedia/clover-rest-api.svg)
![starts](https://img.shields.io/github/stars/Menupedia/clover-rest-api.svg)
![License](https://img.shields.io/github/license/Menupedia/clover-rest-api.svg)

```
const CloverRestful = require('clover-rest-api')
const CloverClient = CloverRestful.client('https://apisandbox.dev.clover.com')

const cloverToken = 'xxxxxxxxxxxxxxxxxxxxx'
const merchantId = 'merchantIdXXXX'
const cloverInventories = (await CloverClient.inventory.getAllInventoryItems(
        cloverToken,
        merchantId,
        {
          limit: 1000,
          expand: 'categories'
        }
      )).elements
```

## Installation

```
$ npm install clover-rest-api
or
$ yarn add clover-rest-api
```

## Features

The project under developing now, so it just implements some APIs

### Inventory

`getAllInventoryItems (token, merchantId, parameters)`
[read more](https://www.clover.com/api_docs/#!/inventory/GetItems)
`parameters: filter, expand, limit, offset`

`getAllCategories (token, merchantId, parameters)`
[read more](https://www.clover.com/api_docs/#inventory_Categories)
`parameters: filter, expand, limit, offset`

### Orders

`createAnOrder (token, merchantId, body)`
[read more](https://www.clover.com/api_docs/#!/orders/CreateOrder)

`getASingleOrder (token, merchantId, orderId, expand)`

`deleteAnOrder (token, merchantId, orderId, body)`

`getAllLineItemsForAnOrder (token, merchantId, orderId, parameters)`
`parameters: expand, limit, offset`

`createAnOrder (token, merchantId, body)`
[read more](https://www.clover.com/api_docs/#!/orders/CreateLineItem)

## License

[MIT](https://github.com/Menupedia/clover-rest-api/blob/master/LICENSE)
