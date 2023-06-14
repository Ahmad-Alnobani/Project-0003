/// <reference types = "Cypress"/>


describe('ADD ALL ITEM TO CART', () => {
    
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.log('Cache and cookies cleared');
        cy.reload()
      }); 


// it('TO ADD ALL ITEM TO CART', () => {
//     cy.visit("https://www.saucedemo.com/")
//     cy.get('[data-test="username"]').type("standard_user")
//     cy.get('[data-test="password"]').type("secret_sauce")
//     cy.get('[data-test="login-button"]').click()  
//     cy.get('div#inventory_container').find(".btn").eq(3).click()
// });



it('TO ADD ALL ITEM TO CART', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()  
   
    let allitems = 6;
    for (let i = 0; i < allitems; i++) {
        cy.get('div#inventory_container').find(".btn").eq(i).click()  
        
    }




});



});