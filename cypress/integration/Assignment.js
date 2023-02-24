
describe('Paternity Leave', function() {
	
it('Login ', function() {
    cy.visit("https://pulse.itvedant.com/")
    cy.get('#loginform-unique').type('tejas@itvedant.com')
    cy.get('#loginform-password').type('Swatej@0108')
    cy.get(':nth-child(7) > .bg-success').click()
    cy.get('.navigation-accordion > :nth-child(1) > a > :nth-child(2) > span').click({force: true});
    cy.get(':nth-child(1) > a > .panel > .panel-body > h4.no-margin').click({force: true});
	for(var i=0; i<100; i++){
	cy.xpath("//tbody/tr[1]/td[2]").click({force: true})
    cy.wait(500)
    cy.get(':nth-child(1) > .choice > span > .styled').check();
        cy.get('#w0 > .btn').click();
        cy.wait(1000)
 
}
})

})