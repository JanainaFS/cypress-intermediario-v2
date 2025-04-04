Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl')
  
    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
  })
  