/// <reference types="Cypress" />

// Task 1: Steps to Automate
//  Automate the following steps in Cypress
//  1. Visit https://automationexercise.com/
//  2. Sign Up with all the required and non required fields (Date of Birth)
//  3. Select one product > Add it to the cart
//  4. From the cart > proceed to checkout
//  5. Add dummy payment data
//  6. Confirm placing the order

describe('Task 1', () => {
    it('Steps to Automate', () => {

        // Step 1: Visit https://automationexercise.com/
        cy.visit('https://automationexercise.com/')


        // Step 2: Sign Up with all the required and non required fields (Date of Birth)
        // Step 2.1: Click on 'Signup / Login'
        cy.contains('Signup / Login').click()

        // Step 2.1.1: Check if on `login` page
        cy.url().should('include', '/login')

        // Step 2.2: `New User Signup!` form
        cy.get('[data-qa="signup-name"]').type('Adam Jones')
        cy.get('[data-qa="signup-email"]').type('adamjones@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

        // Step 2.2.1: Check if on `signup` page
        cy.url().should('include', '/signup')

        // Step 2.3: `ENTER ACCOUNT INFORMATION` form
        cy.get('#id_gender1').click()
        cy.get('#password').type('18011990')
        cy.get('#days').select('18').invoke('val').should('eq', '18')
        cy.get('#months').select('January').invoke('val').should('eq', '1')
        cy.get('#years').select('1990').invoke('val').should('eq', '1990')
        cy.contains('Sign up for our newsletter!').click()
        cy.contains('Receive special offers from our partners!').click()
        cy.get('#first_name').type('Adam')
        cy.get('#last_name').type('Jones')
        cy.get('#company').type('The Amazing Company')
        cy.get('#address1').type('1725 New Creek Road')
        cy.get('#address2').type('4465 Bernardo Street')
        cy.get('#country').select('United States').invoke('val').should('eq', 'United States')
        cy.get('#state').type('Fort Wayne')
        cy.get('#city').type('Indiana')
        cy.get('#zipcode').type('46802')
        cy.get('#mobile_number').type('260-218-4334')
        cy.get('[data-qa="create-account"]').click()

        // Step 2.3.1: Check if on `account_created` page
        cy.url().should('include', '/account_created')

        // Step 2.4: Click on Continue
        cy.contains('Continue').click()

        // Step 2.4.1: Check if on `home` page
        cy.url().should('include', '')


        // Step 3: Select one product > Add it to the cart
        // Step 3.1: Click on Product 1
        cy.get('.features_items > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()

        // Step 3.3.1: Check if on `product_details` page
        cy.url().should('include', '/product_details')

        // Step 3.2: Click on Product 1
        cy.contains('Add to cart').click()


        // Step 4: From the cart > proceed to checkout
        // Step 4.1: Go to Cart
        cy.contains('View Cart').click()

        // Step 4.1.1: Check if on `view_cart` page
        cy.url().should('include', '/view_cart')

        // Step 4.2: Click on `Proceed To Checkout`
        cy.contains('Proceed To Checkout').click()

        // Step 4.2.1: Check if on `checkout` page
        cy.url().should('include', '/checkout')


        // Step 5: Add dummy payment data
        // Step 5.1: Place Order
        cy.contains('Place Order').click()

        // Step 5.1.1: Check if on `payment` page
        cy.url().should('include', '/payment')

        // Step 5.2: `Payment` form
        cy.get('[data-qa="name-on-card"').type('Adam Jones')
        cy.get('[data-qa="card-number"]').type('4192616418067024')
        cy.get('[data-qa="cvc"]').type('115')
        cy.get('[data-qa="expiry-month"]').type('1')
        cy.get('[data-qa="expiry-year"]').type('2026')
        cy.get('[data-qa="pay-button"]').click()


        // Step 6: Confirm placing the order
        cy.url().should('include', '/payment_done')
    })
})
