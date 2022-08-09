let passwordOutput = document.getElementById("passwordOutput")

const generatePassword = () => {
    let str = '0123456789' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz'
    let passwordLength = 8
    let ans = ""

    for(let temp = 0; temp<passwordLength; temp++){
        ans += str.charAt((Math.random() * str.length))
    }
    
    passwordOutput.value = `${ans}`
}