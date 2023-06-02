describe('land page' , () => {

    it('visit home' , () => {
        cy.visit("http://localhost:3000/");
    })

    it('should have title as muzix app' , () => {
        cy.get('.appname').contains('MuZix');
        cy.wait(3000);
    })

    it('should have register button' , () => {
        cy.get("#registerbutton").contains('Register');
        cy.wait(2000);
    })
    

    

    it('should have login button' , () => {
        cy.get('#loginbutton').click();
        cy.wait(3000);
        cy.url().should('include','login');
    })

    // it('should have email field' , () => {
    //     cy.get('#emailfield').contains('Email');
    //     cy.wait(3000);
        
    //     // cy.wait(3000);
    // })

    // it('should have password field' , () => {
    //     cy.get('#passfield').contains('Password');
    //     cy.wait(3000);
        
    //     // cy.wait(3000);
    // })
})

describe('testing the login component ', () => {

    it('should enter username and password' , () => {

        cy.get('#emailfield').type('k@c.com');
        cy.get('#passfield').type('tommy');
        cy.wait(2000);
        cy.get('#signinbut').click();

    })
   
})

describe('testing the user dashboard' , () => {

    it('should have playlist button' , () => {
        cy.get('#playlistbutton').contains('PlayList');
        cy.wait(2000);
    })

    it('should have logout button' , () => {
        cy.get('#logoutbutton').contains('Logout');
        cy.wait(2000);
    })

    
    it('work playlist button' , () => {
        cy.get('#playlistbutton').click();
        cy.wait(3000);
        cy.url().should('include','playlist');
    })

    it('work logout button' , () => {
        cy.get('#logoutbutton').click();
        cy.wait(2000);
        cy.url().should('include','/')
    })
})