# Contributing to ordercloud-javascript-sdk

Hello! Thanks for your interest in contributing! Before implementing new features and changes please create an issue so we can have a discussion about it!

## ⌨ Writing code

Unlike many other libraries most of the code is not handwritten. We actually use [@ordercloud/oc-codegen](https://github.com/ordercloud-api/oc-codegen) to generate the code based on a set of templates located in `/codegen/`. This tool uses OrderCloud's OpenAPI specification along with the templates to generate the full SDK. That means most of your time should be spent in `/codegen/`. Any direct changes in `/src/` will simply be overwritten when you run `yarn build` as one of the final pieces of the pull request process.

## Template Data

The data that gets fed to the templates has the shape as defined on the [oc-codegen project](https://ordercloud-api.github.io/oc-codegen/interfaces/formattedspec.html) but sometimes its a little easier to see a more concrete version of that data

Running the following command will output the data to `templateData.json` at the root of the project.

```shell
yarn debug-template-data
```

## Generating the SDK

After updating the templates you can generate the code which will be output in the `src/` directory

```shell
yarn generate-sdk
```

## ✨ Submitting a pull request

1. Fork this repository
2. Create a new branch with the name of the feature you plan to work on
3. Install dependencies using [yarn](https://yarnpkg.com/en/)
4. Make your changes. Note: all of your changes should to be to the templates in `/codegen` and not directly to any of the files in `src/` as those files get overwritten when the code is generated.
5. Run `npm build` to regenerate the sdk, compile the code, run the tests, and generate the docs
6. Verify your changes work as expected. Run `npm install /path/to/this/folder` in a different project to install locally and test
7. Update the [changelog](../CHANGELOG.md)
8. Update the sdk version in the [package.json](../package.json)
9. Commit your changes. We adhere to the [gitmoji](https://github.com/carloscuesta/gitmoji/) standard
10. Create a pull request
11. Have a beer! 🍺

## 🚀 Releasing

Assuming you or a contributor followed the instructions for [submitting a pull request](#✨-submitting-a-pull-request) and are a maintainer you can follow these instructions to release a new version of the sdk.

1. Make sure the version in package.json adheres to [semantic versioning](https://semver.org/)
2. Publish on npm
   - for pre-releases run `npm publish --tag next`
   - for normal releases run `npm publish`
3. Create and publish a new release on github
4. Have a beer! 🍻
