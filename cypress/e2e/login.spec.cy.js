import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-layout .oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredential: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    GenericField: ".oxd-input",
    placeholderField: "[data-v-1f99f73c=''][placeholder='yyyy-dd-mm']",
    wrapperField: ".oxd-select-wrapper",
    submitButton: "[type='submit']"
  }

  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userDataSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userDataSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Hiago")//coloquei .clear() para limpar o campo antes de digitar o nome
    cy.get(selectorsList.middleNameField).clear().type("Aguiar")
    cy.get(selectorsList.lastNameField).clear().type("da Silva")
    cy.get(selectorsList.GenericField).eq(4).clear().type("123456test")
    cy.get(selectorsList.GenericField).eq(5).clear().type("t12")
    cy.get(selectorsList.GenericField).eq(6).clear().type("72613861teste")
    cy.get(selectorsList.placeholderField).eq(0).clear().click().type("2010-12-12")
    cy.get(selectorsList.wrapperField).eq(0).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.contains('.oxd-select-option', 'Angolan').click()
    cy.get(selectorsList.placeholderField).eq(1).clear().click().type("1995-12-12")
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Success')

  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userDataFail.username)
    cy.get(selectorsList.passwordField).type(userData.userDataFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredential).contains('Invalid')
    })
})