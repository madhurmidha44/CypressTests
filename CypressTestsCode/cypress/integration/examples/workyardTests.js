/// reference types="cypress" />
import Login from "../pages/Login";
import Homepage from "../pages/homepage";

import 'cypress-file-upload';

describe("My first test suite", ()=>{
    let testData;
    before(()=>{
        cy.fixture("example").then((data)=>{
            testData=data;
        })
    })
    
    beforeEach(()=>{
        //cy.fixture('example').as('userData');       
    })

    it("Login with valid Email",()=>{
        cy.visit(Cypress.env("baseUrl")+"/u/login");  
        const login=new Login();
        login.getEmail().type("jgordon+testing@workyard.com");
        login.getPassword().type("Yubikey123!");
        login.getLoginBtn().click();
        const homepage=new Homepage();
        homepage.getPageTitle().should("have.text", "Time Cards");
        //cy.get("div[data-testid='page-title']").should("have.text", "Time Cards");

    });

    it("Login with invalid Email",()=>{
        cy.visit(Cypress.env("baseUrl")+"/u/login");  
        const login=new Login();
        login.getEmail().type("jgordon1+testing@workyard.com");
        login.getPassword().type("Yubikey123!");
        login.getLoginBtn().click();
        login.getLoginError().should("have.text", "Login failed - the email address or password was incorrect");

    });

    it("Login with Mobile",()=>{
        cy.visit(Cypress.env("baseUrl")+"/u/login"); 
        const login=new Login();
        login.getLoginMobileBtn().click(); 
        //cy.get("span[kind='transparent-black']").click();
        cy.get("input[data-testid='mobile-input']").type("+16563239876");
        cy.contains("LOG IN").click();
        cy.get("input[data-number='0']").type("0");
        cy.get("input[data-number='1']").type("0");
        cy.get("input[data-number='2']").type("0");
        cy.get("input[data-number='3']").type("0");
        cy.contains("VERIFY").click();
        cy.get("div[data-testid='page-title']").should("have.text", "Time Cards");

    });

    

    after(()=>{

    })

    afterEach(()=>{
        
    })

})