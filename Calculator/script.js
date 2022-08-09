let string = " "
let inputValueDiv = document.getElementById('expressionInput')
let temp = 0

const clearInput = () => {
    inputValueDiv.value = " "
}

const removeLetter = () => {
    let len = inputValueDiv.value.length
    inputValueDiv.value = inputValueDiv.value.slice(0,len-1)
}

const displayButton = (tempStr) => {
    inputValueDiv.value = inputValueDiv.value + tempStr
}

const changeSign = () => {
    if(temp%2==0)
        inputValueDiv.value = '-' + inputValueDiv.value
    else
        inputValueDiv.value = inputValueDiv.value.slice(1)
    temp++
} 

const calculateExpression = () => {
    let result = eval(inputValueDiv.value)
    inputValueDiv.value = result.toFixed(2)
}