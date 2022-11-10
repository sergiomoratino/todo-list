context('Test E2E todo list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/all');
  });
  it('Delete all tasks', () => {
    cy.get('.todo-list');
    cy.get('.toggle-all').click();
    cy.get('.clear-completed').click();
  });
  it('Create 3 tasks', () => {
    cy.get('#newTaskInput').type('HTML Course').type('{enter}');
    cy.get('#newTaskInput').type('Javascript Course').type('{enter}');
    cy.get('#newTaskInput').type('Vue Course {enter}');
  });
  it('Mark task done', () => {
    cy.get('.todo-list .toggle').first().click();
  });
  it('Test Routing', () => {
    cy.get('.filters > :nth-child(2) > a').click();
    cy.get('.filters > :nth-child(3) > a').click();
    cy.get('.filters > :nth-child(1) > a').click();
  });
  it('Change name task', () => {
    cy.get('.todo-list').last().click();
    cy.get('.edit').clear().type('Vue Course - Editado {enter}');
  });
});
