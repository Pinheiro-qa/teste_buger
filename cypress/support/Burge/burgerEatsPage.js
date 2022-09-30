const el = require ('./burgerEatsElements').ELEMENTS
class Page {

    cadastro(){
        cy.get('strong').click()
        cy.get(el.campoNome).type('Antonio Marcos dos Anjos')
        cy.get(el.campoCpf).type('39308324372')
        cy.get(el.campoEmail).type('email@email.com')
        cy.get(el.campoWhatapp).type('85996433668')
        cy.get(el.campoCep).type('60190260')
        cy.get(el.botaoCep).click()
        cy.get(el.nrEdress).type('98')
        cy.get(el.nomeRua).type('Quada 23')
        cy.get(el.metodoEntrega).click()
        cy.get('input[type="file"]')
        .as('fileInput')
        .attachFile('cnh.jpg')
        cy.get(el.botaoCadastro).click()
    }
    cadastroInvalido1(){
        cy.get('strong').click()
        cy.get(el.campoNome).type('Marcos Antonio dos Silva')
        cy.get(el.campoCpf).type('39308324372')
        cy.get(el.campoEmail).type('email@email.com')
        cy.get(el.campoWhatapp).type('85996433668')
        cy.get(el.campoCep).type('60190260')
        cy.get(el.botaoCep).click()
        cy.get(el.nrEdress).type('98')
        cy.get(el.nomeRua).type('Quada 23')
        cy.get(el.metodoEntrega).click()
        cy.get(el.botaoCadastro).click()
        cy.get(el.ErroCnh).should('be.visible').and('contain', 'Adicione uma foto da sua CNH')
    }
}
export default new Page();