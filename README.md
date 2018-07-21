# Mono Tray

> Work in progress

## Installation

Run `yarn` to install dependencies

## Running Application

Run `yarn run dev` in one terminal window. This runs the webpack development server on port 8080.

Run `yarn run electron` in another terminal window.

## API Dependencies

This application requires that the `mono-api` server is running on port 3000. To learn more click here.

This application also relies on the Nomics API for fetching latest crypto market data. In order to access the API you need to get in touch with Nomics and request an API key. Once you have that you can simply create a `keys.js` file in the root of the this repository and add something like this:

```js
export const NOMICS_API_KEY = 'YOUR_API_KEY_GOES_HERE';
```

## Building
> Work in progress
