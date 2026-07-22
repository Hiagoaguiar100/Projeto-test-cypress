class MyinfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            GenericField: ".oxd-input",
            placeholderField: "[data-v-1f99f73c=''][placeholder='yyyy-dd-mm']",
            wrapperField: ".oxd-select-wrapper",
            submitButton: "[type='submit']" 

        }
        return selectors
    }
    accessMyinfoPage() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    infoPerson(firstName, middleName, lastName, employeeId, otherId, driverLicenseNumber, licenseExpiryDate, ssnNumber, sinNumber, nationality, dateOfBirth) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)//coloquei .clear() para limpar o campo antes de digitar o nome
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().GenericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().GenericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().GenericField).eq(6).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().placeholderField).eq(0).clear().click().type(licenseExpiryDate)
        cy.get(this.selectorsList().GenericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().GenericField).eq(9).clear().type(sinNumber)
        cy.get(this.selectorsList().wrapperField).eq(0).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
        cy.contains('.oxd-select-option', 'Angolan').click()
        cy.get(this.selectorsList().placeholderField).eq(1).clear().click().type(dateOfBirth)
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', "Success")
    }

}
export default MyinfoPage