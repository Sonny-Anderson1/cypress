import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {


  const selectorsList ={
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dasboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholdder='yyyy-mm-dd']",
    dateCloseBotton: ".--close",
    submitBotton: "[type='submit']",
    buttonselect: ".oxd-select-text--arrow",
    selectsuspense: "[class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']"
  }

  it.only('User Info Update - Sucesso', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    //cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    //cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    //cy.get(selectorsList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.dasboardGrid)
    //cy.get(selectorsList.myInfoButton).click()
    //cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    //cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    //cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(2).clear().type('NickNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('Emp.Idtest')
    //cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    //cy.get(selectorsList.genericField).eq(6).clear().type('DLNTest')
    //cy.get(selectorsList.genericField).eq(6).clear().type('2026-08-29')
    //cy.get(selectorsList.dateCloseBotton).click()
    //cy.get(selectorsList.buttonselect).eq(0).click()
    //cy.get(selectorsList.selectsuspense).eq(0).click()
    //cy.get(selectorsList.submitBotton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully')
    //cy.get('.oxd-toast-close')
    
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongcredentialAlert)
   
  })
})
