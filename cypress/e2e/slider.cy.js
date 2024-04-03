describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'London');
  });
});
 
describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});
 
  describe('Swiper Gallery Navigation Buttons Test', function () {
    it('Checks if page navigation works properly', function () {
      cy.visit('http://localhost:3000');
      cy.get('.swiper-slide-active').should('contain', 'Rome');
      cy.get('.swiper-button-next').click();
      cy.wait(2000)
      cy.get('.swiper-slide-active').should('contain', 'London');
      cy.get('.swiper-button-prev').click({ force: true });
      cy.wait(2000)
      cy.get('.swiper-slide-active').should('contain', 'Rome');
    });
});