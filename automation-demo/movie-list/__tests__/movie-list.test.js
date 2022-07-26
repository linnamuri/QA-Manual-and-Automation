// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder,By, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://localhost:5500/movie-list/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

describe('movie-list tests',() => {

    test('check if movie is added to the list',async() => {
        //selecting the input element and sending it keys
        await driver.findElement(By.xpath('//input')).sendKeys('Home alone')

        //selecting the button and clicking it
        await driver.findElement(By.xpath('//button')).click()

        const movie = await driver.findElement(By.xpath('//li'))

        const displayed = movie.isDisplayed()

        expect(displayed).toBeTruthy()
        
        await driver.sleep(3000)

    })
})
