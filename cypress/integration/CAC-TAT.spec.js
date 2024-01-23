////<reference types="Cypress/">

const { describe } = require("mocha");

describe('Central de atendimento ao cliente TAT', function(){

    it ('verifica o titulo da aplicacao', function () {
        cy.visit('../../src/index.html')

        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT' )

        
    })
})