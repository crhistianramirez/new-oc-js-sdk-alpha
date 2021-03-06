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
- ESM module available for bundlers that support it. This enables tree shaking - use only what you import.
- Built-in typescript support, no additional types package necessary
- Full feature parity with API
- Auto-generated [API reference](TODO:link-to-api-referencething)

> Coming from an older version? Check out the [migration guide](./readmes/MIGRATION_GUIDE.md) so you can upgrade to the latest and greatest.

## ⚙️ Installation

with npm:

```shell
npm install ordercloud-javascript-sdk --save
```

or

with yarn:

```shell
yarn add ordercloud-javascript-sdk
```

or

with CDN:

```html
<script src="https://unpkg.com/ordercloud-javascript-sdk/dist/index.js"></script>
```

Access SDK on `window.OrderCloud`

## ➕ Adding it to your project

### Using selective import

This is the preferred method of importing the sdk as it allows modern bundlers like webpack to tree shake the parts of the SDK that you aren't using, making your project more lean.

```javascript
import { Products } from 'ordercloud-javascript-sdk';
```

### Using import

```javascript
import OrderCloudSDK from 'ordercloud-javascript-sdk';
```

### Using require

```javascript
const OrderCloudSDK = require('ordercloud-javascript-sdk');
```

## 🔐 Authentication

We'll need to get a token before we can make any API calls. The platform offers five different ways of getting a token as part of the [Auth class](https://ordercloud-api.github.io/ordercloud-javascript-sdk/classes/auth.html).

We'll use the login method this example.

<!-- TODO: devcenter links will need to be updated -->
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
Me.ListProducts({filters: {'xp.Featured': true}})
  .then(productList => console.log(productList));
```

My orders submitted after April 20th, 2018

```javascript
Me.ListOrders( {filters: {DateSubmitted: '>2018-04-20'}})
  .then(orderList => console.log(orderList))
```

Users with the last name starting with Smith:

```javascript
Users.List('my-mock-buyerid', {filters: {LastName: 'Smith*'}})
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

Impersonation allows a seller user to make an API call on behalf of another user. The SDK enables this in two ways, each tackling different use cases.

The first method we'll talk about is best suited when you need to toggle between just two users during a session. You'll simply get an impersonation token, set it and then use the `As()` method available on every service to flag the SDK that you want to use the the stored token for that call.

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

As you can see this method makes it very easy to toggle between impersonated calls and non-impersonated calls. But what if you have more than two tokens to toggle between? To address that scenario we recommend using the optional `accessToken` parameter available as the last parameter on all sdk methods.

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

## Typescript Support

While typescript is not required to use this project (we compile it down to javascript for you), it does mean there are some added benefits for our typescript users.

### Strongly Typed xp

Extended properties, or xp, is a platform feature that allows you to extend the OrderCloud data model. This is modeled in the SDK using (by default) a typescript [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) type:

```typescript
const category: Category = {};
category.xp.Featured = true;
```

Even though `Featured` does not exist on the native model, the above code will compile and work just fine with the API. But you don't get any compile-time type-checking.

Alternatively, the SDK provides generic versions of all models that allow you to provide a custom xp type:

```typescript
interface MyCategoryXp {
  Featured?: boolean;
}

const category: Category<MyCategoryXp> = {};
category.xp.Featured = true; // strongly typed!
```

These custom models can then be used when calling any method in the SDK

```typescript
Categories.List<Category<MyCategoryXp>>('mock-catalog-id')
  .then(categoryList => {
    const firstCategory = categoryList.Items[0];
    const isFeatured = firstCategory.xp.Featured; // strongly typed!
  })
```

A common alternative to the above example is to first define a custom class that extends `Category<MyCategoryXp>`

```typescript
interface MyCategoryXp {
  Featured?: boolean;
}

interface MyCategory extends Category<MyCategoryXp> {

}

Categories.List<MyCategory>('mock-catalog-id')
  .then(categoryList => {
    const firstCategory = categoryList.Items[0];
    const isFeatured = firstCategory.xp.Featured; // strongly typed!
  })
```

This is nicer and especially preferable for models like `Order` which have many nested models each with their own `xp` fields that must be defined at the top level. For example: `Order<OrderXp, FromUserXp, BillingAddressXp>`. Declaring those 3 xp types once on a custom `MyOrder` class is far cleaner than declaring them on every call to `Orders.Get` or `Orders.List`.

## 📄 License

OrderCloud's Javascript SDK is an open-sourced software licensed under the [MIT license](./LICENSE).

## 🤝 Contributing

Check out our [Contributing](./readmes/CONTRIBUTING.md) guide.

## 🆘 Getting Help

If you're new to OrderCloud, exploring the [documentation](https://developer.ordercloud.io/documentation) is recommended, especially the [Intro to OrderCloud.io](https://developer.ordercloud.io/documentation/platform-guides/getting-started/introduction-to-ordercloud) and [Quick Start Guide](https://developer.ordercloud.io/documentation/platform-guides/getting-started/quick-start-guide). When you're ready to dive deeper, check out the [platform guides](https://developer.ordercloud.io/documentation/platform-guides) and [API reference](https://developer.ordercloud.io/documentation/api-reference).

For programming questions, please [ask](https://stackoverflow.com/questions/ask?tags=ordercloud) on Stack Overflow.

To report a bug or request a feature specific to the SDK, please open an [issue](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/new).
