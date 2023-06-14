/// <reference types = "Cypress"/>


describe('add an item and ignores the other one in sequence', () => {
    
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.log('Cache and cookies cleared');
        cy.reload()
      }); 



it('add an item and ignores the other one in sequence', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()  
   
    let allitems = 6;
    for (let i = 0; i < allitems; i++) {
        if (i%2==0) {
            cy.get('div#inventory_container').find(".btn").eq(i).click()   
        }
        else{
            console.log(i)

        }
    }

    


});



});