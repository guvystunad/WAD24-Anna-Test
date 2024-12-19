/// <reference types = "cypress"/>  
/*
it('Test 1', () => {
  cy.visit('http://localhost:8080/routemanagement')
  cy.get('h2').contains('Routes Management Pannel')
  cy.get('button').should('contain', 'Add Route')
  cy.get('#dateAdd').should('have.attr', 'placeholder')
}) */

/*it('Test 2', () => {
  cy.visit('http://localhost:8080/routemanagement')
  //to be add by you
  cy.get('#fromcityAdd').type('Rome')
  cy.get('#tocityAdd').type('Florence')
  cy.get('#costAdd').type(24)
  cy.get('#timeAdd').type('06:00:00')
  cy.get('#dateAdd').type('2022-03-24')
  cy.get('.add').click()

  cy.get('table tbody').should('contain', 'Rome')
    .and('contain', 'Florence')
    .and('contain', '24')
    .and('contain', '06:00:00')
    .and('contain', '2022-03-24');
}) */

/* API */
it("Test 3 - API - Add route request", function() {
  cy.request('POST', 'http://localhost:3000/api/routes', {
      //to be add by you
          "fromcity": "Parnu",
          "tocity": "Tartu",
          "cost": 12,
          "departuretime": "12:00:00",
          "departuredate": "2022-03-24"
      })
      .then((res) => {
          cy.log(res.body)

          expect(res.status).to.be.oneOf([200, 201])

          const addedRoute = res.body.rows[0];
          expect(addedRoute).to.have.property('id')
          expect(addedRoute.fromcity).to.equal("Parnu")
          expect(addedRoute.tocity).to.equal("Tartu")
          expect(addedRoute.cost).to.equal(12)
          expect(addedRoute.departuretime).to.equal("12:00:00")
          expect(addedRoute.departuredate).to.equal("2022-03-24")
          
          let post = res.body.rows['0'].id
          expect(post).to.not.be.null;
          cy.log('a route is added')
      });
})