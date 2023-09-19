/// <reference types="cypress" />

it('test_one',  () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()  //adding item to cart
    cy.get('.shopping_cart_badge').should('contain',1)    //checking if there is 1 item in cart
    cy.get('#item_0_title_link').click()        //opening another item
    cy.get('#add-to-cart-sauce-labs-bike-light').click() //adding second item
    cy.get('#shopping_cart_container').click()      //opening shopping cart
    cy.get('#remove-sauce-labs-backpack').click()   //removing first item
    cy.get('#item_0_title_link').should('contain', "Sauce Labs Bike Light")     //verifying that correct item is present
    cy.get('#checkout').click()     //going to checkout part
    cy.get('#first-name').type('SomeName')      //typing info
    cy.get('#last-name').type('someLastname')
    cy.get('#postal-code').type('123')          
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('.title').should('contain', 'Checkout: Complete!')       //verifying that checkout is completed successfully
    
})