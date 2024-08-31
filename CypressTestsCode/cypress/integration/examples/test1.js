/// reference types="cypress" />
//import HomePage from "../pages/Login";
import 'cypress-file-upload';

/*describe("My first test suite", ()=>{
    let testData;
    before(()=>{
        cy.fixture("example").then((data)=>{
            testData=data;
        })
    })
    
    beforeEach(()=>{
        //cy.fixture('example').as('userData');       
    })

    it("First test case",()=>{
        cy.log(testData.name);
        cy.visit(Cypress.env("baseUrl")+"/AutomationPractice/");
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");   

    });

    it("First test case",()=>{
        cy.log(testData.name);
        Cypress.config("defaultCommandTimeout", 6000);

        //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.visit(Cypress.env("baseUrl")+"/AutomationPractice/");

        cy.get("input[value='radio1']").check().should('be.checked');
        cy.get('selector').should('have.attr', 'attributeName').and('contain','');
        cy.get('selector').should('have.attr', 'attributeName', '');
        expect("").to.be.equal("");
        expect(true).to.be.true;

        const arr=["gg'"];
        arr.forEach((element)=>{
            cy.login(element);
        });

        const homePage=new HomePage();
        homePage.getProductName();

        cy.on("window:alert", (str)=>{
        });

        cy.get("").then((el)=>{
            const url=el.prop("href")
            cy.visit(x);
            cy.origin(url, ()=>{

            })
        });

        cy.wait(3000);
        cy.get(":visible").click({force:true});
        cy.get(".h4",{timeout:15000}).click();
        cy.get(".h4").invoke("show");
        cy.get(".h4").invoke("removeAttr","target");
        cy.get('.menu-button').trigger('mouseover');

        //cy.get('#file-input').attachFile('example.txt');

        //npx cypress run --headed --browser chrome --spec cypress/integration/examples/*.js --env url=""

        API calls:
        cy.request("POST", "url", {
            "name": "Madhur",
            "class": "5"
        
        }).then((response)=>{
            expect(response.body).to.have.property("propName", "propValue");
            expect(response.status).to.eq(200);
            
            })

            cy.frameLoaded("css");
            cy.iframe.find("css").click();

            cy.get('select#dropdownId').find('option:selected').invoke('val/text').then((selectedValue) => {});

            cy.get('input[type="checkbox"]:checked') // Select all checked checkboxes
  .each(($checkbox) => {
    cy.wrap($checkbox).invoke('val').then((value)



})

    after(()=>{

    })

    afterEach(()=>{
        
    })

}) */