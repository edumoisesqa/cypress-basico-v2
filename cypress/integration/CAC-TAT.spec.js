////<reference types="Cypress/">

const { describe } = require("mocha");

describe('Central de atendimento ao cliente TAT', function(){
    beforeEach(function(){
        cy.visit('../../src/index.html')


  })

    it ('verifica o titulo da aplicacao', function () {
     
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT' )

        
    })

    it('preenche os campos obrigatorios e envia o formulario', function(){
        cy.get('#firstname').type('Eduardo')
        cy.get('#lastName').type('Moises')
        cy.get('#email').type('edu@moises.com')
        cy.get('#open-text  -area').type('Teste')
        cy.get('#button[type="submit"]').type('Teste')
        cy.get('#button[type="submit"]').click()

        cy.get('.sucess').should('be.visible')

    })
    
    it('preenche os campos obrigatorios e envia o formulario texto longo ', function(){
            const longText = 'Teste, teste , teste , teste , teste , teste,Teste, teste , teste , teste , teste , teste '}

        cy.get('#firstname').type('Eduardo')
        cy.get('#lastName').type('Moises')
        cy.get('#email').type('edu@moises.com')
        cy.get('#open-text  -area').type('Teste')
        cy.get('#button[type="submit"]').type('Teste')
        cy.get('#button[type="submit"]').click()

        cy.get('.sucess').should('be.visible')

    })

    
})