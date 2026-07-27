import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myinfoPage.js'

const Chance = require('chance')

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()
const chance = new Chance()

describe('Orange HRM Tests', () => {

  const selectorsList = {

  }

  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userDataSuccess.username, userData.userDataSuccess.password)
    
    dashboardPage.checkDashboardPage()

    myinfoPage.accessMyinfoPage()
    myinfoPage.fillPersonalDetails(chance.first(), "Aguiar", chance.last())
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