/// <reference types = "Cypress"/>
describe("Product menu", ()=>{

    beforeEach(()=>{
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
              // failing the test
                return false;
                }); 
    
    cy.visit("https://www.myprotein.ro/");

    });

        it("Category fields open on click",()=>{

            cy.get('.responsiveFlyoutMenu_burgerMenu > path').click();
            cy.get('[data-context="nutrition"] > .responsiveFlyoutMenu_levelOneLink').click();
            cy.get('.responsiveFlyoutMenu_menuBackButton').click();
            cy.get('[data-context="clothing"] > .responsiveFlyoutMenu_levelOneLink').click();
            cy.get('.responsiveFlyoutMenu_menuBackButton').click();
        });

        it("Search bar > Special character",()=>{

            cy.get('.headerSearch_toggleForm > .headerSearch_spyglass').click();
            cy.get("#header-search-input").should("be.visible");
            cy.get("#header-search-input").type("@{enter}");

        });

        it("Links in the Footer are available and functional",()=>{

            cy.get('.eastendFooterLinkColumns_levelTwo-first > :nth-child(1)').click();
            cy.get(':nth-child(2) > .eastendFooterLinkColumns_levelTwoItemLink').click();
            cy.get(':nth-child(4) > .eastendFooterLinkColumns_levelTwoItemLink').click();
            cy.get(':nth-child(5) > .eastendFooterLinkColumns_levelTwoItemLink').click();
            cy.get('.eastendFooterLinkColumns_levelOneItem-1 > .eastendFooterLinkColumns_levelTwo > :nth-child(1)').click();
        });
        
        it("Search bar > Blank search bar",()=>{

            cy.get('.headerSearch_toggleForm > .headerSearch_spyglass').click();
            cy.get("#header-search-input").type("{enter}");



        });


        it("Add a product to the cart",()=>{
            cy.get(".headerSearch_toggleForm > .headerSearch_spyglass").click();
            cy.get("#header-search-input").should("be.visible");
            cy.get("#header-search-input").type("proteine{enter}");
            cy.get("#athenaProductBlock_productName-10530943").click();
            cy.get(".productAddToBasket").click(); 
            cy.get("button.athenaAddedToBasketModal_closeContainer").click();
            
    });

    var testData = require("../../LoginTestData.json");
    console.log(testData);

    testData.badLogin.forEach((temp)=>{
        it("Testing login with bad data",()=>{
            cy.get("#responsiveAccountHeader_openAccountButtonMobile_rightSection").click();
            cy.get('.responsiveAccountHeader_accountListButtonItem-first').click();
            cy.get('#username').type(temp.username);
            cy.get('#password').type(temp.pass);
            cy.get('#login-submit').click();
        });
    });
    testData.goodLogin.forEach((temp)=>{
        it("Testing login with good data",()=>{
            cy.get('#responsiveAccountHeader_openAccountButtonMobile_rightSection').click();
            cy.get('.responsiveAccountHeader_accountLogin').click();
            cy.get('#username').type(temp.username);
            cy.get('#password').type(temp.pass);
            cy.get('#login-submit').click();

        });  
    
        it("Testing Logout",()=>{
            cy.get('#responsiveAccountHeader_openAccountButtonMobile_rightSection').click();
            cy.get('.responsiveAccountHeader_accountLogin').click();
            cy.get('#username').type(temp.username);
            cy.get('#password').type(temp.pass);
            cy.get('#login-submit').click();
            cy.get('.myAccount_logOutButton').click();

        });
    });
});