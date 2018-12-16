# clover-rest-api

Clover Rest API for Node.js

[![npm version](https://badge.fury.io/js/clover-rest-api.svg)](https://badge.fury.io/js/clover-rest-api)
![issues](https://img.shields.io/github/issues/Menupedia/clover-rest-api.svg)
![starts](https://img.shields.io/github/stars/Menupedia/clover-rest-api.svg)
![License](https://img.shields.io/github/license/Menupedia/clover-rest-api.svg)

It is **NOT** official NPM package from Clover. **For official documentation, please read [Clover V3 API Documentation](https://www.clover.com/api_docs/)**

The project under developing now, so it just implements some APIs

Example:

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

```
parameters: filter, expand, limit, offset
```

## Inventory

`getAllInventoryItems (token, merchantId, parameters)`
[read more](https://www.clover.com/api_docs/#!/inventory/GetItems)

`getAllCategories (token, merchantId, parameters)`
[read more](https://www.clover.com/api_docs/#inventory_Categories)

## Orders

`createAnOrder (token, merchantId, body)`
[read more](https://www.clover.com/api_docs/#!/orders/CreateOrder)

`createAnOrder (token, merchantId, body)`
[read more](https://www.clover.com/api_docs/#!/orders/CreateLineItem)
