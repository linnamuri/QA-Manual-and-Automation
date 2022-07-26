const {
    
    returnTwo,
    greeting,
    add
    
} = require('./function.js')



describe('returnTwo',() => {
    test( 'returnTwo should return number 2',() => {
     expect(returnTwo()).toBe(2)
    })
}
)

describe('greeting',() => {
    test('greeting should return hello person',() =>
    {
        expect(greeting("test")).toBe("Hello,test")
    })
})

describe ('add',() => {
test('sum of two numbers should be returned',() => {
    expect(add(3,4)).toBe(7)

})
})

describe ('perfectSquare',() => {
    test('next perfect square should be returned',() => {
        expect(perfectSquare(9)).toBe(16)
    
    })
    })


    