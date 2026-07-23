import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    //usernameField: "[name='username']",
    //passwordField: "[name='password']",
    //loginButton: "[type='submit']",
    //sectionTitleTopBar: ".oxd-layout .oxd-topbar-header-breadcrumb-module",
    //dashboardGrid: ".orangehrm-dashboard-grid",
    //wrongCredential: ".oxd-alert",
    //myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    //firstNameField: "[name='firstName']",
    //middleNameField: "[name='middleName']",
    //lastNameField: "[name='lastName']",
    //GenericField: ".oxd-input",
    //placeholderField: "[data-v-1f99f73c=''][placeholder='yyyy-dd-mm']",
    //wrapperField: ".oxd-select-wrapper",
    //submitButton: "[type='submit']"
  }

  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userDataSuccess.username, userData.userDataSuccess.password)
    
    dashboardPage.checkDashboardPage()

    myinfoPage.accessMyinfoPage()
    myinfoPage.fillPersonalDetails("Hiago", "Aguiar", "da Silva")
    myinfoPage.fillEmployeeDetails("123456test", "t12", "72613861teste", "2010-12-12", "123456789", "987654321" , "1990-01-01")
    myinfoPage.saveForm()
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userDataFail.username)
    cy.get(selectorsList.passwordField).type(userData.userDataFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredential).contains('Invalid')
    })
})