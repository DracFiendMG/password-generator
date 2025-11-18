// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passLength = 10

let passOne = document.querySelector("#pass-one")
let passTwo = document.querySelector("#pass-two")
let length = document.querySelector("#length")

function incrementPassLength() {
    if (passLength < 20) {
        passLength++
        length.textContent = passLength
    }
}

function decrementPassLength() {
    if (passLength > 1) {
        passLength--
        length.textContent = passLength
    }
}

function generatePasswords() {
    passOne.textContent = generatePassword()
    passTwo.textContent = generatePassword()
}

function generatePassword() {
    let password = ""
    
    const characters = []
    
    includeOrExclude(characters)
    
    for (let i = 0; i < passLength; i++) {
        password += getRandomChar(characters)
    }
    
    return password
}

function getRandomChar(characters) {
    return characters[Math.floor(Math.random() * characters.length)]
}

function copyText(id) {
    let textToCopy = ""
    if (id === 'pass-one') {
        textToCopy = passOne.textContent
    } else if (id === 'pass-two') {
        textToCopy = passTwo.textContent
    }
    
    if (textToCopy !== "") {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Password copied to clipboard!")
        }).catch(err => {
            console.error("Failed to copy: ", err)
        })
    }
}

function includeOrExclude(characters) {
    let numbersCheckbox = document.querySelector("#numbers-checkbox")
    let symbolCheckbox = document.querySelector("#symbol-checkbox")
    
    let includeNumber = numbersCheckbox.checked
    let includeSymbol = symbolCheckbox.checked
    
    // console.log(includeNumber)
    // console.log(includeSymbol)
    
    if (includeNumber && includeSymbol) {
        characters.push(...alphabets, ...symbols, ...numbers)
    } else if (includeNumber) {
        characters.push(...alphabets, ...numbers)
    } else if (includeSymbol) {
        characters.push(...alphabets, ...symbols)
    } else {
        characters.push(...alphabets)
    }
    
    // console.log(characters)
}


