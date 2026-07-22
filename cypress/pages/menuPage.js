class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            perfomanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }
        return selectors
    } 

    acessMyinfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    acessPerformance() {
        cy.get(this.selectorsList().perfomanceButton).click()
    }
    

}
export default MenuPage

    