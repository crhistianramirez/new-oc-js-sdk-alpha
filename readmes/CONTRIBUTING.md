# Contributing to ordercloud-javascript-sdk

Hello! Thanks for your interest in contributing! Before implementing new features and changes please create an issue so we can have a discussion about it!

## ⌨ Writing code

Unlike many other libraries most of the code is not handwritten. We actually use [@ordercloud/oc-codegen](https://github.com/ordercloud-api/oc-codegen) to generate the code based on a set of templates located in `/codegen/`. This tool uses OrderCloud's OpenAPI specification along with the templates to generate the full SDK. That means most of your time should be spent in `/codegen/`. Any direct changes in `/src/` will simply be overwritten when you run `yarn generate` as one of the final pieces of the pull request process.

## ✨Submitting a pull request

1. Fork this repository
2. Create a new branch with the name of the feature you plan to work on
3. Install dependencies using [yarn](https://yarnpkg.com/en/)
4. Make your changes. Note: all of your changes should to be to the templates in `/codegen` and not directly to any of the files in `src/` as those files get overwritten when the code is generated.
5. Regenerate and build the sdk by running `yarn generate`
6. Verify your changes work as expected. Run `npm install /path/to/this/folder` in a different project to install locally and test
7. Update the [changelog](../CHANGELOG.md)
8. Update the sdk version in the [package.json](../package.json)
9. Commit your changes.
10. Create a pull request
