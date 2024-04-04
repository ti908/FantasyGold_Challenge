
// To be run before each test case part of the steps
beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
globalThis.data=data
//this.data=data
    })
});