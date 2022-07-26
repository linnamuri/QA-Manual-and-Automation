 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('should run',() => {
    expect(2).toBe(2)
  }
  )

  instanceof('first name should be pattern',() => {
    expect (testData.firstName).toBe('patten')
  }
  )

  describe('formatTitle tests',() => {
    test('formatTitle returns a string',() => {
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
    })



    // test to make sure that the fnction does exactly what it should do
    test('formatTitle should format the title corretly',() =>{
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')
    })
  })

  describe('shortenBio tests',() => {
//testing to make sure shortenBio shortens the string
    test('should shorten  bio string' , () => {
      let shortBio = shortenBio(testData.bio)
    // using a matcher(toBeLessThan )to compare the length properties of the two strings.
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    })

    test('shortend should add period to the end of the content', () => {
      let shortBio = shortenBio(testData.bio)
      console.log(shortBio)
      expect(shortBio).toContain('...')
    })
  })
describe('convertLength tests', () => {
  //testing length main functionality
  test('convertLength should return an array with length 2',() => {
    let result = convertLength(testData.length)
    expect(result).toHaveLength(2)
  })

//using equals to check if number below 60 can be handled
test('convertLength can handle numbers below 60',() => {
  let result = convertLength(30)
  expect(result[1]).toEqual(30)
})
})