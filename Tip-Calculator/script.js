let billDiv = document.getElementById('billAmount')
let tipPercentageDiv = document.getElementById('tipPercentage')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let totalAmountDiv = document.getElementById('perPersonTotal')

let num = Number(numberOfPeopleDiv.innerText)

const calculate = () => {
    let bill = Number(billDiv.value)
    let tip = Number(tipPercentageDiv.value)
    let numberOfPeople = num

    tip = bill * (tip / 100)
    let totalBill = (bill + tip) / num

    totalAmountDiv.innerText = `Rs. ${totalBill.toFixed(2)}`
}

const increment = () => {
    num+=1
    numberOfPeopleDiv.innerText = `${num}`
    calculate()
}

const decrement = () => {
    if(num==1){
        return
    }
    num -= 1
    numberOfPeopleDiv.innerText = `${num}`
    calculate()
}