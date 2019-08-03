# OrderCloud

The OrderCloud SDK for Javascript is a modern client library for building solutions targeting the [Ordercloud eCommerce API](https://developer.ordercloud.io/documentation). The SDK aims to greatly improve developer productivity and reduce errors.

- [Features](#✨-features)
- [Installation](#⚙️-installation)
- [Adding it to your project](#➕-adding-it-to-your-project)
  - [using import](#using-import)
  - [using selective import](#using-selective-import)
  - [using require](#using-require)
- [Authentication](#🔐-authentication)
- [Filtering](#🔍-filtering)
- [Impersonation](#👬-impersonation)
- [Typescript Support](#typescript-support)
- [License](#📄-license)
- [Contributing](#🤝-contributing)
- [Getting Help](#🆘-getting-help)

## ✨ Features

- Works both on the **browser** and **node.js**
- **UMD compatible** you can use it with any module loader
- ESM module available for bundlers that support it. This enables tree shaking. Use only what you import.
- Built-in typescript support, no additional types package necessary
- Full feature parity with API
- Auto-generated [API reference](TODO:link-to-api-referencething)

> Coming from an older version? Check out the [migration guide](./docs/MIGRATION_GUIDE.md) so you can upgrade to the latest and greatest.

## ⚙️ Installation

```shell
npm install ordercloud-javascript-sdk --save
```

or

```shell
yarn add ordercloud-javascript-sdk
```

## ➕ Adding it to your project

### Using import

```javascript
import OrderCloudSDK from 'ordercloud-javascript-sdk';
```

### Using selective import

This is the preferred method of importing the sdk as it allows modern bundlers like webpack to tree shake the code that you aren't using, making your project more lean.

```javascript
import { Products } from 'ordercloud-javascript-sdk';
```

### Using require

```javascript
const OrderCloudSDK = require('ordercloud-javascript-sdk');
```

## 🔐 Authentication

<!-- TODO: LINK TO AUTH CLASS CAN PROBS BE TO TYPEDOC -->
We'll need to get a token before we can make any API calls. The platform offers four different
[auth workflows](https://developer.ordercloud.io/documentation/platform-guides/authentication/oauth2-workflows)
all found under the [Auth class](https://github.com/ordercloud-api/OrderCloud-JavaScript-SDK/tree/master/src/api/Auth.ts).

We'll use the password-grant type for this example.

```javascript
import { Auth, Tokens } from 'ordercloud-javascript-sdk';

const username = 'YOUR_USERNAME'; //username of the user logging in
const password = 'YOUR_PASSWORD'; //password of the user logging in
const clientID = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; //clientID of the application the user is logging in to ([sign up for free](https://developer.ordercloud.io/account)
const scope = ['FullAccess']; //string array of [roles](https://developer.ordercloud.io/documentation/platform-guides/authentication/security-profiles) the application has access to

Auth.Login(username, password, clientID, scope)
  .then(response => {
      //store token, now any subsequent calls will automatically set this token in the headers for you
      const token = response.oauth2.accessToken;
      Tokens.SetAccess(token)
  })
  .catch(err => console.log(err));
```

## 🔍 Filtering

All of the [filtering options](https://developer.ordercloud.io/documentation/platform-guides/basic-api-features/filtering)  you love from the API are available through the SDK as well. Simply pass in a key/value pair to the filters object on list calls where the `key` is any top-level API model *or* a custom indexed xp value and the `value` is the value you'd like to filter on.

Let's run through a couple scenarios and what the call will look like with the SDK:

My products where `xp.Featured` is `true`

```javascript
Me.ListProducts({filters: {'xp.Featured': true})
  .then(productList => console.log(productList));
```

My orders submitted after April 20th, 2018

```javascript
Me.ListOrders( {filters: {DateSubmitted: '>2018-04-20'}})
  .then(orderList => console.log(orderList))
```

Users with the last name starting with Smith:

```javascript
Users.List('my-mock-buyerid', {filters: {LastName: 'Smith*'})
  .then(userList => console.log(userList));
```

Users with the last name starting with Smith *or* users with the last name *ending* with Jones

```javascript
Users.List('my-mock-buyerid', {filters: {LastName: 'Smith*|*Jones'}})
  .then(userList => console.log(userList));
```

Products where xp.Color is not red *and* not blue

```javascript
Products.List({filters: {'xp.Color': ['!red', '!blue']}})
    .then(productList => console.log(productList));
```

And of course you can mix and match filters to your heart's content.

## 👬 Impersonation

Impersonation allows a seller user to make an api call on behalf of another user. The SDK enables this in two different ways, both tackling different use cases.

The first method we'll talk about is best suited when you need to toggle between just two users during a session. You'll simply get an impersonation token, set it and then use the `As()` method available on every service to flag the SDK that you want to use the impersonated token instead of the access token.

```javascript
import { Tokens, Me } from 'ordercloud-javascript-sdk';

// set regular token
const myToken = 'YOUR_TOKEN';
Tokens.SetAccess(myToken);

// set impersonation token
const myImpersonationToken = 'YOUR_IMPERSONATED_TOKEN'
Tokens.SetImpersonation(myImpersonationToken);

// Get products for regular user
Me.As().ListProducts()
  .then(productList => console.log(productList))


// Get products for the impersonated user
Me.As().ListProducts()
  .then(impersonatedProductList => console.log(impersonatedProductList))
```

As you can see this method makes it very easy to toggle between impersonated calls and non-impersonated calls. But what if you have more than two tokens to toggle between? To address that scenario we recommend using the optional `accessToken` parameter available on all sdk methods.

```javascript
import { Me } from 'ordercloud-javascript-sdk';

var token1 = 'USER1_TOKEN';
var token2 = 'USER2_TOKEN';
var token3 = 'USER3_TOKEN';

// Get products for user 1
Me.ListProducts(null, token1)
  .then(user1ProductList => console.log(user1ProductList))

// Get products for user 2
Me.ListProducts(null, token2)
  .then(user2ProductList => console.log(user2ProductList))

// Get products for user 3
Me.ListProducts(null, token3)
  .then(user3ProductList => console.log(user3ProductList))
```

> Please note that the accessToken parameter will always be the last parameter.

## Typescript Support

While typescript is not required to use this project (we compile it down to javascript for you), it does mean there are some added benefits for our typescript users. Namely this project ships with **built-in** typescript typings so all request/response models are strongly typed.

## 📄 License

OrderCloud's Javascript SDK is an open-sourced software licensed under the [MIT license](./LICENSE).

## 🤝 Contributing

Check out our [Contributing](./docs/CONTRIBUTING.md) guide.

## 🆘 Getting Help

If you're new to OrderCloud, exploring the [documentation](https://developer.ordercloud.io/documentation) is recommended, especially the [Intro to OrderCloud.io](https://developer.ordercloud.io/documentation/platform-guides/getting-started/introduction-to-ordercloud) and [Quick Start Guide](https://developer.ordercloud.io/documentation/platform-guides/getting-started/quick-start-guide). When you're ready to dive deeper, check out the [platform guides](https://developer.ordercloud.io/documentation/platform-guides) and [API reference](https://developer.ordercloud.io/documentation/api-reference).

For programming questions, please [ask](https://stackoverflow.com/questions/ask?tags=ordercloud) on Stack Overflow.

To report a bug or request a feature specific to the SDK, please open an [issue](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/new).
