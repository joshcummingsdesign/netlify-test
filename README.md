# Netlify Test
An example repo for React, Cypress, and Netlify.

## Requirements
- Yarn ^1.15.2
- Node ^11.13.0

## Getting Started
1. yarn install
1. yarn start
1. yarn cypress

## Deploy

Add the following environment variables to Netlify:

    CYPRESS_RECORD_KEY=<record key>

Use the following build command in Netlify:

    yarn audit && yarn predeploy
