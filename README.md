# Mono Tray

[https://monoapp.io](https://monoapp.io)

## Download Latest

[macOS](https://google.com)

## Building & Installing

Run `yarn` (or `npm install`) to install dependencies.

## Running Application

Run `yarn start` (or `npm run start`) in one terminal window. This runs the webpack development server on port 8080.

Run `yarn electron:dev` (or `npm run electron:dev`) in another terminal window. This spins up the Electron instance.

## Profiling & Coverage

Running `yarn analyze` (or `npm run analyze`) will run Webpack Bundle Analyzer and automatically serve up the report files to investigate the bundle.

Running `yarn flow:coverage` (or `npm run flow:coverage`) will run the Flow Coverage tool and automatically serve up the report files to investigate Flow Type support per file of the application.

## API Server

This application requires that the [`mono-api`](https://github.com/andrerfneves/mono-api) server is running on port 3000.

This application also relies on the [Nomics API](https://p.nomics.com/cryptocurrency-bitcoin-api/) for fetching latest crypto market data. In order to access the API you need to get in touch with Nomics and request an API key. Once you have that you can simply create a `keys.js` file in the root of the this repository and add something like this:

```js
export const NOMICS_API_KEY = 'YOUR_API_KEY_GOES_HERE';
```
