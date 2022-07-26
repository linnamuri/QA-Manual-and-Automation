

    module.exports = 
    {
    returnTwo,
    greeting,
    add
    }
    
    function returnTwo()
    {
        return 2
    }
        


    function greeting(nameParam)
        {
           return `Hello,${nameParam}`
        }

    

    function add(num1,num2) 
    { 

       return num1+num2

    }


    function perfectSquare(n) 
    {
    let x = Math.sqrt(n); 
    let y= (x+1)*(x+1)
    return y
    }