///<reference types="cypress"/>
import Page from "../support/Burge/burgerEatsPage";

//import { describe, it } from mocha;

describe('burge', () =>{
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app')
    })
    it('realizar cadastro com sucesso', () => {
        Page.cadastro();  
});
   it('cenario invalido cadastro sem cnh',()=>{
        Page.cadastroInvalido1();
 
    })
});