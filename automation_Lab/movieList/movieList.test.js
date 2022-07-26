


const {Builder, Capabilities,By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('MovieList Testing',()=>{
    
    test('creating a movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('spiderman \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })
    test('creating a movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('spiderman2 \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })
    test('creating a movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('spiderman3 \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })
    test('creating a movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('spiderman4 \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('crossing off a movie message',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        let message = await driver.findElement(By.id("message")).getText()
        await driver.sleep(2000)
        expect(message).toBe('spiderman watched!')
    })
    
    test('un-crossing off a movie message',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        let message = await driver.findElement(By.id("message")).getText()
        await driver.sleep(2000)
        expect(message).toBe('spiderman added back!')
    })
    test('crossing off a movie',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked = await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('checked')
    })

    test('un-crossing off a movie',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked = await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('')
    })
    
    
    test('deleting a movie',async()=>{
        await driver.findElement(By.id("spiderman2")).click()
        await driver.sleep(2000)
        movies = await driver.findElement(By.xpath('//ul')).getText()
        movies = movies.split('x\n')
        console.log(movies)
        let existing = movies.includes('spiderman2')
        expect(existing).toBeFalsy()
    })
    
    test('deleting a movie message',async()=>{
        await driver.findElement(By.id("spiderman")).click()
        let message = await driver.findElement(By.id("message")).getText()
        await driver.sleep(2000)
        expect(message).toBe('spiderman deleted!')
    })


})