# Netlify Test
[![Netlify Status](https://api.netlify.com/api/v1/badges/0113244a-f83d-46aa-bedd-e8a39eb20d70/deploy-status)](https://app.netlify.com/sites/jcd/deploys)

An example repo for React, Cypress, and Netlify.

## Requirements
- Yarn ^1.15.2
- Node ^11.13.0

## Getting Started
1. yarn install
1. yarn start
1. yarn cypress

## Deploy

Set up the [Cypress Dashbaord](https://www.cypress.io/dashboard/).

Replace the `projectId` in `cypress.json`.

Add the following environment variables to Netlify:

    CYPRESS_RECORD_KEY=<record key>

Use the following build command in Netlify:

    yarn predeploy
