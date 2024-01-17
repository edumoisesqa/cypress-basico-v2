///<reference types="Cypress/">

const { describe } = require("mocha");

describe('Central de atendimento ao cliente TAT', function(){

    it ('verifica o titulo da aplicacao', function () {
        cypress.visit('./src/index.html')

        cypress.title().should('be.equal', )

        
    })
})