# README

## Required
- Ruby version 2.6.5
- Node v12+
- Yarn

## Set up
- Clone repo
- `bundle install`
  - if you're on Apple Silicon, run `gem install pg -v '0.18.4' -- --build-flags --with-cflags="-Wno-error=implicit-function-declaration"` to install PG w/ native extensions.
- Run migrations
- `mkdir -p tmp/pids/server`
- Create .env file (look at .env.sample) - copy app key/secret from the app page in our Partner dashboard

## Tricks
- If you see any yarn errors when running ruby code, running `spring stop` first might fix it. Also make sure the correct Node version is currently running in the console you're launching the server from: `node -v`
- To rebuild your local store front js file, just save a size chart.
- If your app UI doesn't load (there may be a 404 in the console to app.js) - run `bin/webpack`.

## Running locally
- run `foreman start` in console
- run `ngrok http 3000`
- run `./bin/webpack-dev-server`
- change the app redirect URL to the ngrok https URL, in the app settings
- install it on your dev shop from the app settings page
- enter the current ngrok domain in the `.env` file
- to see API endpoints, start a local rails server and visit http://localhost:3000/apipie


For adding from end packages, use `yarn add [package-name]`
