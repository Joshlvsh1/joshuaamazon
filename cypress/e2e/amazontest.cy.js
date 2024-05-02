describe('Amazon Test ', () => {


    it('passes', () => {
        
        cy.visit('https://www.amazon.co.uk/') 


       
    
        cy.get('#sp-cc-accept').should('be.visible') 
        cy.get('#sp-cc-accept').click()
        cy.get('#nav-link-accountList').click()
        
        cy.get('#ap_email').type("Josh.erhah@gmail.com")
        .should('have.value', 'Josh.erhah@gmail.com')

        cy.get('#continue').click()
        cy.get('#ap_password').type("Joshua79")
        cy.get('#signInSubmit').click()
        cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Hello, joshua') //assertion to confirm the login


        //Search For a product
        cy.get('#twotabsearchtextbox').type('Wireless Headphones')
        cy.get('#nav-search-submit-button').click()

        cy.get('.a-color-state.a-text-bold')
        .should('contain', 'Wireless Headphones') //assertion that product is on the page

        cy.get('img.s-image').eq(0).click(); // Click on the first matching image
        
        cy.get('#title')
        .should('contain', 'Bluetooth')

        cy.get('#add-to-cart-button').click()

        cy.get('#sw-subtotal-item-count')
        .should('contain', 'Basket Subtotal:') //ASSERTION that the checkout is displayed 

        cy.get('input[value="Proceed to checkout"]').click()
        
        cy.get('.a-spacing-base.a-spacing-top-micro')
        .should('contain', 'Order Summary') //assertion that address page is present

        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('07547921574')
        
        cy.get("#address-ui-widgets-enterAddressPostalCode").type('N1 5EJ')
        .should('have.value', 'N1 5EJ')

        cy.get('#address-ui-widgets-enterAddressLine1').type('14 Kinder house')
        

        cy.get('#address-ui-widgets-enterAddressCity').type('London')

        cy.get('#address-ui-widgets-enterAddressFormContainer')
        .should('contain', 'Add a new address')
        







        

         


    













       

       




        
    })
    


    





    
    
})
