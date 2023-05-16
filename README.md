# Cypress Exercises
A repository containing all of my cypress exercises

## Table of Contents
- [About](#about)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)

## About
[`cypress/e2e/exercise-1.cy.js`](https://github.com/wasique-sh/cypress-exercises/blob/master/cypress/e2e/exercise-1.cy.js) Automates the following steps in Cypress:
1. Visit https://automationexercise.com/
2. Sign Up with all the required and non required fields (Date of Birth)
3. Select one product > Add it to the cart
4. From the cart > proceed to checkout
5. Add dummy payment data
6. Confirm placing the order


## Dependencies
- [Yarn](https://github.com/yarnpkg/berry)

## Installation
```sh
git clone https://github.com/wasique-sh/cypress-exercises.git
cd cypress-exercises
yarn install
```
## Usage
```sh
yarn run cypress open
```
**Cypress**
- Click `E2E Testing`
- Choose browser and click `Start E2E Testing`
- Open `exercise-1.cy.js` E2E spec inside the Specs sidebar
