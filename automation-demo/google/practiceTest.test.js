// Here in our .test.ts file we want to import some stuff from Selenium-Webdriver
// We import Builder and Capabilities so we can build a driver that will allow us 
// to interact with the browser
const {Builder, Capabilities} = require('selenium-webdriver')

// And we are also importing a function here that will do a search on Google
const {search} = require('./search')
const {newSearch} = require('./newSearch')

// We ALWAYS need to require chromedriver. We don't need to save to a variable since we just need to bring in chromedriver once and not reference it again.
require('chromedriver')

// And this next line is also the same as far as setting up Chrome goes
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// A beforeAll will run a single time in the beginning before all of our tests
beforeAll(async () => {
    await (await driver).get('https://www.google.com/')
})

// And an afterAll will do the opposite, it will run after all of our tests have ran
afterAll(async () => {
    await (await driver).quit()
})

// This is how we can add individual tests, the string 'Google Search Test' is just the name of the test
// We're using async functions because we need to use 'await' when we're dealing with the browser
test('Google Search Test', async () => {
    await search(driver, 'Tenet')
})

test('Google hot sauces', async () => {
    await newSearch(driver, 'EL yucateco')
})

test('search for puppies and click the first image', async() => {
    //location for google's input element and clear it
    await driver.findElement(By.name('q')).clear()
    
    await driver.findElement(By.name('q')).sendKeys(`Puppies\n`)

    await driver.findElement(By.xpath('(//a[text() = "Images"])[1]')).click()

    let resultsText = await driver.findElement(By.id('islrg')).getText()

    expect(resultsText.toLowerCase()).toContain('puppies')
})


