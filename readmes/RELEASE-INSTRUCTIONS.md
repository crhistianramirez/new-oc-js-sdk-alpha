# Releasing a new version of ordercloud-javascript-sdk

Assuming you've followed the instructions for [making a pull request](./CONTRIBUTING.md#submitting-a-pull-request) and are a maintainer you can follow these instructions to release a new version of the sdk.

## Checklist

1. Make sure the version in package.json is what you want the published version to be
2. Publish via npm
    - for pre-releases run `npm publish --tag next`
    - for normal releases run `npm publish`
3. Create and publish a new release on github
